"use strict";(self["webpackChunkrecordis"]=self["webpackChunkrecordis"]||[]).push([[732],{6576:function(t,e,a){a.d(e,{Z:function(){return u}});var o=a(3396),s=a(1097);const n={id:"loading",class:"d-none top-0 bg-light",style:{width:"100vw",height:"100vh","z-index":"10000000"}},i=(0,o._)("div",{class:"position-fixed top-50 start-50 translate-middle"},[(0,o._)("img",{src:s,style:{width:"300px",height:"300px"},alt:"header-img"}),(0,o._)("br"),(0,o._)("span",{class:"fs-2 d-block text-center"},"資料載入中"),(0,o._)("br"),(0,o._)("div",{class:"progress",role:"progressbar","aria-label":"Animated striped","aria-valuenow":"75","aria-valuemin":"0","aria-valuemax":"100"},[(0,o._)("div",{class:"progress-bar bg-dark progress-bar-striped progress-bar-animated",style:{width:"100%"}})])],-1),r=[i];function c(t,e,a,s,i,c){return(0,o.wg)(),(0,o.iD)("div",n,r)}var d={data(){return{loadingValue:25}},methods:{loadingPageShow(){const t=document.getElementById("loading");t.classList.remove("d-none")},loadingPageHide(){const t=document.getElementById("loading");t.classList.add("d-none")}}},l=a(89);const g=(0,l.Z)(d,[["render",c]]);var u=g},6732:function(t,e,a){a.r(e),a.d(e,{default:function(){return E}});var o=a(3396),s=a(9242),n=a(7139);const i={class:"container my-4",style:{"max-width":"1000px"}},r=(0,o._)("p",{class:"ms-2 fw-bold","data-aos":"fade-right","data-aos-once":"true","data-aos-duration":"1000"}," 目前頁面：菜單介紹 ",-1),c=(0,o.uE)('<option class="selected">全部</option><option value="義大利麵">義大利麵</option><option value="披薩">披薩</option><option value="附餐">附餐</option><option value="甜點">甜點</option><option value="飲品">飲品</option>',6),d=[c],l={class:"row gy-5 gx-xl-0 row-cols-2 row-cols-md-3 mt-1","data-aos":"fade-right","data-aos-once":"true","data-aos-duration":"1000"},g={class:"card border-dark card-expand",style:{width:"18rem"}},u={class:"card-img-top w-100 overflow-hidden"},h=["src"],p={class:"card-body border-bottom border-dark"},m={class:"card-title"},w={class:"card-text"},y={class:"d-flex",style:{height:"30px"}},b=["onClick"],f=["onClick"],v={class:"w-100 mt-5 d-flex justify-content-center"},P=(0,o._)("i",{class:"bi bi-chevron-left"},null,-1),k=[P],x=["onClick"],_=(0,o._)("i",{class:"bi bi-chevron-right"},null,-1),D=[_];function C(t,e,a,c,P,_){const C=(0,o.up)("SpinnerLoadingPage"),L=(0,o.up)("LoadingPage"),T=(0,o.up)("messageToast");return(0,o.wg)(),(0,o.iD)(o.HY,null,[(0,o.Wm)(C,{ref:"spinnerLoadingPage"},null,512),(0,o.Wm)(L,{ref:"loadingPage"},null,512),(0,o.Wm)(T,{ref:"messageToast",messageReceived:P.toastMessage,style:{"z-index":"100"}},null,8,["messageReceived"]),(0,o._)("div",i,[r,(0,o.wy)((0,o._)("select",{class:"ms-2 form-select my-3 shadow-none border-dark",style:{width:"300px"},"aria-label":"Default select example",onChange:e[0]||(e[0]=(...e)=>t.categoryFilter&&t.categoryFilter(...e)),"onUpdate:modelValue":e[1]||(e[1]=t=>P.category=t),"data-aos":"fade-right","data-aos-once":"true","data-aos-duration":"1000"},d,544),[[s.bM,P.category]]),(0,o._)("div",l,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(P.productsShown,(a=>((0,o.wg)(),(0,o.iD)("div",{class:"col d-flex justify-content-center",key:a.id},[(0,o._)("div",g,[(0,o._)("div",u,[(0,o._)("img",{src:a.data.imageUrl,class:"w-100",alt:"..."},null,8,h)]),(0,o._)("div",p,[(0,o._)("h5",m,(0,n.zw)(a.data.title),1),(0,o._)("p",w,(0,n.zw)(a.data.price),1)]),(0,o._)("div",y,[(0,o._)("span",{class:"d-block text-center text-decoration-none border-end border-dark w-50 lh-lg link-hover",onClick:t=>_.TurnToDetailPage(a.data.id),onKeyup:e[2]||(e[2]=(...e)=>t.enter&&t.enter(...e))},"詳細資訊",40,b),(0,o._)("span",{class:"d-block text-center text-decoration-none w-50 lh-lg link-hover",onClick:t=>_.QuickAddToCart(a.data.id),onKeyup:e[3]||(e[3]=(...e)=>t.plus&&t.plus(...e))}," 預約外帶 ",40,f)])])])))),128))]),(0,o._)("div",v,[1!==P.currentPage?((0,o.wg)(),(0,o.iD)("button",{key:0,type:"button",class:"btn mx-1 btn-outline-dark px-2",onClick:e[4]||(e[4]=t=>_.changePage(P.currentPage-1))},k)):(0,o.kq)("",!0),((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(P.pagination,(t=>((0,o.wg)(),(0,o.iD)("button",{type:"button",class:"btn mx-1 btn-outline-dark",key:t,onClick:e=>_.changePage(t)},(0,n.zw)(t),9,x)))),128)),P.currentPage!==P.lastPage?((0,o.wg)(),(0,o.iD)("button",{key:1,type:"button",class:"btn mx-1 btn-outline-dark px-2",onClick:e[5]||(e[5]=t=>_.changePage(P.currentPage+1))},D)):(0,o.kq)("",!0)])])],64)}a(7658);var L=a(6905),T=a.n(L),S=a(6576),$=a(1508),M=a(7759),H={data(){return{productsInfo:[],productsShown:[],pagination:[],lastPage:1,currentPage:1,category:"全部",toastMessage:"餐點已加入預訂清單"}},components:{LoadingPage:S.Z,SpinnerLoadingPage:$.Z,messageToast:M.Z},emits:["updateQty"],methods:{getProductsListData(){this.$refs.loadingPage.loadingPageShow();const t="https://vue3-course-api.hexschool.io/api/chenshaoen/products/all";this.axios.get(t).then((t=>{console.log(t),this.productsInfo=t.data.products;const e=[];let a=0,o=0;t.data.products.forEach((t=>{if("全部"===this.category&&"其他"!==t.category){a+=1,o+=1;const s=Math.ceil(a/9,10);if(s===this.currentPage){const a={data:t,category:t.category,pageNum:s};e.push(a)}}else{if(this.category===t.category){a+=1,o+=1;const s=Math.ceil(a/9,10);if(s===this.currentPage){const a={data:t,category:t.category,pageNum:s};e.push(a)}}console.log(e)}this.$refs.loadingPage.loadingPageHide()})),this.productsShown=e,console.log(this.productsShown),this.pagination=[];const s=Math.ceil(o/9);this.lastPage=s;for(let n=1;n<=s;n+=1)this.pagination.push(n);console.log(this.pagination)}))},changePage(t){this.currentPage=t},TurnToDetailPage(t){this.$router.push(`/productDetail/${t}`)},QuickAddToCart(t){this.$refs.spinnerLoadingPage.loadingPageShow();const e="https://vue3-course-api.hexschool.io/api/chenshaoen/cart",a={data:{product_id:`${t}`,qty:1}};this.axios.post(e,a).then((t=>{this.$refs.spinnerLoadingPage.loadingPageHide(),this.$emit("updateQty"),console.log(t),t.data.success?(this.toastMessage="餐點已加入預訂清單",this.$refs.messageToast.toastShow()):(this.toastMessage="餐點加入預訂清單失敗",this.$refs.messageToast.toastShow())}))}},watch:{currentPage(){this.getProductsListData()},category(){this.getProductsListData()}},created(){window.scrollTo({top:0,behavior:"smooth"})},mounted(){this.getProductsListData(),T().init()}},Z=a(89);const z=(0,Z.Z)(H,[["render",C]]);var E=z}}]);
//# sourceMappingURL=732.148d62e9.js.map