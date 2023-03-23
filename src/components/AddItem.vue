<script setup>
import { useStore } from '@/stores'
import { storeToRefs } from "pinia";
const store = useStore();
const { additem, sendData } = store;


</script>

<template lang="pug">
// 新增店家
.additem-wrap.mt-4(v-if="store.addTrigger")
	.flex.items-center.font-medium
		p.text-xl 新增店家
	.justify-between.items-center(class="md:flex 768:space-y-4")
		input.border-0.border-b.bg-transparent.px-1.outline-none(v-model="additem.name", type='text', placeholder="店名", class="768:w-full 768:pt-2")
		input.border-0.border-b.bg-transparent.px-1.outline-none.w-full(v-model="additem.addr", type='text', placeholder="地址", class="md:grow md:mx-4")
		a.cursor-pointer.border.text-xs.p-2.whitespace-nowrap.block.w-max-content(
			@click="sendData(additem.name, additem.addr)"
			class="768:mt-2 768:mx-auto hover:bg-black hover:text-white") 送&emsp;&emsp;出

</template>

<style scoped>

</style>
