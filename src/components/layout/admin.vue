<!--
  Thanks https://github.com/tailwindcomponents/dashboard-template
-->

<template>
  <div :class="{ dark: darkMode }">
    <div
      class="flex h-screen bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-200"
    >
      <!-- sidebar mobile mask -->
      <div
        :class="sidebarOpen ? 'block' : 'hidden'"
        class="fixed z-20 inset-0 bg-black opacity-50 transition-opacity lg:hidden"
        @click="$emit('update:sidebarOpen', false)"
      ></div>

      <!-- sidebar -->
      <aside
        :class="
          sidebarOpen ? 'translate-x-0 ease-out' : '-translate-x-full ease-in'
        "
        class="fixed z-30 inset-y-0 left-0 w-64 transition duration-150 transform overflow-y-auto bg-white dark:bg-gray-800 border-r dark:border-gray-700 lg:translate-x-0 lg:static lg:inset-0"
      >
        <slot name="sidebar"></slot>
      </aside>

      <main class="flex-1 flex flex-col overflow-hidden">
        <header
          class="flex justify-between items-center py-4 px-6 bg-white dark:bg-gray-900 border-b dark:border-gray-700 z-10"
        >
          <div class="flex items-center">
            <button
              class="focus:outline-none lg:hidden mr-6"
              @click="$emit('update:sidebarOpen', true)"
            >
              <icon-hamburger-button class="text-2xl" />
            </button>
            <button
              v-if="darkMode"
              class="focus:outline-none mr-6"
              @click="$emit('update:darkMode', false)"
            >
              <icon-sun class="text-2xl" />
            </button>
            <button
              v-else
              class="focus:outline-none mr-6"
              @click="$emit('update:darkMode', true)"
            >
              <icon-moon class="text-2xl" />
            </button>
          </div>

          <div class="flex-1">
            <slot name="header"></slot>
          </div>
        </header>
        <main class="flex-1 overflow-x-hidden overflow-y-auto">
          <slot></slot>
        </main>
      </main>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import {
  HamburgerButton as IconHamburgerButton,
  Moon as IconMoon,
  Sun as IconSun,
} from '@icon-park/vue-next';

export default defineComponent({
  components: { IconHamburgerButton, IconMoon, IconSun },
  props: {
    sidebarOpen: {
      type: Boolean,
      default: false,
    },
    darkMode: {
      type: Boolean,
      default: false,
    },
  },
  emits: ['update:sidebarOpen', 'update:darkMode'],
});
</script>
