let arr = [];
axios.get('https://raw.githubusercontent.com/hexschool/js-training/main/travelApi.json')
  .then(function (response){
    console.log(response.data.data);
    arr = response.data.data;
    init();
    travelEvent();
    travelAdd();
  })

const list = document.querySelector('.ticketCard-area');
// console.log(test);
const searchNum = document.querySelector('.num');
//預設執行函式
function init(){
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
  searchNum.textContent = `本次搜尋共${arr.length}筆資料`;
}
init();




const travelFilter = document.querySelector('.regionSearch');
//塞選監聽事件
function travelEvent(){
  travelFilter.addEventListener('click',function(e){
    //console.log(e.target.value);
    e.preventDefault();
    let str = '';
    let num = 0;
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
      if(e.target.value == '全部地區'){
        num += 1;
        str += test;
      }else if(e.target.value == i.area){
        num += 1;
        str += test;
        }
      }) 
    list.innerHTML = str;
    searchNum.textContent = `本次搜尋共${num}筆資料`;
  })
}


//新增事件

function travelAdd(){
  const addTicketName = document.querySelector('.ticketName');
  const addTicketImgUrl = document.querySelector('.ticketImgUrl');
  const addTicketRegion = document.querySelector('.ticketRegion');
  const addTicketPrice = document.querySelector('.ticketPrice');
  const addTicketNum = document.querySelector('.ticketNum');
  const addTicketRate = document.querySelector('.ticketRate');
  const addTicketDescription = document.querySelector('.ticketDescription');
  const btn = document.querySelector('.btn');
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
    init();
    document.querySelector(".addTicket-form").reset();
  })
}





  

