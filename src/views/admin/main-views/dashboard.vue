<template>
  <div class="container mx-auto px-6 py-8">
    <h3 class="text-3xl font-medium">Dashboard</h3>

    <div class="mt-4">
      <div class="flex flex-wrap -mx-6">
        <div class="w-full px-6 sm:w-1/2 xl:w-1/3">
          <div
            class="flex items-center px-5 py-6 shadow rounded-md bg-white dark:bg-gray-800"
          >
            <div class="p-3 rounded-full bg-indigo-600 bg-opacity-75 shadow-lg">
              <icon-peoples-two class="text-3xl text-white" />
            </div>
            <div class="mx-5">
              <h4 class="text-2xl font-semibold">8,282</h4>
              <div class="text-gray-500">New Users</div>
            </div>
          </div>
        </div>
        <div class="w-full mt-6 px-6 sm:w-1/2 xl:w-1/3 sm:mt-0">
          <div
            class="flex items-center px-5 py-6 shadow rounded-md bg-white dark:bg-gray-800"
          >
            <div class="p-3 rounded-full bg-yellow-600 bg-opacity-75 shadow-lg">
              <icon-shopping class="text-3xl text-white" />
            </div>
            <div class="mx-5">
              <h4 class="text-2xl font-semibold">200,521</h4>
              <div class="text-gray-500">Total Orders</div>
            </div>
          </div>
        </div>
        <div class="w-full mt-6 px-6 sm:w-1/2 xl:w-1/3 xl:mt-0">
          <div
            class="flex items-center px-5 py-6 shadow rounded-md bg-white dark:bg-gray-800"
          >
            <div class="p-3 rounded-full bg-pink-600 bg-opacity-75 shadow-lg">
              <icon-ad-product class="text-3xl text-white" />
            </div>
            <div class="mx-5">
              <h4 class="text-2xl font-semibold">215,542</h4>
              <div class="text-gray-500">Available Products</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="mt-8"></div>
    <div class="flex flex-col mt-8">
      <div class="-my-2 py-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
        <div
          class="align-middle inline-block min-w-full shadow overflow-hidden sm:rounded-lg border-b border-gray-200 dark:border-gray-700"
        >
          <table class="min-w-full">
            <thead>
              <tr>
                <th
                  class="px-6 py-3 border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider"
                >
                  Name
                </th>
                <th
                  class="px-6 py-3 border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider"
                >
                  Title
                </th>
                <th
                  class="px-6 py-3 border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider"
                >
                  Status
                </th>
                <th
                  class="px-6 py-3 border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider"
                >
                  Role
                </th>
                <th
                  class="px-6 py-3 border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800"
                ></th>
              </tr>
            </thead>

            <tbody class="bg-white dark:bg-gray-800">
              <tr v-for="i in 10" :key="i">
                <td
                  class="px-6 py-4 whitespace-no-wrap border-b border-gray-200 dark:border-gray-700"
                >
                  <div class="flex items-center">
                    <icon-user
                      class="flex-shrink-0 text-3xl rounded-full center"
                    />

                    <div class="ml-4">
                      <div class="text-sm leading-5 font-medium">CNine</div>
                      <div class="text-sm leading-5 text-gray-500">emmm</div>
                    </div>
                  </div>
                </td>

                <td
                  class="px-6 py-4 whitespace-no-wrap border-b border-gray-200 dark:border-gray-700"
                >
                  <div class="text-sm leading-5">Software Engineer</div>
                  <div class="text-sm leading-5 text-gray-500">Web dev</div>
                </td>

                <td
                  class="px-6 py-4 whitespace-no-wrap border-b border-gray-200 dark:border-gray-700"
                >
                  <span
                    class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800"
                    >Active</span
                  >
                </td>

                <td
                  class="px-6 py-4 whitespace-no-wrap border-b border-gray-200 dark:border-gray-700 text-sm leading-5 text-gray-500"
                >
                  Owner
                </td>

                <td
                  class="px-6 py-4 whitespace-no-wrap text-right border-b border-gray-200 dark:border-gray-700 text-sm leading-5 font-medium"
                >
                  <a href="#" class="text-blue-600 hover:text-blue-900">Edit</a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import {
  PeoplesTwo as IconPeoplesTwo,
  Shopping as IconShopping,
  AdProduct as IconAdProduct,
  User as IconUser,
} from '@icon-park/vue-next';

export default defineComponent({
  components: {
    IconPeoplesTwo,
    IconShopping,
    IconAdProduct,
    IconUser,
  },
});
</script>
