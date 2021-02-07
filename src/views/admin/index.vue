<!--
  Thanks https://github.com/tailwindcomponents/dashboard-template
-->

<template>
  <div class="flex h-screen bg-gray-200">
    <!-- sidebar mobile mask -->
    <div
      :class="sidebarOpen ? 'block' : 'hidden'"
      class="fixed z-20 inset-0 bg-black opacity-50 transition-opacity lg:hidden"
      @click="sidebarOpen = false"
    ></div>

    <!-- sidebar -->
    <aside
      :class="
        sidebarOpen ? 'translate-x-0 ease-out' : '-translate-x-full ease-in'
      "
      class="fixed z-30 inset-y-0 left-0 w-64 transition duration-150 transform overflow-y-auto bg-gray-900 lg:translate-x-0 lg:static lg:inset-0"
    >
      <!-- sidebar head -->
      <div class="flex flex-col items-center justify-center mt-8 select-none">
        <div class="flex items-center">
          <!-- <img class="h-8 w-8" src="@/assets/logo.png" /> -->
          <span class="text-white text-2xl mx-2 font-semibold">Admin</span>
        </div>
        <p class="mt-2 text-sm text-gray-500 font-mono">An elegant dashboard</p>
        <router-link :to="$RouteMap.HOME" class="mt-4">
          <button
            class="i px-6 py-2 text-xs font-medium text-center text-white uppercase transition bg-blue-700 rounded shadow hover:shadow-lg hover:bg-blue-800 focus:outline-none"
          >
            back to home
          </button>
        </router-link>
      </div>

      <!-- sidebar menu -->
      <nav class="mt-10 select-none">
        <template
          v-for="({ label, to, icon }, index) in sidebarMenu"
          :key="index"
        >
          <router-link v-slot="{ href, navigate, isActive }" :to="to" custom>
            <a
              :active="isActive"
              :href="href"
              :class="[
                'flex items-center py-2 px-6 h-14 transition-all',
                isActive
                  ? 'bg-gray-700 bg-opacity-25 text-gray-100'
                  : 'text-gray-500 hover:bg-gray-700 hover:bg-opacity-25 hover:text-gray-100',
              ]"
              @click="navigate"
            >
              <component :is="icon" class="text-lg" />
              <span class="mx-3">{{ label }}</span>
            </a>
          </router-link>
        </template>
      </nav>
    </aside>

    <main class="flex-1 flex flex-col overflow-hidden">
      <header
        class="flex justify-between items-center py-4 px-6 bg-white shadow z-10"
      >
        <div class="flex items-center">
          <button
            class="text-gray-500 focus:outline-none lg:hidden"
            @click="sidebarOpen = true"
          >
            <icon-hamburger-button class="text-2xl" />
          </button>
        </div>

        <div class="flex items-center space-x-6">
          <div class="relative">
            <button
              v-if="notificationUnread"
              class="flex text-gray-600 focus:outline-none"
              @click="notificationDropdownOpen = !notificationDropdownOpen"
            >
              <icon-remind class="text-2xl" />
              <span
                v-if="notificationUnread"
                class="absolute -top-1 -right-1 w-4 h-4 text-xs bg-red-400 text-white rounded-lg"
                >{{ notificationUnread > 9 ? '+' : notificationUnread }}</span
              >
            </button>

            <router-link
              v-else
              :to="$RouteMap.ADMIN_NOTIFICATIONS"
              class="flex text-gray-600 focus:outline-none"
            >
              <icon-remind class="text-2xl" />
            </router-link>

            <div
              v-show="notificationDropdownOpen"
              class="fixed inset-0 h-full w-full z-10"
              @click="notificationDropdownOpen = false"
            ></div>
            <div
              v-show="notificationDropdownOpen"
              class="absolute right-0 mt-2 bg-white rounded-lg shadow-xl overflow-hidden z-10 w-80 border-t-2"
            >
              <ul
                v-if="notifications.length > 0"
                @click="notificationDropdownOpen = !notificationDropdownOpen"
              >
                <li
                  v-for="{ id, message, timestamp } in notifications"
                  :key="id"
                >
                  <router-link
                    :to="{
                      name: $RouteName.ADMIN_NOTIFICATION_DETAIL,
                      params: { id },
                    }"
                    class="flex items-center px-4 py-3 text-gray-600 hover:text-white hover:bg-blue-600 -mx-2"
                  >
                    <p class="text-sm mx-2">
                      {{ message }} <span class="font-bold">·</span>
                      {{ fromAgo(timestamp) }}
                    </p>
                  </router-link>
                </li>
              </ul>
              <div v-else class="px-4 py-3 text-gray-400 text-center italic">
                Empty
              </div>
            </div>
          </div>

          <div class="relative">
            <button
              class="relative block h-8 w-8 rounded-full overflow-hidden ring-gray-200 ring-2 ring-offset-1 focus:outline-none"
              @click="accountDropdownOpen = !accountDropdownOpen"
            >
              <img
                class="h-full w-full object-contain"
                src="@/assets/logo.png"
                alt="Your avatar"
              />
            </button>

            <div
              v-show="accountDropdownOpen"
              class="fixed inset-0 h-full w-full z-10"
              @click="accountDropdownOpen = false"
            ></div>
            <nav
              v-show="accountDropdownOpen"
              class="absolute right-0 mt-2 w-48 bg-white rounded-md overflow-hidden shadow-xl z-10 border-t-2"
              @click="accountDropdownOpen = !accountDropdownOpen"
            >
              <router-link
                :to="$RouteMap.ADMIN_PROFILE"
                class="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-600 hover:text-white"
                >Profile</router-link
              >
              <a
                href="/login"
                class="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-600 hover:text-white"
                >Logout</a
              >
            </nav>
          </div>
        </div>
      </header>
      <main class="flex-1 overflow-x-hidden overflow-y-auto bg-gray-200">
        <router-view />
      </main>
    </main>
  </div>
</template>

<script lang="ts">
import { Component, defineComponent, ref, shallowRef } from 'vue';
import { RouteMap } from '@/constants/route';
import { fromAgo } from '@/utils/time';
import {
  Dashboard,
  ListView,
  Remind as IconRemind,
  HamburgerButton as IconHamburgerButton,
} from '@icon-park/vue-next';

export default defineComponent({
  components: { IconRemind, IconHamburgerButton },
  setup() {
    const sidebarMenu = ref<{ label: string; icon: Component; to: string }[]>([
      {
        label: 'Dashboard',
        icon: shallowRef(Dashboard),
        to: RouteMap.ADMIN_DASHBOARD,
      },
      {
        label: 'CRUD Demo',
        icon: shallowRef(ListView),
        to: RouteMap.ADMIN_CRUD_DEMO,
      },
    ]);

    const notificationUnread = ref<number>(1);
    const notifications = ref<
      { id: string; timestamp: string; message: string; read: boolean }[]
    >([
      {
        id: '1',
        timestamp: new Date().toISOString(),
        message: 'hello world',
        read: false,
      },
    ]);

    const sidebarOpen = ref(false);
    const accountDropdownOpen = ref(false);
    const notificationDropdownOpen = ref(false);

    return {
      sidebarMenu,

      notifications,
      notificationUnread,

      sidebarOpen,
      accountDropdownOpen,
      notificationDropdownOpen,
    };
  },
  methods: {
    fromAgo,
  },
});
</script>
