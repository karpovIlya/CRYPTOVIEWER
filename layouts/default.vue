<template>
  <div
    class="
			p-4
			min-h-screen
			dark:bg-gray-700
		"
  >
    <base-header class="mb-5" />
    <slot />
  </div>
</template>

<script setup lang="ts">
import BaseHeader from '~/components/base/BaseHeader.vue'
</script>
