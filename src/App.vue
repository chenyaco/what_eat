<script setup>
import { onMounted } from 'vue';
import { useStore } from '@/stores';
import { storeToRefs } from "pinia";
const store = useStore();
const { getData }  = store;
onMounted( async () => {
	// 取firebase的Realtime Database資料庫中shops/的資料
  await getData();
})
</script>

<template lang="pug">
#index.max-w-1200.mx-auto(class="768:px-4")
	
	.max-w-3xl.mx-auto.mt-20
		h1.font-bold.text-2xl.py-4 What Eat?

		//- 選擇區域
		District

		//- 店家列表
		ShopList

		//- 新增店家
		AddItem

		//- 拉霸
		Play

</template>

<style lang="sass" scoped></style>
