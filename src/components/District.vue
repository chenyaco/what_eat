<script setup>

import { useStore } from '@/stores'
import { storeToRefs } from "pinia";
const store = useStore();
const { addTrigger, shopTrigger, selectText } = storeToRefs(store);
const { districts, selectAll, moveTo, clearSelect, selected, getData }  = store;
// defineProps({
//   msg: {
//     type: String,
//     required: true
//   }
// })
</script>

<template lang="pug">
.district-wrap
	.flex.items-center
		p.mr-auto.text-xl.font-medium 選擇區域(可複選)
		//- p.text-xl 選擇想吃哪些區域(可複選)
		// 選擇全部/取消選擇 按鈕
		.w-max-content.mr-2.text-xs
			a.border.text-center.p-2.cursor-pointer.transition-5s(
				v-if="selectText === '選擇全部'",  @click="selectAll", class="hover:bg-black hover:text-white")
				| {{ selectText }}
			a.border.text-center.p-2.cursor-pointer.transition-5s(
				v-else,  @click="clearSelect", class="hover:bg-black hover:text-white")
				| {{ selectText }}

		// 店家列表/新增店家 按鈕
		.w-max-content.text-xs.space-x-2
			a.border.text-center.p-2.cursor-pointer.transition-5s(
				@click="shopTrigger = !shopTrigger", :class="{ 'bg-black':  shopTrigger, 'text-white':  shopTrigger}",
				 class="hover:bg-black hover:text-white") 店家列表
			a.border.text-center.p-2.cursor-pointer.transition-5s(
				@click="addTrigger = !addTrigger, moveTo('.additem-wrap')"
				:class="{ 'bg-black':  addTrigger, 'text-white':  addTrigger}",
				 class="hover:bg-black hover:text-white") 新增店家
	 

	// 選擇區域
	.flex.items-center.flex-wrap
		label.text-lg.p-4(v-for="(item, index)  in districts", :for='item.name')
			input.mr-1(:id="item.en" type='checkbox' :value='item.name' v-model='selected.item')
			| {{ item.name }} 


</template>

<style scoped>

</style>
