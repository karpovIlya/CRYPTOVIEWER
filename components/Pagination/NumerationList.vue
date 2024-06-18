<template>
  <ul class="flex justify-center">
    <numeration-item
      :current-page="props.page"
      :this-page="1"
      @change-page="updatePage"
    />

    <li
      v-if="props.page > range + 2"
      class="
				text-lg
				text-white
				w-10
				h-10
				flex
				justify-center
				items-center
			"
    >
      ...
    </li>

    <numeration-item
      v-for="pageInRange in pagesRange"
      :key="`item-${pageInRange}`"
      :current-page="props.page"
      :this-page="pageInRange"
      @change-page="updatePage"
    />

    <li
      v-if="props.page < amountOfPage - range - 1"
      class="
				text-lg
				text-white
				w-10
				h-10
				flex
				justify-center
				items-center
			"
    >
      ...
    </li>

    <numeration-item
      :current-page="props.page"
      :this-page="amountOfPage"
      @change-page="updatePage"
    />
  </ul>
</template>

<script setup lang="ts">
import NumerationItem from '~/components/Pagination/NumerationItem.vue'

interface IProps {
	totalItems: number,
	itemsPerPage: number,
	range: number,
	page: number,
}

interface IEmits {
	(event: 'update:page', payload: number): void
}

const props = defineProps<IProps>()
const emits = defineEmits<IEmits>()

const amountOfPage = computed(() => {
	return Math.ceil(props.totalItems / props.itemsPerPage)
})
const pagesRange = computed(() => {
	const pages = []
	const startPage = Math.max(props.page - props.range, 2)
	const endPage = Math.min(props.page + props.range, amountOfPage.value - 1)

	for (let i = startPage; i <= endPage; i++) {
		pages.push(i)
	}

	return pages
})

const updatePage = (newPage: number) => {
	emits('update:page', newPage)
}
</script>
