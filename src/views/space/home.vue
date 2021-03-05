<template>
  <div :class="{ dark: darkMode }" class="font-sans antialiased">
    <div class="min-h-screen bg-gray-100 dark:bg-gray-900">
      <nav
        class="bg-white border-b border-gray-100 dark:border-gray-700 dark:bg-gray-800"
      >
        <!-- Primary Navigation Menu -->
        <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div class="flex justify-between h-16">
            <div class="flex">
              <!-- Logo -->
              <router-link
                :to="$RoutePath.SPACE_HOME"
                class="flex items-center flex-shrink-0 space-x-2"
              >
                <img
                  class="block w-auto h-9"
                  src="@/assets/logo.svg"
                  alt="logo"
                />
                <span class="font-bold dark:text-gray-200">Workspace</span>
              </router-link>
              <!-- Navigation Links -->
              <div class="hidden space-x-8 sm:-my-px sm:ml-10 sm:flex">
                <router-link
                  class="inline-flex items-center px-1 pt-1 text-sm font-medium leading-5 text-gray-900 transition duration-150 ease-in-out border-b-2 border-indigo-400 dark:border-indigo-300 dark:text-gray-200 focus:outline-none focus:border-indigo-700"
                  :to="$RoutePath.SPACE_HOME"
                >
                  Home
                </router-link>
              </div>
            </div>

            <div class="hidden sm:flex sm:items-center sm:ml-6">
              <router-link
                class="p-2 text-gray-500 transition duration-150 ease-in-out bg-white border border-transparent rounded-md dark:text-gray-200 dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 hover:text-gray-500 focus:outline-none focus:bg-gray-50 dark:focus:bg-gray-700 active:bg-gray-50"
                :to="$RoutePath.HOME"
              >
                back to home
              </router-link>

              <button
                class="p-2 text-gray-500 transition duration-150 ease-in-out bg-white border border-transparent rounded-md dark:text-gray-200 dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 hover:text-gray-700 focus:outline-none focus:bg-gray-50 dark:focus:bg-gray-700 active:bg-gray-50"
                @click="darkMode = !darkMode"
              >
                <svg
                  class="w-5 h-5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>

            <div class="flex items-center -mr-2 sm:hidden">
              <router-link
                class="p-2 text-gray-500 transition duration-150 ease-in-out bg-white border border-transparent rounded-md dark:text-gray-200 dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 hover:text-gray-700 focus:outline-none focus:bg-gray-50 dark:focus:bg-gray-700 active:bg-gray-50"
                :to="$RoutePath.HOME"
              >
                back to home
              </router-link>

              <button
                class="p-2 text-gray-500 transition duration-150 ease-in-out bg-white border border-transparent rounded-md dark:text-gray-200 dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 hover:text-gray-700 focus:outline-none focus:bg-gray-50 dark:focus:bg-gray-700 active:bg-gray-50"
                @click="darkMode = !darkMode"
              >
                <svg
                  class="w-5 h-5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </button>

              <button
                class="inline-flex items-center justify-center p-2 text-gray-400 transition duration-150 ease-in-out rounded-md dark:text-gray-200 hover:text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:bg-gray-100 dark:focus:bg-gray-700 focus:text-gray-500"
                @click="mobileMenu = !mobileMenu"
              >
                <svg
                  class="w-6 h-6"
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    class="inline-flex"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                  <path
                    class="hidden"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        </div>

        <div v-show="mobileMenu" class="sm:hidden border-t border-gray-100">
          <div class="pt-2 pb-3 space-y-1">
            <div>
              <a
                class="block py-2 pl-3 pr-4 text-base font-medium text-indigo-700 transition duration-150 ease-in-out border-l-4 border-indigo-400 dark:border-indigo-300 dark:text-indigo-200 bg-indigo-50 dark:bg-indigo-800 focus:outline-none focus:text-indigo-800 focus:bg-indigo-100 focus:border-indigo-700"
                href="#"
              >
                Home
              </a>
            </div>
          </div>
        </div>
      </nav>

      <header class="bg-white shadow dark:bg-gray-800">
        <div class="px-4 py-6 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <h2
            class="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200"
          >
            Home
          </h2>
        </div>
      </header>

      <main>
        <div class="py-12">
          <div class="mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div
              class="overflow-hidden bg-white shadow-xl dark:bg-gray-800 sm:rounded-lg"
            >
              <div>
                <div
                  class="p-6 bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700 sm:px-20"
                >
                  <div class="mt-8 text-2xl dark:text-gray-200">
                    TODO --- Welcome to your workspace!
                  </div>
                  <div class="mt-6 text-gray-500 dark:text-gray-400"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  setup() {
    const darkMode = ref(false);
    const mobileMenu = ref(false);

    return {
      darkMode,
      mobileMenu,
    };
  },
});
</script>
