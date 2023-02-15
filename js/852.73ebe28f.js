"use strict";(self["webpackChunkrecordis"]=self["webpackChunkrecordis"]||[]).push([[852],{6576:function(e,t,s){s.d(t,{Z:function(){return u}});var a=s(3396),o=s(1097);const n={id:"loading",class:"d-none top-0 bg-light",style:{width:"100vw",height:"100vh","z-index":"10000000"}},i=(0,a._)("div",{class:"position-fixed top-50 start-50 translate-middle"},[(0,a._)("img",{src:o,style:{width:"300px",height:"300px"},alt:"header-img"}),(0,a._)("br"),(0,a._)("span",{class:"fs-2 d-block text-center"},"資料載入中"),(0,a._)("br"),(0,a._)("div",{class:"progress",role:"progressbar","aria-label":"Animated striped","aria-valuenow":"75","aria-valuemin":"0","aria-valuemax":"100"},[(0,a._)("div",{class:"progress-bar bg-dark progress-bar-striped progress-bar-animated",style:{width:"100%"}})])],-1),d=[i];function l(e,t,s,o,i,l){return(0,a.wg)(),(0,a.iD)("div",n,d)}var r={data(){return{loadingValue:25}},methods:{loadingPageShow(){const e=document.getElementById("loading");e.classList.remove("d-none")},loadingPageHide(){const e=document.getElementById("loading");e.classList.add("d-none")}}},c=s(89);const p=(0,c.Z)(r,[["render",l]]);var u=p},3852:function(e,t,s){s.r(t),s.d(t,{default:function(){return _e}});var a=s(3396),o=s(7139),n=s(9242),i=s(1097);const d={class:"container d-flex justify-content-center"},l={class:"w-75"},r=(0,a._)("div",{class:"border-bottom border-dark d-flex justify-content-center align-items-center"},[(0,a._)("div",{class:"my-4 w-50 d-flex justify-content-between align-items-center flex-column flex-md-row"},[(0,a._)("img",{src:i,style:{width:"100px",height:"100px"},alt:"header-img",class:"me-lg-5"}),(0,a._)("span",{class:"fs-2 d-block mt-2"},"預約外帶")])],-1),c={class:"border-bottom border-dark py-4"},p=(0,a._)("p",{class:"fs-4"},"預約訂單內容",-1),u={class:"table"},m=(0,a._)("thead",null,[(0,a._)("tr",null,[(0,a._)("th",{scope:"col",class:"text-center col-5"},"品項"),(0,a._)("th",{scope:"col",class:"text-center"},"單價"),(0,a._)("th",{scope:"col",class:"text-center"},"數量"),(0,a._)("th",{scope:"col",class:"text-center"},"小計")])],-1),h={class:"text-center col-5"},g={class:"text-center"},f={class:"text-center"},_={class:"text-center"},b={class:"text-end"},w={colspan:"4",class:"fs-4 fw-bold"},v={class:"ms-3"},y={class:"border-bottom border-dark py-4"},k=(0,a._)("p",{class:"fs-4"},"優惠券",-1),D={class:"input-group mb-3"},x={class:"border-bottom border-dark py-4"},C=(0,a._)("p",{class:"fs-4"},"消費金額總計",-1),M={class:"table"},$=(0,a._)("thead",null,[(0,a._)("tr",null,[(0,a._)("th",{class:"text-center w-50",scope:"col"},"項目"),(0,a._)("th",{class:"text-center w-50",scope:"col"},"費用")])],-1),T=(0,a._)("td",{class:"text-center"},"餐點費用",-1),V={class:"text-center"},z={key:0},U={class:"text-center"},P={class:"text-center"},q={class:"text-end"},O=(0,a._)("td",null,null,-1),H={colspan:"2",class:"fs-4 fw-bold"},S={class:"ms-3"},F={action:"",class:"needs-validation",novalidate:""},L={class:"border-bottom border-dark py-4"},R=(0,a._)("p",{class:"fs-4"},"預約取餐時間",-1),Y={class:"row row-cols-2 row-cols-md-5 gy-2"},Z=["for"],E=["name","id","value","selected"],K=(0,a._)("div",{class:"invalid-feedback"}," 請選擇取餐日期 ",-1),j=["for"],A=["name","id","value","selected"],I=(0,a._)("div",{class:"invalid-feedback"}," 請選擇取餐日期 ",-1),B={class:"mt-4"},G={key:0},W=(0,a._)("option",{disabled:"",selected:"",value:""},"請選擇取餐時段",-1),J=["value","disabled"],N=(0,a._)("div",{class:"invalid-feedback"}," 請選擇取餐時間 ",-1),Q=(0,a._)("div",{class:"invalid-feedback"}," 請選擇取餐時間 ",-1),X={key:1},ee=(0,a._)("option",{disabled:"",selected:"",value:""},"請選擇取餐時段",-1),te=["value","disabled"],se=(0,a._)("div",{class:"invalid-feedback"}," 請選擇取餐時間 ",-1),ae={class:"border-dark py-4"},oe=(0,a._)("p",{class:"fs-4"},"取餐資訊",-1),ne={for:"name",class:"w-100"},ie=(0,a._)("div",{class:"invalid-feedback"}," 請輸入取餐人姓名 ",-1),de={for:"name",class:"w-100 mt-3"},le=(0,a._)("div",{class:"invalid-feedback"}," 請輸入取餐人連絡電話 ",-1),re={for:"message",class:"w-100 mt-3"},ce={class:"py-4 text-center"};function pe(e,t,s,i,pe,ue){const me=(0,a.up)("LoadingPage"),he=(0,a.up)("messageToast");return(0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a.Wm)(me,{ref:"loadingPage"},null,512),(0,a.Wm)(he,{ref:"messageToast",messageReceived:e.toastMessage,style:{"z-index":"100"}},null,8,["messageReceived"]),(0,a._)("div",d,[(0,a._)("div",l,[r,(0,a._)("div",null,[(0,a._)("div",c,[p,(0,a._)("table",u,[m,(0,a._)("tbody",null,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(pe.cartContent.carts,(e=>((0,a.wg)(),(0,a.iD)("tr",{key:e.id},[(0,a._)("td",h,(0,o.zw)(e.product.title),1),(0,a._)("td",g,(0,o.zw)(e.product.price),1),(0,a._)("td",f,(0,o.zw)(e.qty),1),(0,a._)("td",_,(0,o.zw)(e.total),1)])))),128)),(0,a._)("tr",b,[(0,a._)("td",w,[(0,a.Uk)(" 餐點費用:"),(0,a._)("span",v,(0,o.zw)(pe.cartContent.total),1)])])])])]),(0,a._)("div",y,[k,(0,a._)("div",D,[(0,a.wy)((0,a._)("input",{type:"text",class:"form-control shadow-none","onUpdate:modelValue":t[0]||(t[0]=e=>pe.couponCode=e),placeholder:"請輸入優惠券代碼","aria-label":"Recipient's username"},null,512),[[n.nr,pe.couponCode]]),(0,a._)("button",{class:"btn btn-dark",type:"button",onClick:t[1]||(t[1]=(...e)=>ue.coupon&&ue.coupon(...e))}," 送出優惠券 ")])]),(0,a._)("div",x,[C,(0,a._)("table",M,[$,(0,a._)("tbody",null,[(0,a._)("tr",null,[T,(0,a._)("td",V,(0,o.zw)(pe.cartContent.total),1)]),pe.cartContent.total!==pe.cartContent.final_total?((0,a.wg)(),(0,a.iD)("tr",z,[(0,a._)("td",U,(0,o.zw)(pe.cartContent.carts[0].coupon.title),1),(0,a._)("td",P," -"+(0,o.zw)(pe.cartContent.total-pe.cartContent.final_total),1)])):(0,a.kq)("",!0),(0,a._)("tr",q,[O,(0,a._)("td",H,[(0,a.Uk)(" 總計:"),(0,a._)("span",S,(0,o.zw)(pe.cartContent.final_total),1)])])])])]),(0,a._)("form",F,[(0,a._)("div",L,[R,(0,a._)("div",Y,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(pe.date,(e=>((0,a.wg)(),(0,a.iD)("div",{class:"form-check col",key:e},[this.orderDate!==e?((0,a.wg)(),(0,a.iD)("label",{key:0,class:"form-check-label btn btn-outline-dark w-100",for:e},[(0,a.Uk)((0,o.zw)(e)+" ",1),(0,a.wy)((0,a._)("input",{class:"form-check-input d-none",type:"radio",name:pe.date,id:e,"onUpdate:modelValue":t[2]||(t[2]=e=>pe.orderDate=e),value:e,required:"",selected:e===this.orderDate},null,8,E),[[n.G2,pe.orderDate]]),K],8,Z)):(0,a.kq)("",!0),this.orderDate===e?((0,a.wg)(),(0,a.iD)("label",{key:1,class:"form-check-label btn btn-dark w-100",for:e},[(0,a.Uk)((0,o.zw)(e)+" ",1),(0,a.wy)((0,a._)("input",{class:"form-check-input d-none",type:"radio",name:pe.date,id:e,"onUpdate:modelValue":t[3]||(t[3]=e=>pe.orderDate=e),value:e,required:"",selected:e===this.orderDate},null,8,A),[[n.G2,pe.orderDate]]),I],8,j)):(0,a.kq)("",!0)])))),128))]),(0,a._)("div",B,[pe.firstDate===pe.orderDate?((0,a.wg)(),(0,a.iD)("div",G,[(0,a.wy)((0,a._)("select",{class:"form-select shadow-none","aria-label":"Default select example","onUpdate:modelValue":t[4]||(t[4]=e=>pe.orderTime=e),required:""},[W,((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(pe.timeOptionFirstDay,(e=>((0,a.wg)(),(0,a.iD)("option",{key:e.option,value:e.option,disabled:e.passed},(0,o.zw)(e.option),9,J)))),128)),N],512),[[n.bM,pe.orderTime]]),Q])):(0,a.kq)("",!0),pe.firstDate!==pe.orderDate?((0,a.wg)(),(0,a.iD)("div",X,[(0,a.wy)((0,a._)("select",{class:"form-select shadow-none","aria-label":"Default select example","onUpdate:modelValue":t[5]||(t[5]=e=>pe.orderTime=e),required:""},[ee,((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(pe.timeOptionOtherDay,(e=>((0,a.wg)(),(0,a.iD)("option",{key:e.option,value:e.option,disabled:e.passed},(0,o.zw)(e.option),9,te)))),128))],512),[[n.bM,pe.orderTime]]),se])):(0,a.kq)("",!0)])]),(0,a._)("div",ae,[oe,(0,a._)("label",ne,[(0,a.Uk)(" 取餐人姓名 "),(0,a.wy)((0,a._)("input",{type:"text",class:"form-control shadow-none mt-1","onUpdate:modelValue":t[6]||(t[6]=e=>pe.orderMessage.user.name=e),placeholder:"請輸入取餐人姓名","aria-label":"Recipient's username",required:""},null,512),[[n.nr,pe.orderMessage.user.name]]),ie]),(0,a._)("label",de,[(0,a.Uk)(" 取餐人連絡電話 "),(0,a.wy)((0,a._)("input",{type:"tel",class:"form-control shadow-none mt-1","onUpdate:modelValue":t[7]||(t[7]=e=>pe.orderMessage.user.tel=e),placeholder:"請輸入取餐人連絡電話","aria-label":"Recipient's username",required:""},null,512),[[n.nr,pe.orderMessage.user.tel]]),le]),(0,a._)("label",re,[(0,a.Uk)(" 備註訊息 "),(0,a.wy)((0,a._)("textarea",{class:"form-control shadow-none mt-1",cols:"30",rows:"5","onUpdate:modelValue":t[8]||(t[8]=e=>pe.orderMessage.message=e)},"\n              ",512),[[n.nr,pe.orderMessage.message]])])]),(0,a._)("div",ce,[(0,a._)("button",{class:"btn btn-lg btn-dark px-4",type:"button",onClick:t[9]||(t[9]=(...e)=>ue.formValidation&&ue.formValidation(...e))}," 送出訂單 ")])])])])])],64)}s(7658);var ue=s(6576),me=s(7759),he={data(){return{modal:{},date:[],couponCode:"",cartContent:{},orderDate:{},orderTime:"",orderMessage:{user:{name:"",email:"",tel:"",address:"自取"},message:""},firstDate:"",timeOptionFirstDay:[{option:"11:01 ~ 11:15",passed:!1},{option:"11:16 ~ 11:30",passed:!1},{option:"11:31 ~ 11:45",passed:!1},{option:"11:46 ~ 12:00",passed:!1},{option:"12:01 ~ 12:15",passed:!1},{option:"12:16 ~ 12:30",passed:!1},{option:"12:31 ~ 12:45",passed:!1},{option:"12:46 ~ 13:00",passed:!1},{option:"13:01 ~ 13:15",passed:!1},{option:"13:16 ~ 13:30",passed:!1},{option:"13:31 ~ 13:45",passed:!1},{option:"13:46 ~ 14:00",passed:!1},{option:"17:01 ~ 17:15",passed:!1},{option:"17:16 ~ 17:30",passed:!1},{option:"17:31 ~ 17:45",passed:!1},{option:"17:46 ~ 18:00",passed:!1},{option:"18:01 ~ 18:15",passed:!1},{option:"18:16 ~ 18:30",passed:!1},{option:"18:31 ~ 18:45",passed:!1},{option:"18:46 ~ 19:00",passed:!1},{option:"19:01 ~ 19:15",passed:!1},{option:"19:16 ~ 19:30",passed:!1},{option:"19:31 ~ 19:45",passed:!1},{option:"19:46 ~ 20:00",passed:!1},{option:"20:01 ~ 20:15",passed:!1},{option:"20:16 ~ 20:30",passed:!1},{option:"20:31 ~ 20:45",passed:!1},{option:"20:46 ~ 21:00",passed:!1}],timeOptionOtherDay:[{option:"11:01 ~ 11:15",passed:!1},{option:"11:16 ~ 11:30",passed:!1},{option:"11:31 ~ 11:45",passed:!1},{option:"11:46 ~ 12:00",passed:!1},{option:"12:01 ~ 12:15",passed:!1},{option:"12:16 ~ 12:30",passed:!1},{option:"12:31 ~ 12:45",passed:!1},{option:"12:46 ~ 13:00",passed:!1},{option:"13:01 ~ 13:15",passed:!1},{option:"13:16 ~ 13:30",passed:!1},{option:"13:31 ~ 13:45",passed:!1},{option:"13:46 ~ 14:00",passed:!1},{option:"17:01 ~ 17:15",passed:!1},{option:"17:16 ~ 17:30",passed:!1},{option:"17:31 ~ 17:45",passed:!1},{option:"17:46 ~ 18:00",passed:!1},{option:"18:01 ~ 18:15",passed:!1},{option:"18:16 ~ 18:30",passed:!1},{option:"18:31 ~ 18:45",passed:!1},{option:"18:46 ~ 19:00",passed:!1},{option:"19:01 ~ 19:15",passed:!1},{option:"19:16 ~ 19:30",passed:!1},{option:"19:31 ~ 19:45",passed:!1},{option:"19:46 ~ 20:00",passed:!1},{option:"20:01 ~ 20:15",passed:!1},{option:"20:16 ~ 20:30",passed:!1},{option:"20:31 ~ 20:45",passed:!1},{option:"20:46 ~ 21:00",passed:!1}],alreadyValidated:!1}},components:{LoadingPage:ue.Z,messageToast:me.Z},methods:{getCartContent(){this.$refs.loadingPage.loadingPageShow();const e="https://vue3-course-api.hexschool.io/api/chenshaoen/cart";this.axios.get(e).then((e=>{this.cartContent=e.data.data,this.cartContent.final_total=Math.floor(this.cartContent.final_total),this.$refs.loadingPage.loadingPageHide()}))},coupon(){this.$refs.loadingPage.loadingPageShow();const e="https://vue3-course-api.hexschool.io/api/chenshaoen/coupon",t={data:{code:`${this.couponCode}`}};this.axios.post(e,t).then((e=>{this.getCartContent(),this.$refs.loadingPage.loadingPageHide(),e.data.success?(this.toastMessage="已成功使用優惠代碼",this.$refs.messageToast.toastShow()):(this.toastMessage="優惠代碼輸入錯誤或已超過使用期限",this.$refs.messageToast.toastShow())}))},confirmOrder(){const e={data:{user:{name:`${this.orderMessage.user.name}`,email:`${this.orderDate}/${this.orderTime}`,tel:`${this.orderMessage.user.tel}`,address:"自取"},message:`${this.orderMessage.message}`}},t="https://vue3-course-api.hexschool.io/api/chenshaoen/order";this.axios.post(t,e).then((e=>{this.$router.push(`/orderbuilt/${e.data.orderId}`)}))},formValidation(){let e=!0;const t=()=>{!1===this.alreadyValidated&&this.confirmOrder(),this.alreadyValidated=!0},s=document.querySelectorAll(".needs-validation");Array.from(s).forEach((s=>{s.addEventListener("click",(a=>{s.checkValidity()?s.checkValidity()&&!0===e&&t():(e=!1,a.preventDefault(),a.stopPropagation()),s.classList.add("was-validated")}),!1)}))}},created(){window.scrollTo({top:0,behavior:"smooth"})},mounted(){const e=new Date;for(let a=1;a<=5;a+=1){const t=new Date;t.setTime(e.getTime()+864e5*(a-1));const s=`${t.getMonth()+1}/${t.getDate()}`;this.date.push(s),1===a&&(this.orderDate=`${t.getMonth()+1}/${t.getDate()}`,this.firstDate=`${t.getMonth()+1}/${t.getDate()}`)}const t=new Date;t.setTime(e.getTime()),t.setHours(11),t.setMinutes(0),t.setSeconds(0);const s=Math.floor((e.getTime()-t.getTime())/9e5);for(let a=1;a<=s;a+=1)a<=12?(this.timeOptionFirstDay[a-1].passed=!0,console.log(a,this.timeOptionFirstDay[a-1])):a>=25&&a<=40&&(this.timeOptionFirstDay[a-13].passed=!0,console.log(this.timeOptionFirstDay[a-13]));this.getCartContent()}},ge=s(89);const fe=(0,ge.Z)(he,[["render",pe]]);var _e=fe}}]);
//# sourceMappingURL=852.73ebe28f.js.map