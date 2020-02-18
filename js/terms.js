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
            "welcome":" مرحبًا بكم في  For All App عن طريق إدخال موقعنا ، أنت توافق على هذه الشروط والأحكام. يرجى مراجعة هذه بعناية قبل إجراء أي عمليات شراء. باستخدام هذا الموقع فإنك توافق على هذه الشروط. ",
            "tearm-1":"ستحل هذه الشروط محل أي شروط و / أو شروط حيث يحتفظ الدليل السهل بالحق في إجراء تغييرات على هذا الموقع وهذه الشروط في أي وقت.",
            "tearm-2":"For All App هي خدمة عبر الإنترنت لغرض بيع الملابس والاكسسوارات وغيرها.",
            "tearm-3":"لتتمكن من إجراء عمليات الشراء من خلال الموقع الإلكتروني ، سيُطلب منك التسجيل. ستسمح المعلومات المطلوبة لـ  For All App بمعالجة معاملتك بكفاءة وفعالية.",
            "tearm-4":"يخضع أي نزاع أو مطالبة تنشأ عن أو فيما يتعلق بهذا الموقع الإلكتروني وتفسيره وفقًا لقوانين دولة جمهورية مصر العربية.",
            "tearm-5":"دولة  جمهورية مصر العربية هي موطننا.",
            "tearm-21":"يُحظر على القاصرين الذين تقل أعمارهم عن 18 عامًا التسجيل كمستخدم لهذا الموقع ولا يُسمح لهم بالتعامل أو استخدام الموقع.",
            "tearm-6":"ذا قمت بالدفع مقابل منتجاتنا أو خدماتنا على موقعنا ، فسيتم تقديم التفاصيل التي يُطلب منك تقديمها مباشرة إلى مزود الدفع الخاص بنا عبر اتصال آمن.",
            "tearm-7":"يجب أن يحتفظ حامل البطاقة بنسخة من سجلات المعاملات وسياسات وقواعد تاجر. نحن نقبل الدفع عبر الإنترنت باستخدام بطاقة الائتمان / الخصم  الفيز او الماستر كارد بالدولار (أو أي عملة أخرى متفق عليها).",
            "tearm-8":"موقع For All App لن يتعامل أو يقدم أي خدمات أو منتجات إلى أي من بلدان مكتب مراقبة الأصول الأجنبي وفقًا لقانون دولة جمهورية مصر العربية.                                                                                                          .",
            "tearm-9":"قد تؤدي المعاملات المتعددة إلى ترحيلات متعددة للبيان الشهري لحامل البطاقة.", 
            "tearm-10":"إذا كان سيتم الدفع عبر الإنترنت - من المهم أن تقوم بإدخال جميع المعلومات المطلوبة بدقة. ", 
            "tearm-11":"سيضمن ذلك عدم وجود تأخير في إرسال طلبك. سيتم التعامل مع المعلومات المقدمة بسرية تامة. نحن لا نشارك أي بيانات العملاء إلى أي أطراف ثالثة وجميع بيانات العملاء يتم الاحتفاظ بها على خادم آمن.", 
            "tearm-12":"طرق الدفع لا تقبل For All App سوى الدفع عن طريق بطاقة الائتمان أو الخصم ( الفيز او الماستر كارد) ، عن طريق الدفع نقدًا عند التسليم. الدفع عن طريق بطاقة الائتمان أو الخصم", 
            "tearm-13":"يقبل For All App مدفوعات المشتريات التي تتم عبر موقعه الإلكتروني ببطاقات الائتمان أو الخصم التالية:الفيز او        الماستر كارد.",
            "tearm-14":"بالنسبة للمدفوعات عن طريق بطاقة الائتمان أو الخصم ، سيتم دفع الرسوم عبر الإنترنت ، بمعنى آخر ، في الوقت الفعلي ، من خلال بوابة الدفع للكيان المالي المقابل ، بمجرد تأكيد صحة البيانات المرسلة من قبل المستخدم.",
            "tearm-15":"For All App يقبل المدفوعات النقدية عند التسليم. يجب على العملاء دفع المبلغ المقابل لطلبهم عند استقباله.",
            "tearm-16":"مستحضرات التجميل ومستحضرات التجميل - يجب استخدام جميع المنتجات بدقة وفقًا لتعليماتهم واحتياطاتهم وإرشاداتهم. يجب عليك دائمًا التحقق من مكونات المنتجات لتجنب الحساسية المحتملة.",
    "tearm-22":"لا يمكن إرجاع العناصر التالية أو استبدالها بسبب أسباب صحية:",
            "tearm-17":"ملابس",
            "tearm-18":"ملابس سفلية",
            "tearm-19":"ملابس سباحة وبحر",
            "tearm-20":" حمالة الصدر الرياضية",
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
            "welcome":" Welcome to For All App. By entering our Website, you agree to these terms and conditions. Please review these carefully prior to making any purchases. By using this Website you agree with these Terms. ",
            "tearm-1":"These conditions will replace any terms and/or conditions as For All App reserves the right to make changes to this site and these conditions at any time.",
            "tearm-2":"For All is an online service for the purpose of the sale of clothing, accessories and other items.",
            "tearm-3":"In order to be able to make purchases through the Website, you will be requested to register. The information sought will allow For All to handle your transaction efficiently and effectively.",
            "tearm-4":"Any dispute or claim arising out of or in connection with this website shall be governed and construed in accordance with the laws of EGYPT.",
            "tearm-5":"EGYPT is our country of domicile. Minors under the age of 18 shall are prohibited to register as a User of this website and are not allowed to transact or use the website.",
            "tearm-6":"If you make a payment for our products or services on our website, the details you are asked to submit will be provided directly to our payment provider via a secured connection.",
            "tearm-7":"The cardholder must retain a copy of transaction records and Merchant policies and rules. We accept payments online using Visa and MasterCard credit/debit card in AED (or any other agreed currency).",
            "tearm-8":"For All App will NOT deal or provide any services or products to any of OFAC (Office of Foreign Assets Control) sanctions countries in accordance with the law of EGYPT.",
            "tearm-9":"Multiple transactions may result in multiple postings to the cardholder’s monthly statement.", 
            "tearm-10":"IF PAYMENT WILL BE MADE ONLINE - it is important that you enter all the requested information accurately. This will ensure that there is no delay in the dispatch of your order. The information provided will be treated in the strictest confidence. We do not share any customer data to any third parties and all customer data is held on a secure server", 
            "tearm-11":"PAYMENT METHODS - For All only accepts payment by credit or debit card (Visa and MasterCard), via cash on delivery.", 
            "tearm-12":"Payment by credit or debit card For All accepts payments for purchases made via its Website with the following credit or debit cards: Visa and MasterCard.", 
            "tearm-13":"For payments by credit or debit card, the charge will be made online, in other words, in real time, through the payment gateway of the corresponding financial entity, once it has been confirmed that the data sent by the user is correct.",
            "tearm-14":"Cash on delivery For All accepts payments cash on delivery.  Customers must pay their order's corresponding amount on the reception of the same.",
            "tearm-15":"MAKEUP & COSMETICS - All products should be used strictly in accordance with their instructions, precautions and guidelines. You should always check the ingredients for products to avoid potential allergic reactions.",
            "tearm-16":"THE FOLLOWING ITEMS CANNOT BE RETURNED OR EXCHANGED DUE TO HYGIENIC REASONS:",
            "tearm-17":"Lingerie",
            "tearm-18":"Undergarments",
            "tearm-19":"Swimwear and Beachwear",
            "tearm-20":"Sportswear Bra",
    
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