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
            "tit-services":"الخدمات",
            "all":"خدماتنا",
            "ser-online":"التسوق الكتروني",
            "te-online":"التسوق عبر الإنترنت هو شكل من أشكال التجارة الإلكترونية",
            "sub-services":"خدماتنا",
            "auction":"المزاد",
            "booking":"الحجوزات",
            "cap-services":"الركاب",
            "text-auction":"هو المزاد الذي يعقد عبر الإنترنت",
            "text-book":" حجوزات - فنادق - طيران - مطاعم - صوالين وسبا - حجوزات السيارات - حجوزات اليخوت - حجوزات اخري ",
            "text-cap":"السيارة المتصلة هي سيارة مزودة بإمكانية الوصول إلى الإنترنت.",
            "hr":"التوظيف",
            "text-hr":"يشير توظيف الموارد البشرية إلى العملية الشاملة لجذب المرشحين المختارين لشغل الوظائف وتحديد قائمة مختصرة لهم واختيارهم وتعيينهم",
            "delivery":"التوصيل",
            "text-delivery":"التسليم هو عملية نقل البضائع من موقع المصدر.",
            "ser-medical":"Medical",
            "te-medical":"ملف الطبي - حجز الدكتور و طلب أدوية من الصيدلية ",
            "cilent":"بعض عملأنا",
//            "text1":"هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي القارئ عن التركيز على الشكل الخارجي للنص أو شكل توضع الفقرات في الصفحة التي يقرأها",
//            "text2":"هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي القارئ عن التركيز على الشكل الخارجي للنص أو شكل توضع الفقرات في الصفحة التي يقرأها",
//            "text3":"هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي القارئ عن التركيز على الشكل الخارجي للنص أو شكل توضع الفقرات في الصفحة التي يقرأها",
//            "text4":"هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي القارئ عن التركيز على الشكل الخارجي للنص أو شكل توضع الفقرات في الصفحة التي يقرأها",
//            "tit-carsou":"McLaren",
            "SaudiArabia":"السعودية",
            "UnitedArabEmirates":"الامارات العربية المتحدة ",
            "Egypt":"مصر",
            "MeetOur":" تعرف علي فريقنا",
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
                    }
var dataEnglish={
            "subcribe":"Subcribe",
            "Loginfa":"Login FA",
            "Loginstore":"Login Store",
            "tit-services":"Our Services",
            "all":"All services",
            "ser-online":"Online Shopping",
            "sub-services":"Our Services",
            "te-online":"Online shopping is a form of electronic commerce",
            "auction":"Auction",
            "booking":"Booking",
            "cap-services":"Cap Services",
            "text-auction":"Is an auction which is held over the internet",
            "text-book":"Reservations - Hotels - Aviation - Restaurants - Salons and Spa - Car reservations - Yacht reservations - Other reservations",
            "text-cap":"A connected car is a car that is equipped with Internet access.",
            "hr":"HR",
            "text-hr":"HR Recruitment refers to the overall process of attracting, shortlisting, selecting and appointing suitable candidates for jobs",
            "delivery":"Delivery",
            "text-delivery":"Delivery is the process of transporting goods from a source location.",
            "ser-medical":"Medical",
            "te-medical":"Medical file - Book a doctor and Order medicines from the pharmacy",
            "cilent":"Some Clients",
//            "text1":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, ",
//            "text2":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, ",
//            "text3":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, ",
//            "text4":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, ",
//            "tit-carsou":"McLaren",
            "SaudiArabia":"Saudi Arabia",
            "UnitedArabEmirates":"United Arab Emirates",
            "Egypt":"Egypt",
            "MeetOur":"Meet Our Awesome Team",
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
//        ele.setAttribute("style","top: 85%;left: 90%;")
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