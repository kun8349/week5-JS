"use strict";

var arr = [];
var totalObj = {};
var newData = [];
axios.get('https://raw.githubusercontent.com/hexschool/js-training/main/travelApi.json').then(function (response) {
  arr = response.data.data;
  init(arr);
  travelEvent();
  travelAdd(); // step 1:totalObj 會變成 {高雄: 1, 台北: 1, 台中: 1}

  picListStep1(); // step 2:newData = [["高雄", 1], ["台北",1], ["台中", 1]]

  picListStep2(); // step 3:將 newData 丟入 c3 產生器

  picListStep3();
});
var list = document.querySelector('.ticketCard-area'); // console.log(test);

var searchNum = document.querySelector('.num'); //預設執行函式

function init(data) {
  var str = '';
  arr.forEach(function (i) {
    var test = "<li class=\"ticketCard\">\n  <div class=\"ticketCard-img\">\n    <a href=\"#\">\n      <img src=".concat(i.imgUrl, " alt=\"\">\n    </a>\n    <div class=\"ticketCard-region\">").concat(i.area, "</div>\n    <div class=\"ticketCard-rank\">10</div>\n  </div>\n  <div class=\"ticketCard-content\">\n    <div>\n      <h3>\n        <a href=\"#\" class=\"ticketCard-name\">").concat(i.name, "</a>\n      </h3>\n      <p class=\"ticketCard-description\">\n        ").concat(i.description, "\n      </p>\n    </div>\n    <div class=\"ticketCard-info\">\n      <p class=\"ticketCard-num\">\n        <span><i class=\"fas fa-exclamation-circle\"></i></span>\n        \u5269\u4E0B\u6700\u5F8C <span id=\"ticketCard-num\"> ").concat(i.group, " </span> \u7D44\n      </p>\n      <p class=\"ticketCard-price\">\n        TWD <span id=\"ticketCard-price\">").concat(i.price, "</span>\n      </p>\n    </div>\n  </div>\n                </li>");
    str += test;
  });
  list.innerHTML = str;
  searchNum.textContent = "\u672C\u6B21\u641C\u5C0B\u5171".concat(data.length, "\u7B46\u8CC7\u6599");
}

var travelFilter = document.querySelector('.regionSearch'); //篩選監聽事件

function travelEvent() {
  travelFilter.addEventListener('change', function (e) {
    e.preventDefault();
    var str = '';
    arr.forEach(function (i) {
      var test = "<li class=\"ticketCard\">\n      <div class=\"ticketCard-img\">\n        <a href=\"#\">\n          <img src=".concat(i.imgUrl, " alt=\"\">\n        </a>\n        <div class=\"ticketCard-region\">").concat(i.area, "</div>\n        <div class=\"ticketCard-rank\">10</div>\n      </div>\n      <div class=\"ticketCard-content\">\n        <div>\n          <h3>\n            <a href=\"#\" class=\"ticketCard-name\">").concat(i.name, "</a>\n          </h3>\n          <p class=\"ticketCard-description\">\n            ").concat(i.description, "\n          </p>\n        </div>\n        <div class=\"ticketCard-info\">\n          <p class=\"ticketCard-num\">\n            <span><i class=\"fas fa-exclamation-circle\"></i></span>\n            \u5269\u4E0B\u6700\u5F8C <span id=\"ticketCard-num\"> ").concat(i.group, " </span> \u7D44\n          </p>\n          <p class=\"ticketCard-price\">\n            TWD <span id=\"ticketCard-price\">").concat(i.price, "</span>\n          </p>\n        </div>\n      </div>\n                  </li>");

      if (e.target.value == '全部地區') {
        str += test;
        init(arr);
        return;
      } else if (e.target.value == i.area) {
        str += test;
        var tempData = [];

        if (i.area === e.target.value) {
          tempData.push(i);
          console.log(tempData);
        }

        searchNum.textContent = "\u672C\u6B21\u641C\u5C0B\u5171".concat(tempData.length, "\u7B46\u8CC7\u6599");
      }
    });
    list.innerHTML = str;
  });
} //新增事件


var addTicketName = document.querySelector('.ticketName');
var addTicketImgUrl = document.querySelector('.ticketImgUrl');
var addTicketRegion = document.querySelector('.ticketRegion');
var addTicketPrice = document.querySelector('.ticketPrice');
var addTicketNum = document.querySelector('.ticketNum');
var addTicketRate = document.querySelector('.ticketRate');
var addTicketDescription = document.querySelector('.ticketDescription');
var btn = document.querySelector('.btn');

function travelAdd() {
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
    init(arr);
    clear();
    var ary = Object.keys(totalObj);
    ary.forEach(function (i, x) {
      if (i === addTicketRegion.value) {
        totalObj[i] += 1;
      }
    }); //物件 

    picListStep2();
    picListStep3();
    document.querySelector(".addTicket-form").reset();
  });
}

function picListStep1() {
  arr.forEach(function (item) {
    if (totalObj[item.area]) {
      totalObj[item.area] += 1;
    } else {
      totalObj[item.area] = 1;
    }
  });
}

function picListStep2() {
  var areaAry = Object.keys(totalObj);
  areaAry.forEach(function (item) {
    var ary = [];
    ary.push(item);
    ary.push(totalObj[item]);
    newData.push(ary);
  });
}

function picListStep3() {
  var chart = c3.generate({
    bindto: "#chart",
    data: {
      columns: newData,
      type: 'donut'
    },
    donut: {
      title: "地區"
    },
    size: {
      height: 200,
      width: 200
    }
  });
}

function clear() {
  newData.length = 0;
}
//# sourceMappingURL=all.js.map
