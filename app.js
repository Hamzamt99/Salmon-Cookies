"use strict"

let hours=["6am " ,'7am ','8am','9am','10am','11am','12pm ','1pm ','2pm ','3pm ','4pm ','5pm ','6pm ','7pm '];
let seattleCookies = {
    location: 'Seattle',
    min: 23,
    max: 65,
    avgCookieSale: 6.3,
    hourlySales:[],
    totalSales:0,

   randomcookies :function () {
    let range=seattleCookies.max-seattleCookies.min;
         let randomCount=Math.random() * range+seattleCookies.min;
         return Math.ceil(randomCount);
      },

    SalesPerHour :function () {
        for (let i=0;i<hours.length;i++){
            let numOfCookies= Math.ceil(seattleCookies.randomcookies() *seattleCookies.avgCookieSale);
            seattleCookies.hourlySales.push(numOfCookies);
            seattleCookies.totalSales += numOfCookies;
        }
        },
       
   render :function(){
       let container=document.getElementById('content-area');
       let h2 =document.createElement('h2');
       container.appendChild(h2);
       h2.textContent='Seattle'+" "+'Store';
       container.appendChild(h2);
       let list=document.createElement('ul');
       container.appendChild(list);
       for (let i=0;i<hours.length;i++){
        let listItem = document.createElement('li');
        listItem.textContent  =hours[i]+': '+seattleCookies.hourlySales[i]+' cookies';
        list.appendChild(listItem);
       }
       let listItem = document.createElement('li');
        listItem.textContent  ='Total: '+seattleCookies.totalSales+' cookies';
        list.appendChild(listItem);


   },
}


   seattleCookies.SalesPerHour();
   seattleCookies.render();

    
    
    



  
   let TokyoCookies = {
       location: 'Tokyo',
       min: 3,
       max: 24,
       avgCookieSale: 1.2,
       hourlySales:[],
       totalSales:0,
   
      randomcookies :function () {
       let range=TokyoCookies.max-TokyoCookies.min;
            let randomCount=Math.random() * range+TokyoCookies.min;
            return Math.ceil(randomCount);
         },
   
       SalesPerHour :function () {
           for (let i=0;i<hours.length;i++){
               let numOfCookies= Math.ceil(TokyoCookies.randomcookies() *TokyoCookies.avgCookieSale);
               TokyoCookies.hourlySales.push(numOfCookies);
               TokyoCookies.totalSales += numOfCookies;
           }
           },
          
      render :function(){
          let container=document.getElementById('content-area');
          let h2 =document.createElement('h2');
          container.appendChild(h2);
          h2.textContent='Tokyo'+" "+'Store';
          container.appendChild(h2);
          let list=document.createElement('ul');
          container.appendChild(list);
          for (let i=0;i<hours.length;i++){
           let listItem = document.createElement('li');
           listItem.textContent  =hours[i]+': '+TokyoCookies.hourlySales[i]+' cookies';
           list.appendChild(listItem);
          }
          let listItem = document.createElement('li');
           listItem.textContent  ='Total: '+TokyoCookies.totalSales+' cookies';
           list.appendChild(listItem);
   
   
      },
   }
   
   
   TokyoCookies.SalesPerHour();
   TokyoCookies.render();
   
   let DubaiCookies = {
    location: 'Dubai',
    min: 11,
    max: 38,
    avgCookieSale: 3.7,
    hourlySales:[],
    totalSales:0,

   randomcookies :function () {
    let range=DubaiCookies.max-DubaiCookies.min;
         let randomCount=Math.random() * range+DubaiCookies.min;
         return Math.ceil(randomCount);
      },

    SalesPerHour :function () {
        for (let i=0;i<hours.length;i++){
            let numOfCookies= Math.ceil(DubaiCookies.randomcookies() *DubaiCookies.avgCookieSale);
            DubaiCookies.hourlySales.push(numOfCookies);
            DubaiCookies.totalSales += numOfCookies;
        }
        },
       
   render :function(){
       let container=document.getElementById('content-area');
       let h2 =document.createElement('h2');
       container.appendChild(h2);
       h2.textContent='Dubai'+" "+'Store';
       container.appendChild(h2);
       let list=document.createElement('ul');
       container.appendChild(list);
       for (let i=0;i<hours.length;i++){
        let listItem = document.createElement('li');
        listItem.textContent  =hours[i]+': '+DubaiCookies.hourlySales[i]+' cookies';
        list.appendChild(listItem);
       }
       let listItem = document.createElement('li');
        listItem.textContent  ='Total: '+DubaiCookies.totalSales+' cookies';
        list.appendChild(listItem);


   },
}



DubaiCookies.SalesPerHour();
DubaiCookies.render();

let ParisCookies = {
    location: 'Paris',
    min: 20,
    max: 38,
    avgCookieSale: 2.3,
    hourlySales:[],
    totalSales:0,
    

   randomcookies :function () {
    let range=ParisCookies.max-ParisCookies.min;
         let randomCount=Math.random() * range+ParisCookies.min;
         return Math.ceil(randomCount);
      },

    SalesPerHour :function () {
        for (let i=0;i<hours.length;i++){
            let numOfCookies= Math.ceil(ParisCookies.randomcookies() *ParisCookies.avgCookieSale);
            ParisCookies.hourlySales.push(numOfCookies);
            ParisCookies.totalSales += numOfCookies;
        }
        },
       
   render :function(){
       let container=document.getElementById('content-area');
       let h2 =document.createElement('h2');
       container.appendChild(h2);
       h2.textContent='Paris'+" "+'Store';
       container.appendChild(h2);
       let list=document.createElement('ul');
       container.appendChild(list);
       for (let i=0;i<hours.length;i++){
        let listItem = document.createElement('li');
        listItem.textContent  =hours[i]+': '+ParisCookies.hourlySales[i]+' cookies';
        list.appendChild(listItem);
       }
       let listItem = document.createElement('li');
        listItem.textContent  ='Total: '+ParisCookies.totalSales+' cookies';
        list.appendChild(listItem);


   },
}



ParisCookies.SalesPerHour();
ParisCookies.render();
   
   let LimaCookies = {
    location: 'Lima',
    min: 2,
    max: 16,
    avgCookieSale: 4.6,
    hourlySales:[],
    totalSales:0,

   randomcookies :function () {
    let range=LimaCookies.max-LimaCookies.min;
         let randomCount=Math.random() * range+LimaCookies.min;
         return Math.ceil(randomCount);
      },

    SalesPerHour :function () {
        for (let i=0;i<hours.length;i++){
            let numOfCookies= Math.ceil(LimaCookies.randomcookies() *LimaCookies.avgCookieSale);
            LimaCookies.hourlySales.push(numOfCookies);
            LimaCookies.totalSales += numOfCookies;
        }
        },
       
   render :function(){
       let container=document.getElementById('content-area');
       let h2 =document.createElement('h2');
       container.appendChild(h2);
       h2.textContent='Lima'+" "+'Store';
       container.appendChild(h2);
       let list=document.createElement('ul');
       container.appendChild(list);
       for (let i=0;i<hours.length;i++){
        let listItem = document.createElement('li');
        listItem.textContent  =hours[i]+': '+LimaCookies.hourlySales[i]+' cookies';
        list.appendChild(listItem);
       }
       let listItem = document.createElement('li');
        listItem.textContent  ='Total: '+LimaCookies.totalSales+' cookies';
        list.appendChild(listItem);


   },
}
LimaCookies.SalesPerHour();
LimaCookies.render();