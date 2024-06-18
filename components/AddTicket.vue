<template lang="">
  <div>
    <div class="relative mb-2">
      <search-icon
        class="
					absolute
					inset-y-0
					start-0
					flex
					items-center
					ps-3
					pointer-events-none
				"
      />
      <base-input
        v-model="searchText"
        :input-id="props.searchInputId"
        input-placeholder="Search"
        @keyup.enter="addTicket"
      />
    </div>

    <transition>
      <div
        v-if="filtredTickets.length"
        class="
					p-4
					mb-2
					bg-gray-700
					dark:bg-blue-400
					shadow-lg
					shadow-gray-800/50
					dark:shadow-blue-500/50
					rounded-lg
					text-white
				"
      >
        <transition-group name="tickets">
          <div
            v-for="title in filtredTickets.slice(0, 5)"
            :key="title"
            class="
							rounded-lg
							p-2
							hover:bg-gray-800
							hover:dark:bg-blue-500
							cursor-pointer
						"
            @click="usedHint"
          >
            {{ title }}
          </div>
        </transition-group>
      </div>
    </transition>

    <base-button
      button-color="base"
      @click="addTicket"
    >
      Add ticket
    </base-button>
  </div>
</template>

<script setup lang="ts">
import SearchIcon from '~/components/icons/SearchIcon.vue'
import { type ITicket } from '~/interfaces/Ticket'

interface IProps {
	searchInputId: string,
	ticketsTitles: string[],
}

interface IEmits {
	(event: 'add', payload: ITicket): void
}

interface IErrorResponse {
	Response: 'Error',
	Message: string,
	HasWarning: boolean,
	Type: number
}

interface IPriceResponse {
	USD: number
}

const props = defineProps<IProps>()
const emits = defineEmits<IEmits>()
const config = useRuntimeConfig()
const searchText = ref('')

const filtredTickets = computed(() => {
	return props.ticketsTitles.filter((ticket: string) => {
		const ticketLower = ticket.toLowerCase()
		const searchTextLower = searchText.value.toLowerCase()

		return ticketLower.includes(searchTextLower) && searchText.value !== ''
	})
})

const usedHint = (event: Event) => {
	const target = event.target as HTMLElement
	searchText.value = target.textContent ?? ''
}

const addTicket = async () => {
	const response: IErrorResponse | IPriceResponse = await $fetch(
		`${config.public.BASE_URL}/data/price`, {
			headers: {
				authorization: config.public.BASE_URL,
			},
			params: {
				'?fsym': searchText.value,
				tsyms: 'USD',
			},
		})

	if ('USD' in response) {
		const newTicket = {
			title: searchText.value.toUpperCase(),
			price: response.USD,
			currency: 'USD',
		} as ITicket

		emits('add', newTicket)
	} else {
		alert('Oooops.... Something went wrong =(')
	}

	searchText.value = ''
}
</script>

<style scoped>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.3s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}

.tickets-enter-active,
.tickets-leave-active {
  transition: all 0.2s ease;
}

.tickets-enter-from,
.tickets-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
</style>
