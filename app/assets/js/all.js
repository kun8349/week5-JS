
let data = [
  {
    "id": 0,
    "name": "肥宅心碎賞櫻3日",
    "imgUrl": "https://images.unsplash.com/photo-1522383225653-ed111181a951?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1655&q=80",
    "area": "高雄",
    "description": "賞櫻花最佳去處。肥宅不得不去的超讚景點！",
    "group": 87,
    "price": 1400,
    "rate": 10
  },
  {
    "id": 1,
    "name": "貓空纜車雙程票",
    "imgUrl": "https://images.unsplash.com/photo-1501393152198-34b240415948?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80",
    "area": "台北",
    "description": "乘坐以透明強化玻璃為地板的「貓纜之眼」水晶車廂，享受騰雲駕霧遨遊天際之感",
    "group": 99,
    "price": 240,
    "rate": 2
  },
  {
    "id": 2,
    "name": "台中谷關溫泉會1日",
    "imgUrl": "https://images.unsplash.com/photo-1535530992830-e25d07cfa780?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80",
    "area": "台中",
    "description": "全館客房均提供谷關無色無味之優質碳酸原湯，並取用八仙山之山冷泉供蒞臨貴賓沐浴及飲水使用。",
    "group": 20,
    "price": 1765,
    "rate": 7
  },
  {
    "id": 3,
    "name": "山林悠遊雙人套票",
    "imgUrl": "https://images.unsplash.com/photo-1535530992830-e25d07cfa780?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    "area": "台中",
    "description": "山林悠遊套票，結合南投清境高空步道、雙龍瀑布七彩吊橋、瑞龍瀑布園區之熱門景點，帶您飽覽南投瑰麗的自然環境，體驗變化無窮的地形景觀，喜歡挑戰高空的您一定不可錯過。 （含雙龍瀑布入場券 x2）",
    "group": '限時搶購',
    "price": 880,
    "rate": 9.3
  },
  {
    "id": 4,
    "name": "漁樂碼頭釣魚體驗套票",
    "imgUrl": "https://images.unsplash.com/photo-1541742425281-c1d3fc8aff96?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1112&q=80",
    "area": "台中",
    "description": "台中全新親子景點寶熊漁樂碼頭，為知名釣具公司「OKUMA」所創立的觀光工廠。一樓藍白希臘漁村風商店街免費參觀。二樓釣魚故事館則設立全台唯一虛擬釣場，透過導覽讓你知道如何釣魚、魚餌怎麼區分，寓教於樂的台中景點！",
    "group": 5,
    "price": 1280,
    "rate": 8.2
  },
  {
    "id": 5,
    "name": "熊森公園親子二日遊套票",
    "imgUrl": "https://images.unsplash.com/photo-1519331379826-f10be5486c6f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    "area": "高雄",
    "description": "來自日本最受歡迎的兒童遊樂園《 BearSon Park 熊森公園》於全世界有800多家據點，在全世界、日本及台灣，很多小孩的童年都在遊戲愛樂園裡一同成長，提供兒童一個最富教育性及娛樂性的休憩遊樂天地！",
    "group": 3,
    "price": 2480,
    "rate": 8.6
  },
];

const list = document.querySelector('.ticketCard-area');
// console.log(test);
const searchNum = document.querySelector('.num');

//預設執行函式
function init(){
  let num = 0;
  let str = '';
  data.forEach(function(i){
    num += 1;
    str += `<li class="ticketCard">
          <div class="ticketCard-img">
            <a href="#">
              <img src=${i.imgUrl} alt="">
            </a>
            <div class="ticketCard-region">${i.area}</div>
            <div class="ticketCard-rank">10</div>
          </div>
          <div class="ticketCard-content">
            <div>
              <h3>
                <a href="#" class="ticketCard-name">${i.name}</a>
              </h3>
              <p class="ticketCard-description">
                ${i.description}
              </p>
            </div>
            <div class="ticketCard-info">
              <p class="ticketCard-num">
                <span><i class="fas fa-exclamation-circle"></i></span>
                剩下最後 <span id="ticketCard-num"> ${i.group} </span> 組
              </p>
              <p class="ticketCard-price">
                TWD <span id="ticketCard-price">${i.price}</span>
              </p>
            </div>
          </div>
        </li>`;
    })
  list.innerHTML = str;  
  searchNum.textContent = `本次搜尋共${num}筆資料`;
}
init();




