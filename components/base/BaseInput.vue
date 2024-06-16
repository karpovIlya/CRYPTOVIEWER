<template>
  <div>
    <label
      :for="props.inputId"
      class="
				block
				mb-2
				text-sm
				font-medium
				text-gray-900
				dark:text-white
			"
    >
      {{ props.labelText ?? '' }}
    </label>
    <input
      :id="props.inputId"
      type="text"
      class="
				py-4
				px-8
				bg-gray-50
				border
				border-gray-300
				dark:border-blue-300
				text-gray-900
				text-sm
				rounded-lg
				focus:ring-blue-500
				focus:border-blue-500
				block
				w-full
				dark:bg-gray-700
				dark:placeholder-gray-400
				dark:text-white
				dark:focus:ring-blue-500
				dark:focus:border-blue-500
			"
      :placeholder="props.inputPlaceholder ?? ''"
      :value="props.modelValue"
      @input="handleInputChange"
    >
  </div>
</template>

<script setup lang="ts">
interface IProps {
	inputId: string,
	modelValue: string,
	labelText?: string,
	inputPlaceholder?: string,
}
interface IEmits {
	(event: 'update:modelValue', payload: string): void
}

const props = defineProps<IProps>()
const emits = defineEmits<IEmits>()

const handleInputChange = (event: Event): void => {
	const target = event.target as HTMLInputElement
	emits('update:modelValue', target.value)
}
</script>
