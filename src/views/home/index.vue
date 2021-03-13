<template>
  <main class="flex flex-col min-h-screen justify-center">
    <h1
      class="font-sans font-bold space-x-4 text-center mb-5 text-4xl select-none"
    >
      <img
        class="rounded-full h-10 w-10 inline-block align-bottom"
        src="@/assets/logo.svg"
        alt="logo"
      />
      <span class="text-gray-700">D2</span>
      <span class="text-blue-500">Advance</span>
    </h1>
    <nav>
      <ul
        class="flex flex-row flex-wrap font-sans p-2 items-stretch justify-center box-border select-none"
      >
        <li class="m-2">
          <router-link
            :to="$RoutePath.ADMIN"
            class="bg-gradient-to-br rounded-md flex flex-row min-h-full space-x-4 bg-blue-500 from-blue-400 to-blue-600 shadow-md text-white p-5 transition-all w-72 items-center hover:bg-blue-600 hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-blue-300"
          >
            <icon-form-one
              class="bg-white rounded-xl shadow-lg p-2 text-blue-500 text-4xl"
            />
            <div>
              <p class="font-semibold text-lg">Admin</p>
              <p class="truncate">An elegant dashboard</p>
            </div>
          </router-link>
        </li>
        <li class="m-2">
          <router-link
            :to="$RoutePath.SPACE"
            class="bg-gradient-to-br rounded-md flex flex-row min-h-full space-x-4 bg-green-500 from-green-400 to-green-600 shadow-md text-white p-5 transition-all w-72 items-center hover:bg-green-600 hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-green-300"
          >
            <icon-waterfalls-v
              class="bg-white rounded-xl shadow-lg p-2 text-green-500 text-4xl"
            />
            <div>
              <p class="font-semibold text-lg">Space</p>
              <p class="truncate">An personal workspace</p>
            </div>
          </router-link>
        </li>
      </ul>
    </nav>
    <div class="mt-5 text-center">
      <a
        href="http://github.com/d2-projects/d2-advance"
        target="_blank"
        class="text-blue-600 hover:text-blue-900 hover:underline"
      >
        <icon-github />
        Open in Github</a
      >
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import {
  FormOne as IconFormOne,
  WaterfallsV as IconWaterfallsV,
  Github as IconGithub,
} from '@icon-park/vue-next';

export default defineComponent({
  components: {
    IconFormOne,
    IconWaterfallsV,
    IconGithub,
  },
});
</script>
