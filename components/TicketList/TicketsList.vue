<template>
  <section
    class="
			p-6
			rounded-lg
			bg-gray-700
			dark:bg-blue-400
			shadow-lg
			shadow-gray-800/50
			dark:shadow-blue-500/50
			text-white
		"
  >
    <h2 class="mb-4 text-lg font-semibold">
      Selected tickets:
    </h2>

    <div
      class="
				grid
				grid-cols-1
				md:grid-cols-2
				lg:grid-cols-3
				gap-4
			"
    >
      <ticket-item
        v-for="ticketObj in props.ticketsList"
        :key="ticketObj.title"
        :ticket="ticketObj"
        @delete="() => emits('delete', ticketObj)"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
import TicketItem from '~/components/TicketList/TicketItem.vue'
import { type ITicket } from '~/interfaces/Ticket'

interface IProps {
	ticketsList: ITicket[]
}

interface IEmits {
	(event: 'delete', payload: ITicket): void
}

const props = defineProps<IProps>()
const emits = defineEmits<IEmits>()
</script>
