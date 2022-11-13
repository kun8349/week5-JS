let arr = [];
const totalObj = {};
const newData = [];

axios.get('https://raw.githubusercontent.com/hexschool/js-training/main/travelApi.json')
  .then(function (response){
    
    arr = response.data.data;
    init(arr);
    travelEvent();
    travelAdd();
    
    // step 1:totalObj 會變成 {高雄: 1, 台北: 1, 台中: 1}
    picListStep1();
    // step 2:newData = [["高雄", 1], ["台北",1], ["台中", 1]]
    picListStep2();
    // step 3:將 newData 丟入 c3 產生器
    picListStep3();
    
  })

const list = document.querySelector('.ticketCard-area');
// console.log(test);
const searchNum = document.querySelector('.num');
//預設執行函式
function init(data){
  let str = '';
  arr.forEach(function(i){
    let test = `<li class="ticketCard">
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
    str += test;
    })
  list.innerHTML = str;  
  searchNum.textContent = `本次搜尋共${data.length}筆資料`;
}




const travelFilter = document.querySelector('.regionSearch');
//篩選監聽事件
function travelEvent(){
  travelFilter.addEventListener('change',function(e){
    e.preventDefault();
    let str = '';
    arr.forEach(function(i){
      let test = `<li class="ticketCard">
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
      if(e.target.value == '全部地區'){
        str += test;
        init(arr);
        return;
      }else if(e.target.value == i.area){
        str += test;
        let tempData = [];
        if(i.area === e.target.value){
          tempData.push(i);
          console.log(tempData);
        }
        searchNum.textContent = `本次搜尋共${tempData.length}筆資料`;
      }
    })
    list.innerHTML = str; 
  })
}


//新增事件
const addTicketName = document.querySelector('.ticketName');
const addTicketImgUrl = document.querySelector('.ticketImgUrl');
const addTicketRegion = document.querySelector('.ticketRegion');
const addTicketPrice = document.querySelector('.ticketPrice');
const addTicketNum = document.querySelector('.ticketNum');
const addTicketRate = document.querySelector('.ticketRate');
const addTicketDescription = document.querySelector('.ticketDescription');
const btn = document.querySelector('.btn');

function travelAdd(){
  btn.addEventListener('click',function(e){
    let obj = {};
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
    let ary = Object.keys(totalObj);
    ary.forEach((i,x)=>{
      if(i === addTicketRegion.value){
        totalObj[i] += 1;
      }
    })
    //物件 
    picListStep2();
    picListStep3();
    document.querySelector(".addTicket-form").reset();
  })
}

function picListStep1(){
  arr.forEach((item)=>{ 
    if(totalObj[item.area]){
      totalObj[item.area] += 1;
      
    }else{
      totalObj[item.area] = 1;
    }
  })
}




function picListStep2(){
  const areaAry = Object.keys(totalObj);
    areaAry.forEach((item)=>{
      let ary = [];
      ary.push(item);
      ary.push(totalObj[item]);
      newData.push(ary);
    })
}


function picListStep3(){
  const chart = c3.generate({
    bindto: "#chart",
    data: {
      columns: newData,
      type : 'donut',
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
function clear(){
  newData.length = 0;
}


  

