<script setup>
import { useStore } from '@/stores'
import { storeToRefs } from "pinia";
const store = useStore();
const { shopTrigger, shopList } = storeToRefs(store);
</script>

<template lang="pug">
// 店家列表
.shoplist-wrap.mt-4.mb-10(v-if="shopTrigger")
	.flex.items-center.font-medium
		p.text-xl 店家列表
	ul.mt-4
		li.list.flex.flex-wrap.font-medium.py-2.border-b
			p(class="w-1/3") 名稱
			p(class="w-2/3") 地址
		li.list.flex.flex-wrap.py-2.border-b(v-for="(item, index) in shopList", :key="item.key")
			p(class="w-1/3") {{ item.name }}
			p(class="w-2/3")  {{ item.addr }}

</template>

<style scoped>

</style>
