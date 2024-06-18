<template>
  <button
    class="
			p-2
			w-full
			rounded-lg
			capitalize
			font-semibold
			text-white
		"
    :class="{
      'bg-red-500 hover:bg-red-600': props.buttonColor === 'red',
      'base-color': props.buttonColor === 'base'
    }"
  >
    <slot />
  </button>
</template>

<script setup lang="ts">
type IColors = 'red' | 'base'

interface IProps {
	buttonColor?: IColors,
}

const props = defineProps<IProps>()
</script>
