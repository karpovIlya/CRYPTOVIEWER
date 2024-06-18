<template>
  <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 ">
    <add-ticket
      search-input-id="base-input"
      :tickets-titles="listRes?.Data ? Object.keys(listRes?.Data) : []"
      @add="pushTicket"
    />
    <tickets-list
      :tickets-list="selectedTickets"
      @delete="removeTicket"
    />
  </div>
</template>

<script setup lang="ts">
import TicketsList from '~/components/TicketList/TicketsList.vue'
import { type ITicket } from '~/interfaces/Ticket'

interface ITicketInfo {
	id: number,
	symbol: string,
	partner_symbol: string,
	data_available_from: number,
}

interface IListApiResponse {
	Response: 'Success' | 'Error',
	Message: string,
	HasWarning: boolean,
	Type: number,
	Data: { [key: string]: ITicketInfo },
}

const config = useRuntimeConfig()
const { data: listRes, } = await useFetch<IListApiResponse>(
	`${config.public.BASE_URL}/data/blockchain/list?api_key=${config.public.API_KEY}`
)
const selectedTickets: globalThis.Ref<ITicket[]> = ref([])
const ticketKeyInStorage = 'tickets'

const pushTicket = (newTicket: ITicket): void => {
	const isAvailableTicket = selectedTickets.value.find((ticket: ITicket) => {
		if (ticket.title === newTicket.title) {
			return true
		}

		return false
	})

	if (!isAvailableTicket && newTicket.title !== '') {
		selectedTickets.value.push(newTicket)
	}
}

const removeTicket = (deletionTicket: ITicket) => {
	selectedTickets.value = selectedTickets.value.filter((ticket: ITicket) => {
		return ticket.title !== deletionTicket.title
	})
}

watch(selectedTickets, () => {
	localStorage.setItem(ticketKeyInStorage, JSON.stringify(selectedTickets.value))
}, { deep: true, })

onMounted(() => {
	const savedTicketsJson = localStorage.getItem(ticketKeyInStorage)
	const savedTickets: ITicket[] = savedTicketsJson ? JSON.parse(savedTicketsJson) : []

	selectedTickets.value = savedTickets
})
</script>
