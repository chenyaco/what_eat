<script setup>
import { useStore } from '@/stores'
import { storeToRefs } from "pinia";
const store = useStore();
const { playList, playTrigger, playResult } = storeToRefs(store);
const { playStart, playAgain } = store;

</script>

<template lang="pug">
// 拉霸 
.play-wrap.mt-4.mb-6
	#play.play-content(:class="{ 'is-play' : playTrigger }")
		template(v-if=" playResult === null")
			.play-item(v-show="!playTrigger") 決定命運時刻
			.play-item(v-show="playTrigger", v-for="(item, index) in playList", :key="item.key") {{ item.name }}
		template(v-else)
			.play-item.play-result {{ playResult.name }}

// 按鈕
.flex.flex-col.items-center.space-y-4
	a.play-btn.border.text-center.p-2.cursor-pointer.transition-5s(
		v-if=" playResult === null && !playTrigger", @click="playStart", :class="{ 'bg-black':  playTrigger, 'text-white':  playTrigger}",
			class="hover:bg-black hover:text-white") 點擊開始		
	a.play-btn.border.text-center.p-2.cursor-pointer.transition-5s(
		v-else, @click="playAgain", :class="{ 'bg-black':  playTrigger, 'text-white':  playTrigger}",
			class="hover:bg-black hover:text-white") 再來一次			
</template>

<style lang="sass" scoped>
.play-wrap 
	height: 70px
	border-radius: 4px
	border: 2px solid gray
	overflow: hidden
	background: white

	.play-content 
		background: linear-gradient(white, white)

	.play-item 
		font-size: 48px
		display: flex
		justify-content: center
		line-height: 70px

	.is-play.play-content 
		animation: ani-play .3s infinite linear


@keyframes ani-play 
	100% 
		transform: translateY(-90%)
	



</style>
