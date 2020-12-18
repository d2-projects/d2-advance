<!--
  Thanks https://github.com/tailwindcomponents/dashboard-template
-->

<template>
  <div class="flex h-screen bg-gray-200">
    <!-- mobile mask for sidebar -->
    <div
      :class="sidebarOpen ? 'block' : 'hidden'"
      class="fixed z-20 inset-0 bg-black opacity-50 transition-opacity lg:hidden"
      @click="sidebarOpen = false"
    ></div>

    <!-- sidebar -->
    <div
      :class="
        sidebarOpen ? 'translate-x-0 ease-out' : '-translate-x-full ease-in'
      "
      class="
        fixed z-30 inset-y-0 left-0 w-64 transition duration-300 transform
        bg-gray-900 overflow-y-auto lg:translate-x-0 lg:static lg:inset-0
      "
    >
      <!-- logo in sidebar -->
      <div class="flex flex-col items-center justify-center mt-8 select-none">
        <div class="flex items-center">
          <img class="h-8 w-8" src="@/assets/logo.png" />
          <span class="text-white text-2xl mx-2 font-semibold">Admin</span>
        </div>
        <p class="mt-2 text-sm text-gray-500 font-mono">An elegant dashboard</p>
        <router-link :to="$RouteMap.HOME" class="mt-4">
          <button
            class="i
              px-6 py-2 text-xs font-medium text-center 
              text-white uppercase transition bg-blue-700 rounded shadow
              hover:shadow-lg hover:bg-blue-800 focus:outline-none
            "
          >
            back to home
          </button>
        </router-link>
      </div>

      <!-- menu -->
      <nav class="mt-10 select-none">
        <router-link
          :to="$RouteMap.ADMIN_DASHBOARD"
          class="
            flex items-center py-2 px-6 h-14 text-gray-500
            hover:bg-gray-700 hover:bg-opacity-25 hover:text-gray-100
            transition-all
          "
          active-class="bg-gray-700 bg-opacity-25 text-gray-100"
        >
          <svg
            class="h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"
            ></path>
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"
            ></path>
          </svg>

          <span class="mx-3">Dashboard</span>
        </router-link>

        <router-link
          :to="$RouteMap.ADMIN_CRUD_DEMO"
          class="
            flex items-center py-2 px-6 h-14 text-gray-500
            hover:bg-gray-700 hover:bg-opacity-25 hover:text-gray-100
            transition-all
          "
          active-class="bg-gray-700 bg-opacity-25 text-gray-100"
        >
          <svg
            class="h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M17 14v6m-3-3h6M6 10h2a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2zm10 0h2a2 2 0 002-2V6a2 2 0 00-2-2h-2a2 2 0 00-2 2v2a2 2 0 002 2zM6 20h2a2 2 0 002-2v-2a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2z"
            ></path>
          </svg>

          <span class="mx-3">CRUD Demo</span>
        </router-link>
      </nav>
    </div>

    <div class="flex-1 flex flex-col overflow-hidden">
      <header
        class="flex justify-between items-center py-4 px-6 bg-white shadow z-10"
      >
        <div class="flex items-center">
          <button
            class="text-gray-500 focus:outline-none lg:hidden"
            @click="sidebarOpen = true"
          >
            <svg
              class="h-6 w-6"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4 6H20M4 12H20M4 18H11"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
        </div>

        <div class="flex items-center">
          <div class="relative">
            <button
              class="flex mx-4 text-gray-600 focus:outline-none"
              @click="notificationOpen = !notificationOpen"
            >
              <svg
                class="h-6 w-6"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15 17H20L18.5951 15.5951C18.2141 15.2141 18 14.6973 18 14.1585V11C18 8.38757 16.3304 6.16509 14 5.34142V5C14 3.89543 13.1046 3 12 3C10.8954 3 10 3.89543 10 5V5.34142C7.66962 6.16509 6 8.38757 6 11V14.1585C6 14.6973 5.78595 15.2141 5.40493 15.5951L4 17H9M15 17V18C15 19.6569 13.6569 21 12 21C10.3431 21 9 19.6569 9 18V17M15 17H9"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
            </button>

            <div
              v-show="notificationOpen"
              class="fixed inset-0 h-full w-full z-10"
              @click="notificationOpen = false"
            ></div>
            <div
              v-show="notificationOpen"
              class="absolute right-0 mt-2 bg-white rounded-lg shadow-xl overflow-hidden z-10 w-80 border-t-2"
            >
              <a
                href="#"
                class="flex items-center px-4 py-3 text-gray-600 hover:text-white hover:bg-blue-600 -mx-2"
              >
                <img
                  class="h-8 w-8 rounded-full object-cover mx-1"
                  src="@/assets/logo.png"
                  alt="avatar"
                />
                <p class="text-sm mx-2">
                  <span class="font-bold" href="#">Sara Salah</span> replied on
                  the
                  <span class="font-bold text-blue-400" href="#"
                    >Upload Image</span
                  >
                  artical . 2m
                </p>
              </a>
              <a
                href="#"
                class="flex items-center px-4 py-3 text-gray-600 hover:text-white hover:bg-blue-600 -mx-2"
              >
                <img
                  class="h-8 w-8 rounded-full object-cover mx-1"
                  src="@/assets/logo.png"
                  alt="avatar"
                />
                <p class="text-sm mx-2">
                  <span class="font-bold" href="#">Slick Net</span> start
                  following you . 45m
                </p>
              </a>
            </div>
          </div>

          <div class="relative">
            <button
              class="relative block h-8 w-8 rounded-full overflow-hidden shadow focus:outline-none"
              @click="dropdownOpen = !dropdownOpen"
            >
              <img
                class="h-full w-full object-contain"
                src="@/assets/logo.png"
                alt="Your avatar"
              />
            </button>

            <div
              v-show="dropdownOpen"
              class="fixed inset-0 h-full w-full z-10"
              @click="dropdownOpen = false"
            ></div>
            <nav
              v-show="dropdownOpen"
              class="absolute right-0 mt-2 w-48 bg-white rounded-md overflow-hidden shadow-xl z-10 border-t-2"
            >
              <a
                href="#"
                class="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-600 hover:text-white"
                >Profile</a
              >
              <a
                href="#"
                class="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-600 hover:text-white"
                >Products</a
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
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  setup() {
    const sidebarOpen = ref(false);
    const notificationOpen = ref(false);
    const dropdownOpen = ref(false);

    return {
      sidebarOpen,
      notificationOpen,
      dropdownOpen
    };
  }
});
</script>
