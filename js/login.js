var changeDirectonBtn=document.getElementById("change-direction");
window.addEventListener('load',getLocalStorage);
var elementFloatleft=document.querySelectorAll(".ml-auto ,.float-left");
var elementTxtAlign=document.querySelectorAll(".text-left")
var elementFloatRight=document.querySelectorAll(".float-right")
// console.log(elementFloatleft)
var dataArabic={
            "sign":"تسجيل",
            "Username":"الاسم",
            "Login":"تسجيل",
            "RememberMe":"تذكرني",
            "ForgetPassword":"نسيت كلمة المرور",
            "Password":"كلمة السر",
            "Chooce Category":"اختار القسم",
            "Booking":"الحجوزات",
            "Online Mall":"المتاجر الالكترونية",
            "Online Shopping":"التسويق الالكتروني",
            "Delievery":"التوصيل",
            "Transportation":"التنقل",
            "Medical":"طبي",
            "Requirements":"التوظيف",
                    }
var dataEnglish={
            "sign":"Sign In",
            "Username":"Username",
            "Login":"Login",
            "RememberMe":"RememberMe",
            "ForgetPassword":"ForgetPassword",
            "Password":"Password",
            "Chooce Category":"Chooce Category",
            "Booking":"Booking",
            "Online Mall":"Online Mall",
            "Online Shopping":"Online Shopping",
            "Delievery":"Delievery",
            "Transportation":"Transportation",
            "Medical":"Medical",
            "Requirements":"Requirements",
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