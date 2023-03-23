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
	.flex.justify-between.items-center
		input.border-0.border-b.bg-transparent.px-1.outline-none(v-model="additem.name", type='text', placeholder="店名")
		input.border-0.border-b.bg-transparent.px-1.outline-none.grow.w-full.mx-4(v-model="additem.addr", type='text', placeholder="地址")
		a.cursor-pointer.border.text-xs.p-2.whitespace-nowrap(
			@click="sendData(additem.name, additem.addr)"
			class="768:mt-2 hover:bg-black hover:text-white") 送&emsp;&emsp;出

</template>

<style scoped>

</style>
