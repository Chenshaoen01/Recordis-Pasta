(function(){var t={4539:function(t,e,n){"use strict";var a=n(6943),s=n(6423),o=n(9242),i=n(3396),r=n(7139),d=n.p+"img/logo4.c69082ea.png",l=n.p+"img/logo2.28b31087.png";const c={class:"navbar navbar-expand-lg bg-body-tertiary bg-dark sticky-top",id:"navBar"},u={class:"container-fluid"},m=(0,i._)("img",{src:d,style:{width:"150px"},alt:""},null,-1),p=(0,i._)("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation"},[(0,i._)("span",{class:"navbar-toggler-icon"},[(0,i._)("i",{class:"bi bi-list text-white fs-3"})])],-1),h={class:"collapse navbar-collapse justify-content-end",id:"navbarNav"},g={class:"navbar-nav"},f={class:"nav-item d-flex align-items-center"},v={class:"nav-item d-flex align-items-center"},x={class:"nav-item d-flex align-items-center"},b={class:"nav-item d-flex align-items-center"},w={class:"nav-item d-flex align-items-center"},y=(0,i._)("i",{class:"bi bi-bag-heart"},null,-1),k={class:"position-absolute px-1 start-100 translate-middle rounded-pill bg-danger fs-6",style:{top:"10px","min-width":"25px"}},_=(0,i.uE)('<div class="bg-dark pt-5" style="width:100%;"><div class="w-75 mx-auto d-flex flex-column flex-md-row justify-content-center align-items-center border-top border-bottom pt-4"><div class="me-0 me-md-5 my-auto"><img src="'+l+'" style="width:150px;height:150px;" alt=""></div><div class="mt-3 mt-md-0"><p class="text-white"> Line 官方社群 ：<a href="#" class="text-white text-decoration-none">Recordis Pasta</a></p><p class="text-white"> FaceBook ：<a href="#" class="text-white text-decoration-none">Recordis Pasta</a></p><p class="text-white"> Instagram ：<a href="#" class="text-white text-decoration-none">Recordis Pasta</a></p><p class="text-white"> Email：<a href="#" class="text-white text-decoration-none">recordis@gmail.com</a></p><p class="text-white"> Email：<a href="#" class="text-white text-decoration-none">recordis@gmail.com</a></p></div></div><div class="w-75 mx-auto d-flex-column align-items-center justify-content-center py-4"><p class="text-white text-center">CopyRight © recordis all rights reserved 2023</p><p class="text-white text-center">僅作為個人作品使用 ，無商業用途 </p></div></div>',1),C=(0,i._)("i",{class:"bi bi-arrow-up-square fs-3 text-white"},null,-1),O=[C];function I(t,e,n,a,s,o){const d=(0,i.up)("router-link"),l=(0,i.up)("router-view"),C=(0,i.up)("orderModal");return(0,i.wg)(),(0,i.iD)(i.HY,null,[(0,i._)("nav",c,[(0,i._)("div",u,[(0,i.Wm)(d,{to:"/"},{default:(0,i.w5)((()=>[m])),_:1}),p,(0,i._)("div",h,[(0,i._)("ul",g,[(0,i._)("li",f,[(0,i.Wm)(d,{to:"/",class:"nav-link text-white me-3"},{default:(0,i.w5)((()=>[(0,i.Uk)("首頁")])),_:1})]),(0,i._)("li",v,[(0,i.Wm)(d,{to:"/about",class:"nav-link text-white me-3"},{default:(0,i.w5)((()=>[(0,i.Uk)("關於我們")])),_:1})]),(0,i._)("li",x,[(0,i.Wm)(d,{to:"/productList",class:"nav-link text-white me-3"},{default:(0,i.w5)((()=>[(0,i.Uk)("菜單介紹")])),_:1})]),(0,i._)("li",b,[(0,i.Wm)(d,{to:"/reservation",class:"nav-link text-white me-3"},{default:(0,i.w5)((()=>[(0,i.Uk)("線上訂位")])),_:1})]),(0,i._)("li",w,[(0,i._)("button",{class:"btn bg-none border-none nav-link text-white me-3 fs-4 position-relative",href:"",onClick:e[0]||(e[0]=(...t)=>o.openOrderModal&&o.openOrderModal(...t)),onKeypress:e[1]||(e[1]=(...e)=>t.enter&&t.enter(...e))},[y,(0,i._)("span",k,(0,r.zw)(this.amoutOfOrders),1)],32)])])])])]),(0,i.Wm)(l,{onUpdateQty:o.updateOrderQty},null,8,["onUpdateQty"]),(0,i.Wm)(C,{ref:"orderModal",onUpdateAmoutOfOrders:o.countAmoutOfOrders},null,8,["onUpdateAmoutOfOrders"]),_,(0,i._)("button",{type:"button",class:"btn position-fixed end-0 bottom-0 m-4 bg-dark",onClick:e[2]||(e[2]=(...t)=>o.backToTop&&o.backToTop(...t))},O)],64)}var j=n(1097);const P={class:"modal modal-lg",tabindex:"-1",id:"orderModal",style:{"z-index":"10000"}},S={class:"modal-dialog"},L={class:"modal-content"},N={class:"modal-body"},T={class:"container",style:{"max-width":"500px"}},M=(0,i._)("div",{class:"border-bottom border-dark d-flex justify-content-center align-items-center"},[(0,i._)("div",{class:"my-4 d-flex justify-content-between align-items-center flex-column flex-md-row"},[(0,i._)("img",{src:j,style:{width:"100px",height:"100px"},alt:"header-img",class:"me-md-5"}),(0,i._)("span",{class:"fs-2 d-block mt-2"},"預定餐點")])],-1),E={key:0,class:"w-100 text-center"},H=(0,i._)("i",{class:"bi bi-basket2-fill text-dark",id:"empty-bag-Img"},null,-1),D=(0,i._)("p",{class:"fs-2"},"目前尚無預定餐點",-1),$={key:1},U={class:"border-bottom border-dark py-4"},z=(0,i._)("p",{class:"fs-4"},"預約訂單內容",-1),W={class:"table"},q=(0,i._)("thead",null,[(0,i._)("tr",null,[(0,i._)("th",{class:"col-4"},"品項"),(0,i._)("th",{class:"text-center"},"單價"),(0,i._)("th",{class:"text-center"},"數量"),(0,i._)("th",{class:"col-1"})])],-1),A={class:"text-center"},Z={class:"text-center"},Q=["onClick"],R=(0,i._)("i",{class:"bi bi-dash-lg"},null,-1),B=[R],K=["onClick"],Y=(0,i._)("i",{class:"bi bi-plus-lg"},null,-1),F=[Y],X=["onClick"],J=(0,i._)("i",{class:"bi bi-x-lg"},null,-1),V=[J],G={colspan:"5",class:"text-end w-100"},tt={class:"py-4 text-center row"},et={class:"col"},nt={class:"col"};function at(t,e,n,a,s,o){const d=(0,i.up)("SpinnerLoadingPage"),l=(0,i.up)("router-link");return(0,i.wg)(),(0,i.iD)(i.HY,null,[(0,i.Wm)(d,{ref:"spinnerLoadingPage"},null,512),(0,i._)("div",P,[(0,i._)("div",S,[(0,i._)("div",L,[(0,i._)("div",N,[(0,i._)("div",T,[M,0===s.cartContent.total?((0,i.wg)(),(0,i.iD)("div",E,[H,D,(0,i.Wm)(l,{to:"/productList",class:"btn btn-lg btn-dark mt-3 mb-5",onClick:o.modalClose},{default:(0,i.w5)((()=>[(0,i.Uk)(" 前往選購餐點 ")])),_:1},8,["onClick"])])):(0,i.kq)("",!0),0!==s.cartContent.total?((0,i.wg)(),(0,i.iD)("div",$,[(0,i._)("div",U,[z,(0,i._)("table",W,[q,(0,i._)("tbody",null,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(s.cartContent.carts,((t,e)=>((0,i.wg)(),(0,i.iD)("tr",{key:t.id},[(0,i._)("td",null,(0,r.zw)(t.product.title),1),(0,i._)("td",A,(0,r.zw)(t.product.price),1),(0,i._)("td",Z,[(0,i._)("button",{type:"button",class:"btn btn-sm rounded-circle btn-outline-dark me-1 me-sm-3 text-center p-0",onClick:n=>o.changeQty(t.id,e,t.qty-1),style:{width:"20px",height:"20px","line-height":"20px"}},B,8,Q),(0,i.Uk)((0,r.zw)(t.qty)+" ",1),(0,i._)("button",{type:"button",class:"btn btn-sm rounded-circle btn-outline-dark ms-1 ms-sm-3 text-center p-0",onClick:n=>o.changeQty(t.id,e,t.qty+1),style:{width:"20px",height:"20px","line-height":"20px"}},F,8,K)]),(0,i._)("td",null,[(0,i._)("button",{type:"button",class:"btn btn-otline-dark border-none",onClick:e=>o.cancelCart(t.id)},V,8,X)])])))),128)),(0,i._)("tr",null,[(0,i._)("td",G,"餐點價格："+(0,r.zw)(s.cartContent.total),1)])])])]),(0,i._)("div",tt,[(0,i._)("div",et,[(0,i._)("button",{class:"btn btn-lg btn-dark px-4 w-100",type:"button",onClick:e[0]||(e[0]=t=>o.changeToConfirmPage("takeaway"))}," 外帶自取 ")]),(0,i._)("div",nt,[(0,i._)("button",{class:"btn btn-lg btn-dark px-4 w-100",type:"button",onClick:e[1]||(e[1]=t=>o.changeToConfirmPage("fooddelivery"))}," 外送到府 ")])])])):(0,i.kq)("",!0)])])])])])],64)}n(7658);var st=n(7972),ot=n.n(st),it=n(1508),rt={data(){return{modal:{},date:[],couponCode:"",cartContent:{},typeOfOrder:"",amoutOfOrders:0}},components:{SpinnerLoadingPage:it.Z},emits:["updateAmoutOfOrders"],methods:{modalShow(){this.modal.show()},modalClose(){this.modal.hide()},getCartContent(){const t="https://vue3-course-api.hexschool.io/api/chenshaoen/cart";this.axios.get(t).then((t=>{console.log(t),this.cartContent=t.data.data,console.log(this.cartContent),this.cartContent.final_total=Math.floor(this.cartContent.final_total),this.$refs.spinnerLoadingPage.loadingPageHide(),this.amoutOfOrders=this.cartContent.carts.length,this.$emit("updateAmoutOfOrders",this.amoutOfOrders)}))},cancelCart(t){this.$refs.spinnerLoadingPage.loadingPageShow();const e=`https://vue3-course-api.hexschool.io/api/chenshaoen/cart/${t}`;this.axios.delete(e).then((t=>{console.log(t),this.getCartContent()}))},changeToConfirmPage(t){this.modalClose(),this.$router.push(`/${t}`)},changeQty(t,e,n){if(0!==n){this.$refs.spinnerLoadingPage.loadingPageShow(),console.log("changeQty"),console.log(t,e,n);const a={data:{product_id:t,qty:n}};console.log(a);const s=`https://vue3-course-api.hexschool.io/api/chenshaoen/cart/${t}`;this.axios.put(s,a).then((t=>{console.log(t),this.getCartContent()}))}}},mounted(){this.modal=new(ot())("#orderModal"),this.getCartContent()}},dt=n(89);const lt=(0,dt.Z)(rt,[["render",at]]);var ct=lt,ut={data(){return{amoutOfOrders:0}},components:{orderModal:ct},methods:{openOrderModal(){this.$refs.orderModal.getCartContent(),this.$refs.orderModal.modalShow()},backToTop(){window.scrollTo({top:0,behavior:"smooth"})},scroll(){const t=document.getElementById("navBar");console.log(t)},countAmoutOfOrders(t){this.amoutOfOrders=t},updateOrderQty(){console.log("updateOrderQty"),this.$refs.orderModal.getCartContent()}},created(){}};const mt=(0,dt.Z)(ut,[["render",I]]);var pt=mt,ht=n(2483),gt=n.p+"img/eatin.69c55d80.png",ft=n.p+"img/takeaway.91f5ad3e.png",vt=n.p+"img/fooddelivery.0f28d347.png";const xt={class:"home"},bt=(0,i.uE)('<div class="container mx-auto" style="max-width:800px;"><p class="mx-auto text-center fs-2 fw-bold border border-dark" style="width:300px;margin:80px 0 100px 0;"> 消費方式 </p><div class="row row-cols-1 row-cols-md-3"><div class="col expand-target"><div class="d-flex flex-column align-items-center text-center mx-2" style="height:350px;"><img src="'+gt+'" alt="" class="mb-4" style="height:150px;"><p class="fs-5 fw-bold">內用點餐</p><p class="fs-4">餐點新鮮出爐<br>絕佳美味饗宴</p></div></div><div class="col expand-target"><div class="d-flex flex-column align-items-center text-center mx-2" style="height:350px;"><img src="'+ft+'" alt="" class="mb-4" style="height:150px;"><p class="fs-4 fw-bold">預約外帶</p><p class="fs-4">指定取餐時間<br>省時方便 </p></div></div><div class="col expand-target"><div class="d-flex flex-column align-items-center text-center mx-2" style="height:350px;"><img src="'+vt+'" alt="" class="mb-4" style="height:150px;"><p class="fs-4 fw-bold">外送到府</p><p class="fs-4">餐點費用達300元<br>可免費外送</p><p class="fs-6 mt-0">未達300元外送費用50元</p></div></div></div></div>',1),wt={class:"container mt-4 d-flex flex-column align-items-center justify-contnent-center",style:{"max-width":"1000px"}},yt=(0,i.uE)('<div id="introduction1" data-aos="fade-right" data-aos-duration="2000" class="w-100 d-flex justify-content-center align-items-end"><div id="introduction1-box" class="position-relative mb-5 border border-dark border-2 d-flex justify-content-lg-end justify-content-center align-items-end"><div id="introduction1-img" class="position-absolute"></div><div id="introduction1-text"><h1 class="fw-bold mb-5">對品質的堅持</h1><p class="fs-3">有機栽種安全衛生</p><p class="fs-3">手工麵條口感獨特</p></div></div></div><div id="introduction2" data-aos="fade-left" data-aos-duration="2000" class="w-100 d-flex justify-content-center align-items-end"><div id="introduction2-box" class="position-relative mb-5 border border-dark border-2 d-flex justify-content-lg-start justify-content-center align-items-end"><div id="introduction2-img" class="position-absolute"></div><div id="introduction2-text" class="text-center"><h2 class="fw-bold">Recordis</h2><h2 class="fw-bold mb-5">在拉丁文中代表著記憶</h2><p class="fs-6 lh-sm">兒時第一次嚐到義大利麵的新奇口感</p><p class="fs-6 lh-sm">學生時期伴隨朋友嘻笑入口的濃郁歡樂</p><p class="fs-6 lh-sm">與家人一起分享佳餚時的平凡幸福</p><p class="fs-6 lh-sm">期待在Recordis與您相遇</p><p class="fs-6 lh-sm">與您細細品嚐過去的回憶</p><p class="fs-6 lh-sm">也在這裡創造更多美好體驗</p></div></div></div>',2),kt=(0,i._)("div",{"data-aos":"zoom-in","data-aos-duration":"1000"},[(0,i._)("div",{class:"position-relative",style:{height:"50px"}},[(0,i._)("div",{class:"bg-dark position-absolute top-50",style:{width:"100%",height:"1px"}}),(0,i._)("span",{class:"bg-white position-absolute start-50 top-50 translate-middle fw-bolder fs-4 text-dark text-center mx-auto px-3"}," 推薦餐點 ")])],-1),_t={class:"container my-4",style:{"max-width":"1000px"},"data-aos":"fade-right","data-aos-duration":"1000"},Ct={class:"row gx-4 gy-5 row-cols-2 row-cols-md-3"},Ot={class:"card border-dark",style:{width:"18rem"}},It=["src"],jt={class:"card-body border-bottom border-dark"},Pt={class:"card-title"},St={class:"card-text"},Lt={class:"d-flex w-100",style:{height:"30px"}},Nt=["onClick"],Tt=["onClick"];function Mt(t,e,n,a,s,o){const d=(0,i.up)("SpinnerLoadingPage"),l=(0,i.up)("messageToast"),c=(0,i.up)("advertisementModal"),u=(0,i.up)("homePageHeader"),m=(0,i.up)("router-link");return(0,i.wg)(),(0,i.iD)(i.HY,null,[(0,i.Wm)(d,{ref:"spinnerLoadingPage"},null,512),(0,i.Wm)(l,{ref:"messageToast",messageReceived:s.toastMessage,style:{"z-index":"100"}},null,8,["messageReceived"]),(0,i._)("div",xt,[(0,i.Wm)(c,{ref:"advertisementModal"},null,512),(0,i.Wm)(u),bt,(0,i._)("div",wt,[yt,(0,i.Wm)(m,{to:"/about",type:"button",class:"mb-5 mx-auto btn btn-dark",style:{width:"150px"}},{default:(0,i.w5)((()=>[(0,i.Uk)(" 查看品牌理念 ")])),_:1})]),kt,(0,i._)("div",_t,[(0,i._)("div",Ct,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(s.recommandedProducts,(n=>((0,i.wg)(),(0,i.iD)("div",{class:"col d-flex justify-content-center card-expand",key:n.id},[(0,i._)("div",Ot,[(0,i._)("img",{src:n.imageUrl,class:"card-img-top",alt:"..."},null,8,It),(0,i._)("div",jt,[(0,i._)("h5",Pt,(0,r.zw)(n.title),1),(0,i._)("p",St,(0,r.zw)(n.price),1)]),(0,i._)("div",Lt,[(0,i._)("span",{class:"d-block text-center text-decoration-none border-end border-dark w-50 lh-lg link-hover",onClick:t=>o.turnToDetailPage(n.id),onKeyup:e[0]||(e[0]=(...e)=>t.esc&&t.esc(...e))}," 詳細資訊 ",40,Nt),(0,i._)("span",{class:"d-block text-center text-decoration-none w-50 lh-lg link-hover",onClick:t=>o.QuickAddToCart(n.id),onKeyup:e[1]||(e[1]=(...e)=>t.plus&&t.plus(...e))}," 預約外帶 ",40,Tt)])])])))),128)),(0,i.Wm)(m,{to:"/productList",type:"button",class:"my-5 mx-auto btn btn-dark",style:{width:"150px"}},{default:(0,i.w5)((()=>[(0,i.Uk)(" 查看所有餐點 ")])),_:1})])])])],64)}var Et=n(6905),Ht=n.n(Et),Dt=n.p+"img/openingDiscount.6d8e3d34.jpg";const $t={class:"modal modal-lg",tabindex:"-1",id:"advertisementModal"},Ut={class:"modal-dialog"},zt={class:"modal-content"},Wt={class:"modal-body p-0 position-relative w-100",id:"advertisementModalBody"},qt=(0,i._)("img",{class:"w-100 overflow-hidden opacity-0",src:Dt,alt:"",id:"advertisementModalImg"},null,-1);function At(t,e,n,a,s,o){return(0,i.wg)(),(0,i.iD)("div",$t,[(0,i._)("div",Ut,[(0,i._)("div",zt,[(0,i._)("div",Wt,[qt,(0,i._)("i",{class:"bi bi-x-circle-fill position-absolute fs-3",id:"advertisementModalCloseModal",onClick:e[0]||(e[0]=(...t)=>o.modalClose&&o.modalClose(...t)),onKeypress:e[1]||(e[1]=(...e)=>t.esc&&t.esc(...e))},null,32)])])])])}var Zt={data(){return{modal:{}}},methods:{modalShow(){this.modal.show()},modalClose(){this.modal.hide()}},mounted(){this.modal=new(ot())("#advertisementModal"),this.modalShow()}};const Qt=(0,dt.Z)(Zt,[["render",At]]);var Rt=Qt,Bt=n(7759);const Kt={class:"w-100 opacity-100 position-absolute overflow-hidden d-flex justify-content-center",id:"homePageHeader",style:{height:"500px"}},Yt=["src"],Ft=(0,i.uE)('<div class="position-relative d-flex flex-column justify-content-center align-items-center" id="homepage-header-content"><img src="'+j+'" style="width:250px;height:250px;" alt="header-img"><div class="text-dark mt-3 d-flex flex-column flex-md-row"><a href="/#/about" class="text-dark fs-4 fw-bold text-decoration-none mb-2 mb-md-0"> 關於我們 </a><span class="mx-5 fs-4 d-none d-md-block">X</span><a href="/#/productlist" class="text-dark fs-4 fw-bold text-decoration-none mb-2 mb-md-0"> 菜單介紹 </a><span class="mx-5 fs-4 d-none d-md-block">X</span><a href="/#/reservation" class="text-dark fs-4 fw-bold text-decoration-none mb-2 mb-md-0"> 線上訂位 </a></div></div>',1);function Xt(t,e,a,s,o,r){return(0,i.wg)(),(0,i.iD)(i.HY,null,[(0,i._)("div",Kt,[(0,i._)("img",{src:n(3296)(`./${o.currentHeaderImgSrc}.jpg`),alt:"",id:"homepage-header-image"},null,8,Yt)]),Ft],64)}var Jt={data(){return{currentParams:"",currentImgNum:1,currentHeaderImgSrc:"",ImgSrcTest:"pexels-thiea-alhoz-5604815",imgSrc:["headerImg-1","headerImg-2","headerImg-3"],keepInterval:!0}},methods:{changeHeaderImg(){3!==this.currentImgNum?(this.currentImgNum+=1,this.currentHeaderImgSrc=this.imgSrc[this.currentImgNum-1]):3===this.currentImgNum&&(this.currentImgNum=1,this.currentHeaderImgSrc=this.imgSrc[this.currentImgNum-1]),setTimeout((()=>{setInterval((()=>{3!==this.currentImgNum?(this.currentImgNum+=1,this.currentHeaderImgSrc=this.imgSrc[this.currentImgNum-1]):3===this.currentImgNum&&(this.currentImgNum=1,this.currentHeaderImgSrc=this.imgSrc[this.currentImgNum-1])}),5e3)}),2e3);const t=setInterval((()=>{if(!0===this.keepInterval){const t=document.getElementById("homePageHeader");setTimeout((()=>{t.classList.remove("opacity-100"),t.classList.add("opacity-0")}),0),setTimeout((()=>{t.classList.remove("opacity-0"),t.classList.add("opacity-100")}),2500)}}),5e3);setInterval((()=>{!1===this.keepInterval&&clearInterval(t)}),3e3)}},created(){this.currentHeaderImgSrc=this.imgSrc[this.currentImgNum-1]},mounted(){this.changeHeaderImg();const t=document.getElementById("homePageHeader");t.classList.remove("opacity-100"),t.classList.add("opacity-0"),setTimeout((()=>{t.classList.remove("opacity-0"),t.classList.add("opacity-100")}),2500)},beforeUnmount(){this.keepInterval=!1}};const Vt=(0,dt.Z)(Jt,[["render",Xt]]);var Gt=Vt,te={data(){return{recommandedProductsId:["-NLv7XDV7SGeJaegYizF","-NLv715KqT0NKtudRi4H","-NLv6lqylqkSJXmEknrw","-NLv5eDLFEhzT-HdtKwu","-NLv5rF7LD96Yh6Dkvcb","-NLv6UA0Xvg4ct9RWnep"],recommandedProducts:[],toastMessage:"餐點已加入預訂清單",expandedNum:0}},emits:["updateQty"],components:{homePageHeader:Gt,advertisementModal:Rt,SpinnerLoadingPage:it.Z,messageToast:Bt.Z},methods:{getrecommandedProducts(t){const e=`https://vue3-course-api.hexschool.io/api/chenshaoen/product/${t}`;this.axios.get(e).then((t=>{this.recommandedProducts.push(t.data.product)}))},QuickAddToCart(t){this.$refs.spinnerLoadingPage.loadingPageShow();const e="https://vue3-course-api.hexschool.io/api/chenshaoen/cart",n={data:{product_id:`${t}`,qty:1}};this.axios.post(e,n).then((t=>{this.$refs.spinnerLoadingPage.loadingPageHide(),this.$emit("updateQty"),t.data.success?(this.toastMessage="餐點已加入預訂清單",this.$refs.messageToast.toastShow()):(this.toastMessage="餐點加入預訂清單失敗",this.$refs.messageToast.toastShow())}))},turnToDetailPage(t){this.$router.push(`/productDetail/${t}`)},expand(){const t=document.getElementsByClassName("expand-target"),e=[...t];e.forEach(((t,e)=>{t.classList.remove("expanded"),e+1===this.expandedNum&&t.classList.add("expanded")}))}},created(){window.scrollTo({top:0,behavior:"smooth"}),this.recommandedProductsId.forEach((t=>{this.getrecommandedProducts(t)})),console.log(this.recommandedProducts),Ht().init()},watch:{expandedNum(){this.expand()}},mounted(){this.expandedNum+=1,setInterval((()=>{this.expandedNum<=2?this.expandedNum+=1:3===this.expandedNum&&(this.expandedNum=1)}),3e3)}};const ee=(0,dt.Z)(te,[["render",Mt]]);var ne=ee;const ae=[{path:"/",name:"home",component:ne},{path:"/about",name:"about",component:()=>n.e(993).then(n.bind(n,3993))},{path:"/productlist",name:"productlist",component:()=>n.e(732).then(n.bind(n,6732))},{path:"/productdetail/:id",name:"productdetail",component:()=>n.e(790).then(n.bind(n,4790))},{path:"/takeaway",name:"takeaway",component:()=>n.e(152).then(n.bind(n,8152))},{path:"/fooddelivery",component:()=>n.e(99).then(n.bind(n,99))},{path:"/orderbuilt/:id",name:"orderbuilt",component:()=>n.e(599).then(n.bind(n,7599))},{path:"/reservation",name:"reservation",component:()=>n.e(700).then(n.bind(n,3700))},{path:"/reservationconfirm/:id",name:"reservationconfirm",component:()=>n.e(530).then(n.bind(n,9530))}],se=(0,ht.p7)({history:(0,ht.r5)(),routes:ae});var oe=se;n(1237);const ie=(0,o.ri)(pt);ie.use(s.Z,a.Z),ie.use(oe),ie.mount("#app")},7759:function(t,e,n){"use strict";n.d(e,{Z:function(){return p}});var a=n(3396),s=n(7139);const o={class:"toast position-fixed end-0 shadow-none",role:"alert","aria-live":"assertive","aria-atomic":"true",style:{top:"90px"}},i={class:"toast-body bg-dark text-white"};function r(t,e,n,r,d,l){return(0,a.wg)(),(0,a.iD)("div",o,[(0,a._)("div",i,(0,s.zw)(n.messageReceived),1)])}n(7658);var d=n(8803),l=n.n(d),c={data(){return{toast:[]}},props:["messageReceived"],methods:{toastShow(){this.toast.forEach((t=>{t.show()}))}},mounted(){const t=document.querySelectorAll(".toast");t.forEach((t=>{const e=new(l())(t);this.toast.push(e)}))}},u=n(89);const m=(0,u.Z)(c,[["render",r]]);var p=m},1508:function(t,e,n){"use strict";n.d(e,{Z:function(){return u}});var a=n(3396);const s={id:"spinnerloading",class:"d-none top-0",style:{width:"100vw",height:"100vh","z-index":"10000005"}},o=(0,a._)("div",{class:"position-fixed top-50 start-50 translate-middle"},[(0,a._)("div",{class:"spinner-border text-white mx-auto",style:{width:"3rem",height:"3rem"},role:"status"})],-1),i=[o];function r(t,e,n,o,r,d){return(0,a.wg)(),(0,a.iD)("div",s,i)}var d={data(){return{loadingValue:25}},methods:{loadingPageShow(){const t=document.getElementById("spinnerloading");console.log(t),t.classList.remove("d-none")},loadingPageHide(){const t=document.getElementById("spinnerloading");t.classList.add("d-none")}}},l=n(89);const c=(0,l.Z)(d,[["render",r]]);var u=c},3296:function(t,e,n){var a={"./headerImg-1.jpg":1576,"./headerImg-2.jpg":4013,"./headerImg-3.jpg":1182,"./pexels-andrea-piacquadio-821054.jpg":7,"./pexels-fauxels-3184183.jpg":9645,"./pexels-natalia-kolotvina-10044046.jpg":7618,"./pexels-pixabay-327143.jpg":9386,"./pexels-thiea-alhoz-5604815.jpg":7393,"./pexels-yaroslav-shuraev-8845420.jpg":6442};function s(t){var e=o(t);return n(e)}function o(t){if(!n.o(a,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return a[t]}s.keys=function(){return Object.keys(a)},s.resolve=o,t.exports=s,s.id=3296},1097:function(t,e,n){"use strict";t.exports=n.p+"img/logo1.b88d5992.png"},1576:function(t,e,n){"use strict";t.exports=n.p+"img/headerImg-1.6dc66fc1.jpg"},4013:function(t,e,n){"use strict";t.exports=n.p+"img/headerImg-2.3a3f728c.jpg"},1182:function(t,e,n){"use strict";t.exports=n.p+"img/headerImg-3.1afe868c.jpg"},7:function(t,e,n){"use strict";t.exports=n.p+"img/pexels-andrea-piacquadio-821054.c053405b.jpg"},9645:function(t,e,n){"use strict";t.exports=n.p+"img/pexels-fauxels-3184183.5409029f.jpg"},7618:function(t,e,n){"use strict";t.exports=n.p+"img/pexels-natalia-kolotvina-10044046.60f4b277.jpg"},9386:function(t,e,n){"use strict";t.exports=n.p+"img/pexels-pixabay-327143.13084da2.jpg"},7393:function(t,e,n){"use strict";t.exports=n.p+"img/pexels-thiea-alhoz-5604815.e3883d04.jpg"},6442:function(t,e,n){"use strict";t.exports=n.p+"img/pexels-yaroslav-shuraev-8845420.a12634d1.jpg"}},e={};function n(a){var s=e[a];if(void 0!==s)return s.exports;var o=e[a]={id:a,loaded:!1,exports:{}};return t[a].call(o.exports,o,o.exports,n),o.loaded=!0,o.exports}n.m=t,function(){n.amdO={}}(),function(){var t=[];n.O=function(e,a,s,o){if(!a){var i=1/0;for(c=0;c<t.length;c++){a=t[c][0],s=t[c][1],o=t[c][2];for(var r=!0,d=0;d<a.length;d++)(!1&o||i>=o)&&Object.keys(n.O).every((function(t){return n.O[t](a[d])}))?a.splice(d--,1):(r=!1,o<i&&(i=o));if(r){t.splice(c--,1);var l=s();void 0!==l&&(e=l)}}return e}o=o||0;for(var c=t.length;c>0&&t[c-1][2]>o;c--)t[c]=t[c-1];t[c]=[a,s,o]}}(),function(){n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,{a:e}),e}}(),function(){n.d=function(t,e){for(var a in e)n.o(e,a)&&!n.o(t,a)&&Object.defineProperty(t,a,{enumerable:!0,get:e[a]})}}(),function(){n.f={},n.e=function(t){return Promise.all(Object.keys(n.f).reduce((function(e,a){return n.f[a](t,e),e}),[]))}}(),function(){n.u=function(t){return"js/"+t+"."+{99:"e909d61b",152:"cb440ade",530:"211bb844",599:"6f6f2944",700:"83efff60",732:"148d62e9",790:"70ddc76d",993:"71d99e43"}[t]+".js"}}(),function(){n.miniCssF=function(t){}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.hmd=function(t){return t=Object.create(t),t.children||(t.children=[]),Object.defineProperty(t,"exports",{enumerable:!0,set:function(){throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: "+t.id)}}),t}}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={},e="recordis:";n.l=function(a,s,o,i){if(t[a])t[a].push(s);else{var r,d;if(void 0!==o)for(var l=document.getElementsByTagName("script"),c=0;c<l.length;c++){var u=l[c];if(u.getAttribute("src")==a||u.getAttribute("data-webpack")==e+o){r=u;break}}r||(d=!0,r=document.createElement("script"),r.charset="utf-8",r.timeout=120,n.nc&&r.setAttribute("nonce",n.nc),r.setAttribute("data-webpack",e+o),r.src=a),t[a]=[s];var m=function(e,n){r.onerror=r.onload=null,clearTimeout(p);var s=t[a];if(delete t[a],r.parentNode&&r.parentNode.removeChild(r),s&&s.forEach((function(t){return t(n)})),e)return e(n)},p=setTimeout(m.bind(null,void 0,{type:"timeout",target:r}),12e4);r.onerror=m.bind(null,r.onerror),r.onload=m.bind(null,r.onload),d&&document.head.appendChild(r)}}}(),function(){n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){n.p=""}(),function(){var t={143:0};n.f.j=function(e,a){var s=n.o(t,e)?t[e]:void 0;if(0!==s)if(s)a.push(s[2]);else{var o=new Promise((function(n,a){s=t[e]=[n,a]}));a.push(s[2]=o);var i=n.p+n.u(e),r=new Error,d=function(a){if(n.o(t,e)&&(s=t[e],0!==s&&(t[e]=void 0),s)){var o=a&&("load"===a.type?"missing":a.type),i=a&&a.target&&a.target.src;r.message="Loading chunk "+e+" failed.\n("+o+": "+i+")",r.name="ChunkLoadError",r.type=o,r.request=i,s[1](r)}};n.l(i,d,"chunk-"+e,e)}},n.O.j=function(e){return 0===t[e]};var e=function(e,a){var s,o,i=a[0],r=a[1],d=a[2],l=0;if(i.some((function(e){return 0!==t[e]}))){for(s in r)n.o(r,s)&&(n.m[s]=r[s]);if(d)var c=d(n)}for(e&&e(a);l<i.length;l++)o=i[l],n.o(t,o)&&t[o]&&t[o][0](),t[o]=0;return n.O(c)},a=self["webpackChunkrecordis"]=self["webpackChunkrecordis"]||[];a.forEach(e.bind(null,0)),a.push=e.bind(null,a.push.bind(a))}();var a=n.O(void 0,[998],(function(){return n(4539)}));a=n.O(a)})();
//# sourceMappingURL=app.a8ffa0d3.js.map