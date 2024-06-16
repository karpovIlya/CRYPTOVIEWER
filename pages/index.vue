<template lang="">
  <div>
    <base-search
      search-input-id="base-input"
      :tickets-titles="ticketsTitleList"
      @found="(foundTicketTitle: string) => console.log(foundTicketTitle)"
    />
  </div>
</template>

<script setup lang="ts">
interface ITicket {
	id: number,
	symbol: string,
	partner_symbol: string,
	data_available_from: number,
}

interface IApiResponse {
	Response: 'Success' | 'Error',
	Message: string,
	HasWarning: boolean,
	Type: number,
	Data: { [key: string]: ITicket },
}

const config = useRuntimeConfig()
const { data, } = await useFetch<IApiResponse>(
	`${config.public.BASE_URL}/data/blockchain/list?api_key=${config.public.API_KEY}`
)

const ticketsTitleList = computed(() => {
	return data.value ? Object.values(data.value.Data).map(ticket => ticket.symbol) : []
})
</script>
