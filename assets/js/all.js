"use strict";

var arr = [];
axios.get('https://raw.githubusercontent.com/hexschool/js-training/main/travelApi.json').then(function (response) {
  console.log(response.data.data);
  arr = response.data.data;
  init();
  travelEvent();
  travelAdd();
});
var list = document.querySelector('.ticketCard-area'); // console.log(test);

var searchNum = document.querySelector('.num'); //預設執行函式

function init() {
  var str = '';
  arr.forEach(function (i) {
    var test = "<li class=\"ticketCard\">\n  <div class=\"ticketCard-img\">\n    <a href=\"#\">\n      <img src=".concat(i.imgUrl, " alt=\"\">\n    </a>\n    <div class=\"ticketCard-region\">").concat(i.area, "</div>\n    <div class=\"ticketCard-rank\">10</div>\n  </div>\n  <div class=\"ticketCard-content\">\n    <div>\n      <h3>\n        <a href=\"#\" class=\"ticketCard-name\">").concat(i.name, "</a>\n      </h3>\n      <p class=\"ticketCard-description\">\n        ").concat(i.description, "\n      </p>\n    </div>\n    <div class=\"ticketCard-info\">\n      <p class=\"ticketCard-num\">\n        <span><i class=\"fas fa-exclamation-circle\"></i></span>\n        \u5269\u4E0B\u6700\u5F8C <span id=\"ticketCard-num\"> ").concat(i.group, " </span> \u7D44\n      </p>\n      <p class=\"ticketCard-price\">\n        TWD <span id=\"ticketCard-price\">").concat(i.price, "</span>\n      </p>\n    </div>\n  </div>\n                </li>");
    str += test;
  });
  list.innerHTML = str;
  searchNum.textContent = "\u672C\u6B21\u641C\u5C0B\u5171".concat(arr.length, "\u7B46\u8CC7\u6599");
}

init();
var travelFilter = document.querySelector('.regionSearch'); //塞選監聽事件

function travelEvent() {
  travelFilter.addEventListener('click', function (e) {
    //console.log(e.target.value);
    e.preventDefault();
    var str = '';
    var num = 0;
    arr.forEach(function (i) {
      var test = "<li class=\"ticketCard\">\n      <div class=\"ticketCard-img\">\n        <a href=\"#\">\n          <img src=".concat(i.imgUrl, " alt=\"\">\n        </a>\n        <div class=\"ticketCard-region\">").concat(i.area, "</div>\n        <div class=\"ticketCard-rank\">10</div>\n      </div>\n      <div class=\"ticketCard-content\">\n        <div>\n          <h3>\n            <a href=\"#\" class=\"ticketCard-name\">").concat(i.name, "</a>\n          </h3>\n          <p class=\"ticketCard-description\">\n            ").concat(i.name.description, "\n          </p>\n        </div>\n        <div class=\"ticketCard-info\">\n          <p class=\"ticketCard-num\">\n            <span><i class=\"fas fa-exclamation-circle\"></i></span>\n            \u5269\u4E0B\u6700\u5F8C <span id=\"ticketCard-num\"> ").concat(i.group, " </span> \u7D44\n          </p>\n          <p class=\"ticketCard-price\">\n            TWD <span id=\"ticketCard-price\">").concat(i.price, "</span>\n          </p>\n        </div>\n      </div>\n                  </li>");

      if (e.target.value == '全部地區') {
        num += 1;
        str += test;
      } else if (e.target.value == i.area) {
        num += 1;
        str += test;
      }
    });
    list.innerHTML = str;
    searchNum.textContent = "\u672C\u6B21\u641C\u5C0B\u5171".concat(num, "\u7B46\u8CC7\u6599");
  });
} //新增事件


function travelAdd() {
  var addTicketName = document.querySelector('.ticketName');
  var addTicketImgUrl = document.querySelector('.ticketImgUrl');
  var addTicketRegion = document.querySelector('.ticketRegion');
  var addTicketPrice = document.querySelector('.ticketPrice');
  var addTicketNum = document.querySelector('.ticketNum');
  var addTicketRate = document.querySelector('.ticketRate');
  var addTicketDescription = document.querySelector('.ticketDescription');
  var btn = document.querySelector('.btn');
  btn.addEventListener('click', function (e) {
    var obj = {};
    obj.id = arr.length;
    obj.name = addTicketName.value;
    obj.imgUrl = addTicketImgUrl.value;
    obj.area = addTicketRegion.value;
    obj.price = addTicketPrice.value;
    obj.group = addTicketNum.value;
    obj.rate = addTicketRate.value;
    obj.description = addTicketDescription.value;
    arr.push(obj);
    init();
    document.querySelector(".addTicket-form").reset();
  });
}
//# sourceMappingURL=all.js.map
