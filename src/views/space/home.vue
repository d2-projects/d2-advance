<template>
  <div :class="{ dark: darkMode }">
    <div class="min-h-screen bg-gray-100 dark:bg-gray-900">
      <nav
        class="bg-white border-b border-gray-100 text-gray-700 dark:bg-gray-800 dark:border-gray-700"
      >
        <!-- Primary Navigation Menu -->
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div class="flex h-16 justify-between">
            <div class="flex">
              <!-- Logo -->
              <span
                :to="$RoutePath.SPACE_HOME"
                class="flex space-x-2 flex-shrink-0 items-center select-none"
              >
                <span class="font-bold text-2xl dark:text-gray-200"
                  >Workspace</span
                >
              </span>
              <!-- Navigation Links -->
              <div class="space-x-8 hidden sm:flex sm:-my-px sm:ml-10">
                <router-link
                  class="font-medium border-b-2 border-indigo-400 text-sm px-1 pt-1 transition ease-in-out text-gray-900 leading-5 duration-150 inline-flex items-center dark:border-indigo-300 dark:text-gray-200 focus:outline-none focus:border-indigo-700"
                  :to="$RoutePath.SPACE_HOME"
                >
                  Home
                </router-link>
              </div>
            </div>

            <div class="hidden sm:flex sm:ml-6 sm:items-center">
              <button
                class="bg-white border border-transparent rounded-md p-2 transition ease-in-out text-gray-500 duration-150 dark:bg-gray-800 dark:text-gray-500 hover:bg-gray-100 hover:text-gray-700 focus:outline-none focus:bg-gray-100 active:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-gray-200 dark:focus:bg-gray-700"
                @click="darkMode = !darkMode"
              >
                <svg
                  class="h-5 w-5"
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

            <div class="flex -mr-2 items-center sm:hidden">
              <button
                class="bg-white border border-transparent rounded-md p-2 transition ease-in-out text-gray-500 duration-150 dark:bg-gray-800 dark:text-gray-500 hover:bg-gray-100 hover:text-gray-700 focus:outline-none focus:bg-gray-100 active:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-gray-200 dark:focus:bg-gray-700"
                @click="darkMode = !darkMode"
              >
                <svg
                  class="h-5 w-5"
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
                class="rounded-md p-2 transition ease-in-out text-gray-400 duration-150 inline-flex items-center justify-center dark:text-gray-200 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:bg-gray-100 focus:text-gray-500 dark:hover:bg-gray-700 dark:focus:bg-gray-700"
                @click="mobileMenu = !mobileMenu"
              >
                <svg
                  class="h-6 w-6"
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

        <div
          v-show="mobileMenu"
          class="border-t sm:hidden dark:border-gray-700"
        >
          <div class="space-y-1 pt-2 pb-3">
            <div>
              <a
                class="font-medium bg-indigo-50 border-l-4 border-indigo-400 text-base py-2 pr-4 pl-3 transition ease-in-out text-indigo-700 duration-150 block dark:bg-indigo-800 dark:border-indigo-300 dark:text-indigo-200 focus:outline-none focus:bg-indigo-100 focus:border-indigo-700 focus:text-indigo-800"
                href="#"
              >
                Home
              </a>
            </div>
          </div>
        </div>
      </nav>

      <header class="bg-white shadow dark:bg-gray-800">
        <div class="mx-auto max-w-7xl py-6 px-4 sm:px-6 lg:px-8">
          <h2
            class="font-semibold text-xl leading-tight text-gray-800 dark:text-gray-200"
          >
            Home
          </h2>
        </div>
      </header>

      <main>
        <div class="py-12">
          <div class="mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div
              class="bg-white shadow-xl overflow-hidden sm:rounded-lg dark:bg-gray-800"
            >
              <div>
                <div
                  class="bg-white border-b border-gray-200 p-6 sm:px-20 dark:bg-gray-800 dark:border-gray-700"
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
