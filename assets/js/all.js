"use strict";

var data = [{
  "id": 0,
  "name": "肥宅心碎賞櫻3日",
  "imgUrl": "https://images.unsplash.com/photo-1522383225653-ed111181a951?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1655&q=80",
  "area": "高雄",
  "description": "賞櫻花最佳去處。肥宅不得不去的超讚景點！",
  "group": 87,
  "price": 1400,
  "rate": 10
}, {
  "id": 1,
  "name": "貓空纜車雙程票",
  "imgUrl": "https://images.unsplash.com/photo-1501393152198-34b240415948?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80",
  "area": "台北",
  "description": "乘坐以透明強化玻璃為地板的「貓纜之眼」水晶車廂，享受騰雲駕霧遨遊天際之感",
  "group": 99,
  "price": 240,
  "rate": 2
}, {
  "id": 2,
  "name": "台中谷關溫泉會1日",
  "imgUrl": "https://images.unsplash.com/photo-1535530992830-e25d07cfa780?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80",
  "area": "台中",
  "description": "全館客房均提供谷關無色無味之優質碳酸原湯，並取用八仙山之山冷泉供蒞臨貴賓沐浴及飲水使用。",
  "group": 20,
  "price": 1765,
  "rate": 7
}, {
  "id": 3,
  "name": "山林悠遊雙人套票",
  "imgUrl": "https://images.unsplash.com/photo-1535530992830-e25d07cfa780?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  "area": "台中",
  "description": "山林悠遊套票，結合南投清境高空步道、雙龍瀑布七彩吊橋、瑞龍瀑布園區之熱門景點，帶您飽覽南投瑰麗的自然環境，體驗變化無窮的地形景觀，喜歡挑戰高空的您一定不可錯過。 （含雙龍瀑布入場券 x2）",
  "group": '限時搶購',
  "price": 880,
  "rate": 9.3
}, {
  "id": 4,
  "name": "漁樂碼頭釣魚體驗套票",
  "imgUrl": "https://images.unsplash.com/photo-1541742425281-c1d3fc8aff96?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1112&q=80",
  "area": "台中",
  "description": "台中全新親子景點寶熊漁樂碼頭，為知名釣具公司「OKUMA」所創立的觀光工廠。一樓藍白希臘漁村風商店街免費參觀。二樓釣魚故事館則設立全台唯一虛擬釣場，透過導覽讓你知道如何釣魚、魚餌怎麼區分，寓教於樂的台中景點！",
  "group": 5,
  "price": 1280,
  "rate": 8.2
}, {
  "id": 5,
  "name": "熊森公園親子二日遊套票",
  "imgUrl": "https://images.unsplash.com/photo-1519331379826-f10be5486c6f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  "area": "高雄",
  "description": "來自日本最受歡迎的兒童遊樂園《 BearSon Park 熊森公園》於全世界有800多家據點，在全世界、日本及台灣，很多小孩的童年都在遊戲愛樂園裡一同成長，提供兒童一個最富教育性及娛樂性的休憩遊樂天地！",
  "group": 3,
  "price": 2480,
  "rate": 8.6
}];
var list = document.querySelector('.ticketCard-area'); // console.log(test);

var searchNum = document.querySelector('.num'); //預設執行函式

function init() {
  var num = 0;
  var str = '';
  data.forEach(function (i) {
    num += 1;
    str += "<li class=\"ticketCard\">\n          <div class=\"ticketCard-img\">\n            <a href=\"#\">\n              <img src=".concat(i.imgUrl, " alt=\"\">\n            </a>\n            <div class=\"ticketCard-region\">").concat(i.area, "</div>\n            <div class=\"ticketCard-rank\">10</div>\n          </div>\n          <div class=\"ticketCard-content\">\n            <div>\n              <h3>\n                <a href=\"#\" class=\"ticketCard-name\">").concat(i.name, "</a>\n              </h3>\n              <p class=\"ticketCard-description\">\n                ").concat(i.description, "\n              </p>\n            </div>\n            <div class=\"ticketCard-info\">\n              <p class=\"ticketCard-num\">\n                <span><i class=\"fas fa-exclamation-circle\"></i></span>\n                \u5269\u4E0B\u6700\u5F8C <span id=\"ticketCard-num\"> ").concat(i.group, " </span> \u7D44\n              </p>\n              <p class=\"ticketCard-price\">\n                TWD <span id=\"ticketCard-price\">").concat(i.price, "</span>\n              </p>\n            </div>\n          </div>\n        </li>");
  });
  list.innerHTML = str;
  searchNum.textContent = "\u672C\u6B21\u641C\u5C0B\u5171".concat(num, "\u7B46\u8CC7\u6599");
}

