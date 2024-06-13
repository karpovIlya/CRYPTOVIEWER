<template>
  <div>
    <base-toggle v-model="isDark" toggle-text="Dark mode" />
  </div>
</template>

<script setup lang="ts">
import BaseToggle from '~/components/base/BaseToggle.vue'

type ITheme = 'dark' | 'light'

const colorMode = useColorMode()
const isDark = ref(false)
const themeKeyInLocalStorage = 'theme'

const changeTheme = (newTheme?: ITheme): void => {
	if (newTheme) {
		localStorage.setItem(themeKeyInLocalStorage, newTheme)
		colorMode.preference = newTheme
	} else {
		const savedTheme = localStorage.getItem(themeKeyInLocalStorage)

		if (savedTheme) {
			colorMode.preference = savedTheme
			if (savedTheme === 'dark') { isDark.value = true }
		}
	}
}

onMounted(() => {
	changeTheme()
})

watch(isDark, () => {
	if (!isDark.value) {
		changeTheme('light')
	} else {
		changeTheme('dark')
	}
})
</script>
