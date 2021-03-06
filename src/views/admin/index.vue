<template>
  <admin-layout v-model:sidebarOpen="sidebarOpen" v-model:darkMode="darkMode">
    <template #sidebar>
      <!-- sidebar head -->
      <div class="flex flex-col items-center justify-center mt-8 select-none">
        <div class="flex items-center">
          <!-- <img class="h-8 w-8" src="@/assets/logo.svg" /> -->
          <span class="dark:text-white text-2xl mx-2 font-semibold">Admin</span>
        </div>
        <p class="mt-2 text-sm text-gray-500 font-mono">An elegant dashboard</p>
      </div>

      <!-- sidebar menu -->
      <router-view name="SidebarMenu" />
    </template>

    <template #header>
      <div class="flex items-center justify-end space-x-6">
        <div class="relative">
          <button
            v-if="notificationUnread"
            class="flex text-gray-600 focus:outline-none"
            @click="notificationDropdownOpen = !notificationDropdownOpen"
          >
            <icon-remind class="text-2xl" />
            <span
              v-if="notificationUnread"
              class="absolute -top-1 -right-1 text-center overflow-hidden w-4 h-4 text-xs bg-red-400 text-white rounded-lg"
              >{{ notificationUnread > 9 ? '+' : notificationUnread }}</span
            >
          </button>

          <router-link
            v-else
            :to="$RoutePath.ADMIN_NOTIFICATIONS"
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
            class="absolute right-0 mt-2 bg-white dark:bg-gray-800 rounded-lg shadow-xl border dark:border-gray-900 overflow-hidden z-10 w-80"
          >
            <ul
              v-if="notifications.length > 0"
              @click="notificationDropdownOpen = !notificationDropdownOpen"
            >
              <li v-for="{ id, message, timestamp } in notifications" :key="id">
                <router-link
                  :to="{
                    name: $RouteName.ADMIN_NOTIFICATION_DETAIL,
                    params: { id },
                  }"
                  class="flex items-center px-4 py-3 hover:text-white hover:bg-blue-600 -mx-2"
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
            class="relative block h-8 w-8 rounded-full overflow-hidden focus:outline-none"
            @click="accountDropdownOpen = !accountDropdownOpen"
          >
            <icon-user class="text-3xl text-gray-600" />
          </button>

          <div
            v-show="accountDropdownOpen"
            class="fixed inset-0 h-full w-full z-10"
            @click="accountDropdownOpen = false"
          ></div>
          <nav
            v-show="accountDropdownOpen"
            class="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-md overflow-hidden shadow-xl z-10 border dark:border-gray-900"
            @click="accountDropdownOpen = !accountDropdownOpen"
          >
            <router-link
              :to="$RoutePath.ADMIN_PROFILE"
              class="block px-4 py-2 text-sm hover:bg-blue-600 hover:text-white"
              >Profile</router-link
            >
            <a
              class="block px-4 py-2 text-sm hover:bg-blue-600 hover:text-white"
              @click="handleClickLogout"
              >Logout</a
            >
          </nav>
        </div>
      </div>
    </template>

    <template #default>
      <router-view />
    </template>
  </admin-layout>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { RoutePath } from '@/constants/route';
import { fromAgo } from '@/utils/time';
import AdminLayout from '@/components/layout/admin.vue';
import { Remind as IconRemind, User as IconUser } from '@icon-park/vue-next';

export default defineComponent({
  components: { IconRemind, IconUser, AdminLayout },
  setup() {
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
    const darkMode = ref(false);
    const accountDropdownOpen = ref(false);
    const notificationDropdownOpen = ref(false);

    return {
      notifications,
      notificationUnread,

      sidebarOpen,
      darkMode,
      accountDropdownOpen,
      notificationDropdownOpen,
    };
  },
  methods: {
    fromAgo,
    handleClickLogout() {
      // ! fake action
      if (confirm('Are you sure?')) {
        this.$router.push(RoutePath.HOME);
      }
    },
  },
});
</script>