const travelFilter = document.querySelector('.regionSearch');
//塞選監聽事件
travelFilter.addEventListener('click',function(e){
  //console.log(e.target.value);
  let str = '';
  let num = 0;
  data.forEach(function(i){
    if(e.target.value == '全部地區'){
      num += 1;
      str += `<li class="ticketCard">
          <div class="ticketCard-img">
            <a href="#">
              <img src=${i.imgUrl} alt="">
            </a>
            <div class="ticketCard-region">${i.area}</div>
            <div class="ticketCard-rank">10</div>
          </div>
          <div class="ticketCard-content">
            <div>
              <h3>
                <a href="#" class="ticketCard-name">${i.name}</a>
              </h3>
              <p class="ticketCard-description">
                ${i.name.description}
              </p>
            </div>
            <div class="ticketCard-info">
              <p class="ticketCard-num">
                <span><i class="fas fa-exclamation-circle"></i></span>
                剩下最後 <span id="ticketCard-num"> ${i.group} </span> 組
              </p>
              <p class="ticketCard-price">
                TWD <span id="ticketCard-price">${i.price}</span>
              </p>
            </div>
          </div>
              </li>`;
    }else if(e.target.value == i.area){
      num += 1;
      str += `<li class="ticketCard">
          <div class="ticketCard-img">
            <a href="#">
              <img src=${i.imgUrl} alt="">
            </a>
            <div class="ticketCard-region">${i.area}</div>
            <div class="ticketCard-rank">10</div>
          </div>
          <div class="ticketCard-content">
            <div>
              <h3>
                <a href="#" class="ticketCard-name">${i.name}</a>
              </h3>
              <p class="ticketCard-description">
                ${i.name.description}
              </p>
            </div>
            <div class="ticketCard-info">
              <p class="ticketCard-num">
                <span><i class="fas fa-exclamation-circle"></i></span>
                剩下最後 <span id="ticketCard-num"> ${i.group} </span> 組
              </p>
              <p class="ticketCard-price">
                TWD <span id="ticketCard-price">${i.price}</span>
              </p>
            </div>
          </div>
              </li>`;
      }
    }) 
  list.innerHTML = str;
  searchNum.textContent = `本次搜尋共${num}筆資料`;
})

//新增事件
const addTicketName = document.querySelector('.ticketName');
const addTicketImgUrl = document.querySelector('.ticketImgUrl');
const addTicketRegion = document.querySelector('.ticketRegion');
const addTicketPrice = document.querySelector('.ticketPrice');
const addTicketNum = document.querySelector('.ticketNum');
const addTicketRate = document.querySelector('.ticketRate');
const addTicketDescription = document.querySelector('.ticketDescription');
const btn = document.querySelector('.btn');
console.log(addTicketName,addTicketImgUrl,addTicketRegion,addTicketPrice,addTicketNum,addTicketRate,addTicketDescription,btn);
btn.addEventListener('click',function(e){
  let obj = {
    "id": 2,
    "name": "肥宅心碎賞櫻3日",
    "imgUrl": "https://images.unsplash.com/photo-1522383225653-ed111181a951?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1655&q=80",
    "area": "高雄",
    "description": "賞櫻花最佳去處。肥宅不得不去的超讚景點！",
    "group": 87,
    "price": 1400,
    "rate": 10
  };
  obj.id += 1;
  obj.name = addTicketName.value;
  obj.imgUrl = addTicketImgUrl.value;
  obj.area = addTicketRegion.value;
  obj.price = addTicketPrice.value;
  obj.group = addTicketNum.value;
  obj.rate = addTicketRate.value;
  obj.description = addTicketDescription.value;
  data.push(obj);
  init();
  
})



  

