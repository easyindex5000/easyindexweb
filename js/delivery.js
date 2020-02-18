var changeDirectonBtn=document.getElementById("change-direction");
window.addEventListener('load',getLocalStorage);
var elementFloatleft=document.querySelectorAll(".ml-auto ,.float-left");
var elementTxtAlign=document.querySelectorAll(".text-left")
var elementFloatRight=document.querySelectorAll(".float-right")
// console.log(elementFloatleft)
var dataArabic={
            "subcribe":"إعلانات",
            "Loginfa":"تسجيل الدخول",
            "Loginstore":"تسجيل دخول الموظفيين",
            "head":"المقر الرئيسي : جده حي الشاطئ السعودية",
            "head1":"فرع الامارات: ابراج الامارات دبي",
            "head3":"فرع مصر : 9 شارع دكتور احمد السيد سيدي جابر , الاسكندرية",
            "keep":"للتواصل معنا",
            "Support":"الدعم",
            "Delivery":"التوصيل",
            "Returns":"الاسترجاع",
            "FAQ's":"أسئلة وأجوبة",
            "TermsandConditions":"القوانين واللوائح",
            "Privacy Policy":"سياسة خاصة",
            "question":"هل لديك أسئلة ؟",
            "Submit":"إرسال", 
            "UserName":"الاسم :",
            "Email":"الايميل :",
            "Message":"رسالتك :",
            "deliveee":"سياسة التسليم / الشحن:", 
            "deli-one":"سيتم تنفيذ تسليم العناصر المشترة على موقع For All App عبر شركة شحن دولية وتسلم خلال 15 يوم عمل على الأقل.",
            "deli-two":"لتجنب أي مشاكل في التسليم (عناوين غير صحيحة ، لا أحد في المنزل ، وما إلى ذلك) ، يجب عليك ملء النموذج المطبق بشكل صحيح ومن المستحسن ترك رقم هاتف جهة الاتصال في الحقل المقابل.",
            "deli-thr":"يمكن تتبع الطلبات عبر For All App والتي تشير إلى موقع البضائع في كل لحظة حتى الاستقبال النهائي. ",
            "deli-four":"الدفع عند التسليم ، يرجى الحصول على المبلغ الدقيق المتاح للبريد السريع. سوف توفر عليك الوقت.",
            "deli-five":"لأية استفسارات حول التوصيل يرجى الاتصال بنا على 966548055570+ خلال ساعات العمل المعتادة (من السبت إلى الخميس ، من الساعة 09:00 صباحًا إلى 6:00 مساءً بتوقيت مصر ).",
                    }
var dataEnglish={
            "subcribe":"Subcribe",
            "Loginfa":"Login FA",
            "Loginstore":"Login Store",
            "head":"Head Office : El Shatee , Jeddah Saudi Arabia",
            "head1":"UAE Office : Emirates Towers, Dubai",
            "head3":"Egypt Office : 9 Dr.Ahmed Elsayed Sidi Gabr, Alexandria",
            "keep":"Keep IN Touch",
            "Support":"Support",
            "Delivery":"Delivery",
            "Returns":"Returns",
            "FAQ's":"FAQ's",
            "TermsandConditions":"Terms and Conditions",
            "Privacy Policy":"Privacy Policy",
            "question":"Have a question?",
            "Submit":"Submit",
    "UserName":"UserName:",
    "Email":"Email:",
    "Message":"Message:",
    "deliveee":"DELIVERY/SHIPMENT POLICY:",
    "deli-one":"Delivery of items purchased at For All App will be carried out via an international courier company and delivered minimum 15 working days. ",
"deli-two":"In order to avoid any delivery problems (incorrect addresses, nobody at home, etc.), you must complete the applicable form correctly and it is advisable to leave a contact telephone number in the corresponding field.",
    "deli-thr":"Orders can be tracked via the, For All App Webpage, indicating the location of the goods at each moment until final reception.",
    "deli-four":"For Cash on Delivery, please have the exact amount available for the courier. It will save you time.",
    "deli-five":"For any questions, please call us +966548055570 during our regular working hours (Saturday to Thursday, 09:00am-6:00pm EGYPT Time).",
        }     
changeDirectonBtn.addEventListener('click',choiseContent);
function choiseContent(){
    console.log("click")
    var contentBtn=this.className;//e.target===this
    var ele=this;
    choiseLang(contentBtn,ele)
}
function choiseLang(contentBtn,ele){
    if(contentBtn=="English"){
        changeContent(ele,"العربيه","ltr",dataEnglish,contentBtn);
        ele.setAttribute("style","top: 85%;left: 90%;")
        loopArray(elementFloatleft,"mr-auto","ml-auto")
        loopArray(elementFloatleft,"float-right","float-left")
        loopArray(elementFloatRight,"float-left","float-right")
        loopArray(elementTxtAlign,"text-right","text-left")
    }
    else if(contentBtn=="العربيه"){
        changeContent(ele,"English","rtl",dataArabic,contentBtn);
        ele.setAttribute("style","top: 85%;left: 2%;")
        loopArray(elementFloatleft,"ml-auto","mr-auto")
        loopArray(elementFloatleft,"float-left","float-right")
        loopArray(elementFloatRight,"float-right","float-left")
        loopArray(elementTxtAlign,"text-left","text-right")
    }
}
function changeContent(element,lang,direction,objData,classBtn){
    element.innerText=lang;
    element.className=lang;
    document.querySelector("html").setAttribute("dir",direction);
    localStorage.setItem("Btn",lang);
    localStorage.setItem("ClassButton",classBtn);
    for(param in objData){
      document.getElementById(param).innerText=objData[param]  
    }
}
function getLocalStorage(){
    if(localStorage.getItem("Btn")&&localStorage.getItem("ClassButton")){
        console.log("true")
        choiseLang(localStorage.getItem("ClassButton"),changeDirectonBtn);
    }else{
        console.log("false")
        choiseLang(changeDirectonBtn.className,changeDirectonBtn);
    }
}
function loopArray(elements,remove,add){
    elements.forEach((element,index) => {
        classAddAndRemove(element,remove,add)
        console.log(index,element)
    })
}
function classAddAndRemove(ele,remove,add){
    ele.classList.remove(remove);
    ele.classList.add(add);
}