init();
var travelFilter = document.querySelector('.regionSearch'); //塞選監聽事件

travelFilter.addEventListener('click', function (e) {
  //console.log(e.target.value);
  var str = '';
  var num = 0;
  data.forEach(function (i) {
    if (e.target.value == '全部地區') {
      num += 1;
      str += "<li class=\"ticketCard\">\n          <div class=\"ticketCard-img\">\n            <a href=\"#\">\n              <img src=".concat(i.imgUrl, " alt=\"\">\n            </a>\n            <div class=\"ticketCard-region\">").concat(i.area, "</div>\n            <div class=\"ticketCard-rank\">10</div>\n          </div>\n          <div class=\"ticketCard-content\">\n            <div>\n              <h3>\n                <a href=\"#\" class=\"ticketCard-name\">").concat(i.name, "</a>\n              </h3>\n              <p class=\"ticketCard-description\">\n                ").concat(i.name.description, "\n              </p>\n            </div>\n            <div class=\"ticketCard-info\">\n              <p class=\"ticketCard-num\">\n                <span><i class=\"fas fa-exclamation-circle\"></i></span>\n                \u5269\u4E0B\u6700\u5F8C <span id=\"ticketCard-num\"> ").concat(i.group, " </span> \u7D44\n              </p>\n              <p class=\"ticketCard-price\">\n                TWD <span id=\"ticketCard-price\">").concat(i.price, "</span>\n              </p>\n            </div>\n          </div>\n              </li>");
    } else if (e.target.value == i.area) {
      num += 1;
      str += "<li class=\"ticketCard\">\n          <div class=\"ticketCard-img\">\n            <a href=\"#\">\n              <img src=".concat(i.imgUrl, " alt=\"\">\n            </a>\n            <div class=\"ticketCard-region\">").concat(i.area, "</div>\n            <div class=\"ticketCard-rank\">10</div>\n          </div>\n          <div class=\"ticketCard-content\">\n            <div>\n              <h3>\n                <a href=\"#\" class=\"ticketCard-name\">").concat(i.name, "</a>\n              </h3>\n              <p class=\"ticketCard-description\">\n                ").concat(i.name.description, "\n              </p>\n            </div>\n            <div class=\"ticketCard-info\">\n              <p class=\"ticketCard-num\">\n                <span><i class=\"fas fa-exclamation-circle\"></i></span>\n                \u5269\u4E0B\u6700\u5F8C <span id=\"ticketCard-num\"> ").concat(i.group, " </span> \u7D44\n              </p>\n              <p class=\"ticketCard-price\">\n                TWD <span id=\"ticketCard-price\">").concat(i.price, "</span>\n              </p>\n            </div>\n          </div>\n              </li>");
    }
  });
  list.innerHTML = str;
  searchNum.textContent = "\u672C\u6B21\u641C\u5C0B\u5171".concat(num, "\u7B46\u8CC7\u6599");
}); //新增事件

var addTicketName = document.querySelector('.ticketName');
var addTicketImgUrl = document.querySelector('.ticketImgUrl');
var addTicketRegion = document.querySelector('.ticketRegion');
var addTicketPrice = document.querySelector('.ticketPrice');
var addTicketNum = document.querySelector('.ticketNum');
var addTicketRate = document.querySelector('.ticketRate');
var addTicketDescription = document.querySelector('.ticketDescription');
var btn = document.querySelector('.btn');
console.log(addTicketName, addTicketImgUrl, addTicketRegion, addTicketPrice, addTicketNum, addTicketRate, addTicketDescription, btn);
btn.addEventListener('click', function (e) {
  var obj = {
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
});
//# sourceMappingURL=all.js.map
