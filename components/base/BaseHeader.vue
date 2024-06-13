<template>
  <header
    class="
				p-6
				flex
				justify-between
				items-center
				rounded-lg
				bg-gray-700
				dark:bg-blue-400
				shadow-lg
				shadow-gray-800/50
				dark:shadow-blue-500/50
			"
  >
    <nuxt-link to="/">
      <img
        src="@/assets/icons/project_logo.svg"
        alt="Logo"
        class="w-10"
      >
    </nuxt-link>

    <theme-switcher />
  </header>
</template>
