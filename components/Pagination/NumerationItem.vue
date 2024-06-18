<template>
  <li
    class="
			rounded-lg
			text-lg
			text-white
			w-10
			h-10
			flex
			justify-center
			items-center
			cursor-pointer
		"
    :class="{
      'reverse-color': props.thisPage === props.currentPage
    }"
    @click="emits('changePage', thisPage)"
  >
    {{ thisPage }}
  </li>
</template>

<script setup lang="ts">
interface IProps {
	thisPage: number,
	currentPage: number
}

interface IEmits {
	(event: 'changePage', payload: number): void
}

const props = defineProps<IProps>()
const emits = defineEmits<IEmits>()
</script>
