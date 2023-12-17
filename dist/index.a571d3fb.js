const t=function(t,...e){window.addEventListener("click",function(r){e.every(t=>!t.contains(r.target))&&t(r)})},e="wildberries_Inna_Knilko",r=()=>{let t={products:[],cart:{}};try{let r=localStorage.getItem(e);if(r){let e=JSON.parse(r);return{products:e.products||t.products,cart:e.cart||t.cart}}throw null}catch(e){return t}},a=t=>{let a=r();localStorage.setItem(e,JSON.stringify({...a,cart:t}))},i=t=>{let a=r();localStorage.setItem(e,JSON.stringify({...a,products:t}))},n=async()=>({products:await fetch("https://fakestoreapi.com/products").then(t=>t.json()),users:await fetch("https://fakestoreapi.com/users").then(t=>t.json())}),d=new class{constructor(){let{products:t,cart:e}=r();this._products=t,this.amountOfProducts=0,this.searchText="",this.discoutRate=10,this.openedModalProductId=null,this._cart=e}getInitialModelData=async()=>{let{users:t,products:e}=await n(),r=e.length/t.length,a=e.map((e,a)=>({...e,seller:t[Math.floor(a/r)]}));this.products=a};get products(){return this._getProductsBySearchText(this._products).map(t=>this._addAdditionalProductsFields(t,this.discoutRate))}set products(t){i(t),this._products=t}get productModalInfo(){let t=this._products.find(({id:t})=>this.openedModalProductId===t);return t?this._addAdditionalProductsFields(t,this.discoutRate):null}openModal(t){this.openedModalProductId=t}closeModal(){this.openedModalProductId=null}_addAdditionalProductsFields(t,e=0){return{...t,discount:e,priceWithDiscount:this.calcucatePriceWithDiscount(t.price,e),poductAmountInCart:this._cart[t.id]}}_getProductsBySearchText(t){return this.searchText?t.filter(t=>t.title.toLowerCase().includes(this.searchText.toLocaleLowerCase())):t}addToCart(t){this._cart[t]?this._cart[t]+=1:this._cart[t]=1,a(this._cart)}deleteFromCart(t){this._cart[t]>1?this._cart[t]-=1:delete this._cart[t],a(this._cart)}get cart(){let t=Object.entries(this._cart).map(([t,e])=>{let r=this._products.find(e=>String(e.id)===String(t));return r?{...r,amount:e,totalPrice:Number((this.calcucatePriceWithDiscount(r.price,this.discoutRate)*e).toFixed(2)),disabledIncreaseButton:!1,disabledDecreaseButton:0===e}:null}),e=t.reduce((t,e)=>e?t+e.totalPrice:t,0);return{cartElements:t,totalPrice:e}}get cartAmount(){return Object.entries(this._cart).reduce((t,[e,r])=>t+r,0)}calcucatePriceWithDiscount(t,e){return Number((t-t*e/100).toFixed(2))}},s=new class{constructor(){this.productsSection=document.querySelector(".products__container"),this.searchInput=document.querySelector(".search-input"),this.slider=document.querySelector(".slider"),this.productModalWraper=document.querySelector(".product-modal__wrapper"),this.cartMenu=document.querySelector(".cart__menu"),this.cartBtn=document.querySelector(".cart-btn"),this.cartTotal=document.querySelector(".cart__number-of-items")}createCardElement(t,...e){let r=document.createElement(t);for(let t of e)r.classList.add(t);return r}renderModalProductCardsElements(t,{handleCloseModal:e,handleAddButton:r}={}){if(this.productModalWraper.innerHTML="",this.productModal=null,t){let a=this.createCardElement("div","product-modal"),i=this.createCardElement("div","product-modal__container"),n=this.createCardElement("div","product-modal__description"),d=this.createCardElement("img","product-modal__img");d.setAttribute("src",t.image),d.setAttribute("alt","product image");let s=this.createCardElement("span","seller");s.textContent=t.seller.username+" / ";let c=this.createCardElement("span","description");c.textContent=t.title;let o=this.createCardElement("div","product-modal__price"),l=this.createCardElement("span","reduced-price");l.textContent=t.priceWithDiscount+" р.";let u=this.createCardElement("span","initial-price");u.textContent=t.price+" р.";let h=this.createCardElement("button","add-to-cart-btn"),p=t.poductAmountInCart?`\u{414}\u{43E}\u{431}\u{430}\u{432}\u{43B}\u{435}\u{43D}\u{43E}: ${t.poductAmountInCart}. \u{414}\u{43E}\u{431}\u{430}\u{432}\u{438}\u{442}\u{44C} \u{435}\u{449}\u{435}.`:"В корзину";h.textContent=p,o.append(l,u),n.append(s,c,o,h),i.append(d,n),a.append(i),this.productModalWraper.append(a),a.onclick=t=>t.target===a?e():void 0,h.onclick=()=>r(t.id)}}createProductCardElements(t,{handleShowButton:e,handleAddButton:r}={}){let a=this.createCardElement("div","products__card"),i=this.createCardElement("div","image-block"),n=this.createCardElement("img","products__image");n.setAttribute("src",t.image),n.setAttribute("alt","product image");let d=this.createCardElement("button","quick-show");d.textContent="Быстрый просмотр";let s=this.createCardElement("span","discount");s.textContent="- "+t.discount+" %";let c=this.createCardElement("button","add-to-cart-btn"),o=t.poductAmountInCart?`\u{414}\u{43E}\u{431}\u{430}\u{432}\u{43B}\u{435}\u{43D}\u{43E}: ${t.poductAmountInCart}. \u{414}\u{43E}\u{431}\u{430}\u{432}\u{438}\u{442}\u{44C} \u{435}\u{449}\u{435}.`:"В корзину";c.textContent=o;let l=this.createCardElement("div","products__price"),u=this.createCardElement("span","reduced-price");u.textContent=t.priceWithDiscount+" р.";let h=this.createCardElement("span","initial-price");h.textContent=t.price+" р.";let p=this.createCardElement("div","products__description"),m=this.createCardElement("p","seller");m.textContent=t.seller.username;let C=this.createCardElement("p","description");return C.textContent=t.title,i.append(n,d,s,c),l.append(u,h),p.append(m,C),a.append(i,l,p),d.onclick=e,c.onclick=r,a}createCartMenuListItem({title:t,id:e,image:r,amount:a,totalPrice:i,disabledIncreaseButton:n,disabledDecreaseButton:d},{handleIncreaseBtnClick:s,handleDecreaseBtnClick:c}){let o=this.createCardElement("div","cart__list-item"),l=this.createCardElement("img","cart__img");l.setAttribute("src",r);let u=this.createCardElement("span","cart__list-item__title");u.textContent=t;let h=this.createCardElement("div","cart-actions"),p=this.createCardElement("button","cart-actions__btn");p.textContent="+";let m=this.createCardElement("div","cart-actions__amount");m.textContent=a;let C=this.createCardElement("button","cart-actions__btn");C.textContent="–";let _=this.createCardElement("div","cart__total-price");return _.textContent=i,n&&p.classList.add("cart-actions__btn--disable"),d&&C.classList.add("cart-actions__btn--disable"),p.onclick=n?void 0:()=>s(e),C.onclick=d?void 0:()=>c(e),h.append(C,m,p),o.append(l,u,h,_),o}changeNumberOfItems(t){document.querySelector(".number-of-items").textContent=t}createTotalPriceElement(t){let e=this.createCardElement("div","cart__list-item","cart__total"),r=this.createCardElement("span","cart__list-item__title");r.textContent="Итого";let a=this.createCardElement("div","cart__total-price");return a.textContent=t,e.append(r,a),e}renderCart({cartElements:t,totalPrice:e},r,a){this.cartMenu.innerHTML="";let i=t.map(t=>this.createCartMenuListItem(t,a)),n=this.createTotalPriceElement(e);this.cartMenu.append(...i,n),this.cartTotal.textContent=r}},c=new class{constructor(t,e){this.model=t,this.view=e}searchProduct=t=>{this.view.slider.style.display="none",this.model.searchText=t.target.value,""===t.target.value&&(this.view.slider.style.display="block"),this.start()};handleClicks(){this.view.searchInput.addEventListener("input",this.searchProduct),t(this.closeCart.bind(this),this.view.cartMenu,this.view.cartBtn),this.view.cartBtn.addEventListener("click",this.openCart.bind(this))}closeModal(){this.model.closeModal(),this.renderModal()}openModal(t){this.model.openModal(t),this.renderModal()}renderModal(){let t=this.closeModal.bind(this);this.view.renderModalProductCardsElements(this.model.productModalInfo,{handleCloseModal:t,handleAddButton:this.addToCart.bind(this)})}openCart(){this.model.cartAmount>0&&this.view.cartMenu.classList.remove("cart__menu--hidden")}closeCart(){this.view.cartMenu.classList.add("cart__menu--hidden")}renderCards(){this.view.productsSection.innerHTML="";let t=this.model.products.map(t=>this.view.createProductCardElements(t,{handleShowButton:()=>{this.openModal(t.id)},handleAddButton:()=>{this.addToCart(t.id)}}));this.view.productsSection.append(...t)}addToCart(t){this.model.addToCart(t),this.renderCart(),this.renderCards(),this.renderModal()}deleteFromCart(t){this.model.deleteFromCart(t),0===this.model.cartAmount&&this.closeCart(),this.renderCart(),this.renderModal(),this.renderCards()}renderCart(){this.view.renderCart(this.model.cart,this.model.cartAmount,{handleIncreaseBtnClick:this.addToCart.bind(this),handleDecreaseBtnClick:this.deleteFromCart.bind(this)})}getDataFromServer=async()=>{try{await this.model.getInitialModelData(),this.renderCards(),this.renderCart()}catch(t){}};start=async function(){this.renderCards(),this.renderCart(),this.handleClicks(),this.getDataFromServer()}}(d,s);addEventListener("DOMContentLoaded",c.start());