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
        @keyup.enter="foundTicket"
      />
    </div>

    <transition>
      <div
        v-if="filtredTickets.length"
        class="
					p-4
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
  </div>
</template>

<script setup lang="ts">
import SearchIcon from '~/components/icons/SearchIcon.vue'

interface IProps {
	searchInputId: string,
	ticketsTitles: string[],
}

interface IEmits {
	(event: 'found', payload: string): void
}

const props = defineProps<IProps>()
const emits = defineEmits<IEmits>()
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

const foundTicket = () => {
	emits('found', searchText.value)
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
