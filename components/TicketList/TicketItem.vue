<template>
  <div
    class="
			p-4
			rounded-lg
			border-2
			border-blue-400
			dark:border-gray-700
			shadow-md
			shadow-blue-500/50
			dark:shadow-gray-800/50
			flex
			flex-col
			items-center
		"
  >
    <div class="mb-4 uppercase">
      {{ props.ticket.title }} - {{ props.ticket.currency }}
    </div>
    <div class="mb-4 font-black text-lg">
      {{ props.ticket.price }}
    </div>

    <base-button
      button-color="red"
      @click="() => emits('delete', props.ticket)"
    >
      Delete
    </base-button>
  </div>
</template>

<script setup lang="ts">
import { type ITicket } from '~/interfaces/Ticket'

interface IProps {
	ticket: ITicket
}

interface IEmits {
	(event: 'delete', payload: ITicket): void
}

const props = defineProps<IProps>()
const emits = defineEmits<IEmits>()
</script>
