const buyCandle = [
    {
        id: 1,
        img: "https://cdn.shopify.com/s/files/1/0021/3113/2485/products/BubbleCandleWhite_800x_3e46d1d7-70f0-4fe3-bf9d-9d4925b84f99.jpg?v=1622741812",
        name: 'Bubble candle', 
        price: '$19.99',
        size:'Medium',
        scents: 'no scent, rose, lavander',
    }, 
    {
        id: 2,
        img: "https://cdn.trada.io/w0vbullcx6uqappmml3sh8tzj58q",
        name: 'Bubble candle', 
        price: '$9.99',
        size:'small',
        scents: 'no scent, rose, lavander',
   },
   {
        id: 3,
        img: "https://cdn.shopify.com/s/files/1/0461/0500/2137/products/image_70b4f61f-a0c6-4c7a-abf4-b1ca1497d266_530x@2x.jpg?v=1631779181",
        name: 'Arch candle', 
        price: '$19.99',
        size:'Medium',
        scents: 'no scent, rose, lavander',
   },
   {
        id: 4,
        img: "https://i.ebayimg.com/images/g/1MIAAOSwF0Rf93Hp/s-l300.jpg",
        name: 'lady body', 
        price: '$14.99',
        size:'Medium',
        scents: 'no scent, rose, lavander',
   },
   {
        id: 5,
        img: "https://cdn.diys.com/wp-content/uploads/2020/02/Spiral-Shape-Cylinder-Candle-Mold.jpg",
        name: 'piler', 
        price: '$24.99',
        size:'large',
        scents: 'no scent, rose, lavander',
   },
   {
        id: 6,
        img: "https://5.imimg.com/data5/ANDROID/Default/2021/7/YY/MX/TL/32774339/img-20210706-wa0045-jpg-500x500.jpg",
        name: 'piller', 
        price: '$19.99',
        size:'Medium',
        scents: 'no scent, rose, lavander',
   },
   {
        id: 7,
        img: "https://i.etsystatic.com/28439745/r/il/5dc537/3657339743/il_340x270.3657339743_rkre.jpg",
        name: 'U-shaped', 
        price: '$29.99',
        size:'large',
        scents: 'no scent, rose, lavander',
   },
   {
        id: 8,
        img: "https://i.etsystatic.com/27177134/r/il/e2915c/3016104507/il_570xN.3016104507_5fpq.jpg",
        name: 'chill pill', 
        price: '$34.99',
        size:'large',
        scents: 'no scent, rose, lavander',
   },
  ]
  const navToggle = document.querySelector('.nav-toggle')
const links = document.querySelector('.links')

navToggle.addEventListener('click', () => {
    if(links.classList.contains('show-links')){
        links.classList.remove('show-links')
    } else {
        links.classList.add('show-links')
    }
});

  window.addEventListener("DOMContentLoaded", () => {
      displayMenuItems(buyCandle)
    });
    
const sectionCenter = document.querySelector('.section-center');
    
  function displayMenuItems(candleItem){
    let displayCandle = candleItem.map(item => {
      return ` <article class="candle-profile">
      <img src=${item.img} class = photo alt=${item.name}>
      <div class="candle-info">
        <header>
          <h4>${item.name}</h4>
          <br>
          <ul>
          <li>${item.price}</li>
          <li>${item.size}</li>
          <li>${item.scents}</li>
          </ul>
        </header>
      </div>
    </article>`
  });
    displayCandle = displayCandle.join("")
    sectionCenter.innerHTML = displayCandle;
  }