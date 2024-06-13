<template>
  <label class="inline-flex items-center cursor-pointer">
    <input
      type="checkbox"
      class="sr-only peer"
      :checked="props.modelValue"
      @change="handleCheckBoxChange"
    >
    <div
      class="
				relative
				w-11
				h-6
				bg-gray-200
				peer-focus:outline-none
				peer-focus:ring-4
				peer-focus:ring-blue-300
				dark:peer-focus:ring-blue-800
				rounded-full peer
				dark:bg-gray-700
				peer-checked:after:translate-x-full
				rtl:peer-checked:after:-translate-x-full
				peer-checked:after:border-white
				after:content-['']
				after:absolute
				after:top-[2px]
				after:start-[2px]
				after:bg-white
				after:border-gray-300
				after:border
				after:rounded-full
				after:h-5
				after:w-5
				after:transition-all
				dark:border-gray-600
				peer-checked:bg-blue-600
			"
    />
    <span
      class="
				ms-3
				text-sm
				font-medium
				text-white
			"
    >
      {{ props.toggleText ?? '' }}
    </span>
  </label>
</template>

<script setup lang="ts">
interface IProps {
	toggleText?: string,
	modelValue: boolean,
}

interface IEmits {
	(event: 'update:modelValue', payload: boolean): void
}

const props = defineProps<IProps>()
const emit = defineEmits<IEmits>()

const handleCheckBoxChange = (event: Event): void => {
	const target = event.target as HTMLInputElement
	emit('update:modelValue', target.checked)
}
</script>
