<template>
  <main class="min-h-screen flex flex-col justify-center">
    <h1 class="text-center text-5xl space-x-4 mb-5 font-sans select-none">
      <span class="text-gray-700">D2</span>
      <span class="text-blue-500">Advance</span>
    </h1>
    <nav>
      <ul
        class="
          flex 
          flex-row items-stretch justify-center flex-wrap
          box-border p-2 font-sans select-none
        "
      >
        <li class="m-2">
          <router-link
            :to="$RouteMap.ADMIN"
            class="
              text-white 
              block px-6 py-5 rounded-md
              bg-blue-500 space-y-1
              bg-gradient-to-br
              from-blue-400 to-blue-600
              hover:bg-blue-600 shadow-md hover:shadow-lg
              focus:outline-none focus:ring-4 focus:ring-blue-300
              transition-all
              w-72 min-h-full
            "
          >
            <p class="font-semibold text-lg">Admin</p>
            <p class="truncate">
              An elegant dashboard
            </p>
          </router-link>
        </li>
      </ul>
    </nav>
  </main>
</template>
