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
             "impor":" ملاحظة هامة:",
            "ret-one":" لن يتم استرداد الأموال إلا من خلال طريقة الدفع الأصلية.",
            "ret-two":" سوف تكون مسؤولاً عن دفع تكاليف الشحن الخاصة بك للعودة البند الخاص بك. تكاليف الشحن غير قابلة للاسترداد. إذا تلقيت استرداد ، سيتم خصم تكلفة إعادة الشحن من المبلغ المسترد.",
            "ret-thr":"نحن لا نقبل أي عائد من العناصر التي يتم شراؤها من أي ترويج أو بيع. نحن نقبل فقط العناصر التي ليست في الترويج.",
            "ret-four":" لديك 15 يومًا تقويميًا لإرجاع عنصر من التاريخ الذي تلقيته فيه.",
            "ret-five":" إذا كنت لا تحب المنتج أو جودته أو غيرت رأيك:",
            "ret-si":" إذا كنت لا تحب المنتج أو جودته أو إذا غيرت رأيك بشأن أي منتج أو طلب كامل ، في هذه الحالة ، سوف تحتاج إلى دفع رسوم الشحن للتحصيل لكلا الجانبين حتى لو كان التسليم مجانيًا .",
            "ret-se":" إذا كنت ترغب في استبدال العنصر الخاص بك لطراز أو لون آخر ، فيجب عليك إعادة العنصر ووضع طلب جديد.",
            "ret-ei":"يتم تعبئة المنتجات الأساسية المنزلية من قبل الشركات المصنعة بعد الفحص الكامل للجودة والأضرار. لن يتم قبول المنتجات التي تم فتحها / تثبيتها / تفكيكها للحصول على عوائد لأنه لا يمكن إعادة تعبئتها.",
            "ret-te":" لتكون مؤهلاً للحصول على عائد ، يجب إلغاء استخدام العنصر الخاص بك وفي نفس الحالة التي حصلت عليها. إذا كانت حالة البند المرتجعة غير قابلة للإلغاء ، فنحن نستحق الحق في رد المبلغ إليك. أي تكلفة إضافية حدثت بما في ذلك رسوم الشحن ستكون على جانبكم." ,
            "ret-el":" العنصر التالف ، عنصر خاطئ أو العناصر المفقودة بالترتيب:",
            "ret-twe":"إذا تلقيت طلبًا يحتوي على أي عنصر خاطئ أو تالف أو كان العنصر الذي طلبته مفقودًا ، فيرجى إخبارنا بذلك في أقرب وقت ممكن خلال 3 أيام إلى خط مساعدة خدمة العملاء لدينا.",
            "ret-tt":" سنرتب ساعيًا لاستلام القطعة التالفة أو الخاطئة وبمجرد استلامها ، سيقوم فريق المستودعات التابع لنا بفحصها. بعد التفتيش على العنصر التالف أو الخطأ ، سوف نرسل لك بديل وفقا لذلك. نفس الشيء بالنسبة للعناصر المفقودة أيضًا.",
            "ret-ttt":"المنتجات / أوامر التي لا يمكن إرجاعها:",
            "ret-tttt":" في حالة فقد تعبئة العنصر أو المنتج ، في هذه الحالة ، لن يتم إرجاع الطلب. او لا يمكن إرجاع الملابس الداخلية أو الملابس الداخلية أو ملابس السباحة أو ملابس السباحة أو الماكياج لأسباب صحية.",
            "ret-ttttt":" لن يتم اعتبار المنتج المُستخدم / الذي تم تجديده أو به علامات مكسورة / تمت إزالته ، كما لو كان المنتج متسخًا."
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
            "impor":" IMPORTANT  NOTICE : ",
            "ret-one":"Refunds will be done only through the Original Mode of Payment.",
            "ret-two":"You will be responsible for paying for your own shipping costs for returning your item. Shipping costs are non-refundable. If you receive a refund, the cost of return shipping will be deducted from your refund.",
            "ret-thr":"We do not accept any return from the items which are purchased from any Promotion or Sale. We will only accept the items which are not in the promotion.",
            "ret-four":"You have 15 calendar days to return an item from the date you received it. ",
            "ret-five":"If you don't like the Product OR its Quality OR Changed Your Mind.",
            "ret-si":"If you wish to exchange your item for another model or color, you must return the item and place a new order.",
            "ret-se":"Home Essential Products are packed by manufacturers after the complete quality and damage check. Opened / Installed / Dismantled products will not be accepted for returns because they cannot be repacked",
            "ret-ei":"To be eligible for a return, your item must be unused and in the same condition that you received it. If the condition of the return item is unsellable, we deserve the right no to refund you. Any extra cost occurred including shipping fee will be on your side.",
            "ret-te":"Damaged Item, Wrong Item or Missing Items in Order." ,
            "ret-el":"If you receive an order with any wrong, damaged item or your ordered item is missing, kindly inform us at your earliest within 3 Days to our Customer Service Helpline.",
            "ret-twe":"We will arrange a courier to pick up the damaged or wrong item and once it received, our warehouse team will inspect. After inspection of the damaged or wrong item, we will send you the replacement accordingly. Same for the Missing items as well.",
            "ret-tt":"Products / Orders which cannot be returned.",
            "ret-ttt":"If the packing of the item or product is missing, in that case, the order will not be returned.",
            "ret-tttt":"Lingerie’s, Undergarments, Swimwear, Beachwear or Makeup items cannot be returned due to hygienic reasons.",
            "ret-ttttt":"Used/Reconditioned product or with Broken/Removed tags will not be considered for return as well as if the product is found dirty."
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