<template>
  <main class="min-h-screen flex flex-col justify-center">
    <h1
      class="text-center text-4xl space-x-4 mb-5 font-sans select-none font-bold"
    >
      <img
        class="h-10 w-10 inline-block align-bottom rounded-full"
        src="@/assets/logo.svg"
        alt="logo"
      />
      <span class="text-gray-700">D2</span>
      <span class="text-blue-500">Advance</span>
    </h1>
    <nav>
      <ul
        class="flex flex-row items-stretch justify-center flex-wrap box-border p-2 font-sans select-none"
      >
        <li class="m-2">
          <router-link
            :to="$RoutePath.ADMIN"
            class="text-white p-5 rounded-md bg-blue-500 space-x-4 bg-gradient-to-br from-blue-400 to-blue-600 hover:bg-blue-600 shadow-md hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-blue-300 transition-all w-72 min-h-full flex flex-row items-center"
          >
            <form-one
              class="text-blue-500 text-4xl p-2 rounded-xl bg-white shadow-lg"
            />
            <div>
              <p class="font-semibold text-lg">Admin</p>
              <p class="truncate">An elegant dashboard</p>
            </div>
          </router-link>
        </li>
      </ul>
    </nav>
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { FormOne } from '@icon-park/vue-next';

export default defineComponent({
  components: {
    FormOne,
  },
});
</script>
