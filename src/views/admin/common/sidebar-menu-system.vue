<template>
  <nav class="mt-10 select-none">
    <router-link
      :to="$RoutePath.ADMIN_DASHBOARD"
      class="flex items-center justify-center m-2 mb-8 px-3 py-2 bg-gray-300 dark:bg-gray-700 bg-opacity-25 text-gray-500 rounded-md space-x-2 transition-all hover:text-gray-700 dark:hover:text-gray-200"
    >
      <icon-left class="text-lg" />
      <span>Back to Dashboard</span>
    </router-link>
    <template v-for="({ label, to, icon }, index) in sidebarMenu" :key="index">
      <router-link v-slot="{ href, navigate, isActive }" :to="to" custom>
        <a
          :active="isActive"
          :href="href"
          :class="[
            'flex items-center py-2 px-6 h-12 transition-all rounded m-2',
            isActive || $route.path.startsWith(to + '/')
              ? 'bg-gray-300 dark:bg-gray-700 bg-opacity-25 dark:text-gray-200'
              : 'text-gray-500 hover:bg-gray-300 dark:hover:bg-gray-700 hover:bg-opacity-25 hover:text-gray-700 dark:hover:text-gray-200',
          ]"
          @click="navigate"
        >
          <component :is="icon" class="text-lg" />
          <span class="mx-3">{{ label }}</span>
        </a>
      </router-link>
    </template>
  </nav>
</template>

<script lang="ts">
import { Component, defineComponent, ref, shallowRef } from 'vue';
import { RoutePath } from '@/constants/route';
import { Dashboard, ListView, Left as IconLeft } from '@icon-park/vue-next';

export default defineComponent({
  components: { IconLeft },
  setup() {
    const sidebarMenu = ref<{ label: string; icon: Component; to: string }[]>([
      {
        label: 'Profile',
        icon: shallowRef(Dashboard),
        to: RoutePath.ADMIN_PROFILE,
      },
      {
        label: 'Notifications',
        icon: shallowRef(ListView),
        to: RoutePath.ADMIN_NOTIFICATIONS,
      },
    ]);
    return {
      sidebarMenu,
    };
  },
});
</script>
