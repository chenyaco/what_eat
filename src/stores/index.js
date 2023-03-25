import Swal from "sweetalert2";
import { defineStore } from "pinia";
import { ref, reactive, computed, toRefs } from 'vue';
import { getDatabase, firebaseRef, set, child, get }  from '@/library/_firebase'

export const useStore = defineStore("main", ()=> {
  // 可選擇的地區
  const districts = reactive([
    { name: "士林區", en: "shilin"},
    { name: "北投區", en: "beitou"},
    { name: "大同區", en: "datong"},
    { name: "中山區", en: "zhongshan"},
    { name: "淡水區", en: "tamsui"}
  ]);
  let selected = reactive({ item: []}); // 已選擇的地區
  const addTrigger = ref(false); // 是否觸發'新增店家'按鈕  false未觸發 true觸發
  const shopTrigger = ref(false);  // 是否觸發'店家列表'按鈕  false未觸發 true觸發
  let originalList = ref([]); // 原始店家資料
  let additem = reactive({
    name: null,
    addr: null,
  });
  let shopArry = []; // 儲存店家陣列
  let playArry = []; // 呈現在拉霸上的店家列表
  const playTrigger =  ref(false); // 是否觸發'拉霸'按鈕  false未觸發 true觸發
  // 拉霸結果
  const  playResult = ref(null);

  // 右上角 選擇按鈕文字顯示
  const selectText = computed(()=>{
    let srt ;
    if( selected.item?.length >= 1 || selected.item?.length === districts.length){
      srt = '取消選取';
    }else{
      srt = '選擇全部';
    }
    return srt
  })

  // 整理originalList傳來的資料
  const shopList = computed(()=>{
    let d = originalList.value;
    let arr = [];
    let obj;
    for (const i in d) {
      obj = {
        name: d[i].name,
        addr: d[i].addr,
        key: [i][0] //將原本data的時間key存放在這
      }
      arr.push(obj);
    }
    return arr;
  });


  // 選擇全部
  const selectAll = ()=> {
    const arry = []
    districts.forEach(item => arry.push(item.name));
    selected.item = [...new Set(arry)]; // 濾掉重複值
    return selected.item ;
  }

  // 取消選取
  const clearSelect = () => selected.item = [];

  // 移動到指定區塊
  const moveTo = (el)=> {
    setTimeout(() => {
      document.querySelector(el)?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 100);
  }

  // 送資料到firebase的Realtime Database資料庫中，存放在shops/中
  const sendData = async (name, addr) => {
    let time = new Date().getTime();
    const db = getDatabase();
    await set(firebaseRef(db, 'shops/' + time ), {
      name: name,
      addr: addr,
    }).then( () =>{
      //清空資料
      Object.assign(additem, { // cutImg 清空
        name : null,
        addr: null,
      })
      Swal.fire('資料送出成功');
    });
  }


  // 取firebase的Realtime Database資料庫中shops/的資料
  const getData = async ()=> {
    const dbRef = firebaseRef(getDatabase());
    await get(child(dbRef, 'shops/')).then((res) => {
      if (res.exists()) {
        originalList.value = res.val();//塞資料
      }
    })
  }

  // 拉霸名單
  const playList =  computed(()=>{
    playArry,shopArry = []; //清空資料
    // 將已選的地區 搭配全部店家資料 跑迴圈 篩出符合的資料
    selected.item.forEach(item => {
      let data = shopList.value.filter(d => d.addr.indexOf(item) > -1);
      shopArry.push(data);
    });
  
    let len = selected.item.length;
    // 用已選店家陣列數量 來判斷處理
    if(len ===  0){
      playArry = JSON.parse(JSON.stringify(shopList.value));
    }else if(len <=  1){ // 等於1
      playArry = shopArry[0];
    }else{ // 多筆資料 
      let concatArry = [].concat.apply([], shopArry); // 將所有陣列合併成一維陣列
      playArry = [...new Set(concatArry)]; // 濾掉重複值
    } 
    return playArry;
  });

  

  // 點擊開始拉霸
  const playStart = ()=> {
    playTrigger.value = true;
    const max = playList.value.length - 1;
    const min = 0;
    const result = Math.floor(Math.random() * (max - min + 1)) + min;
    setTimeout(() => {
      playTrigger.value = false;
      playResult.value = playList.value[result];
    }, 2000);    
  }

  // 再玩一次
  const playAgain = ()=> {
    playResult.value = null;
    playStart();
  }

  

  // 
  // const clickListBtn =  ()=> {
  //   // shopList 數量小於1筆，為無資料的話，就抓 firebase 的資料
  //   if(shopList.value.length  < 1) getData();
  //   shopTrigger.value = !shopTrigger.value; //觸發shopTrigger 店家列表 toggle 顯示
  // }
  

  return { districts, selected, addTrigger, shopTrigger, selectText, additem,
     shopList, selectAll, clearSelect, moveTo, sendData, getData, playList, playTrigger, playStart, playAgain, playResult }
	
});