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
            "faq-1":"من يمكنه الشراء من For All App.؟",
            "qu1":"ج. أي فرد يبلغ من العمر 18 عامًا ويسمح له قانونًا بالتسوق في جمهورية مصر العربية يمكنه التسوق في الموقع. إنهم بحاجة إلى  امتلاك بطاقة ائتمان / خصم صالحة (فيزا او مستر كارد) صادرة عن مصرف مرخص",
            "faq-2":"س: كم من الوقت يستغرق لاستلام طلبي؟",   
            "qu2":"سنقوم بتسليم البنود الخاصة بك على الأقل 15 يوم عمل. يمكنك تتبع حالة طلبك في أي وقت في طلبي في قسم حسابي. إذا لم تكن مسجلاً في For All App يمكنك الوصول مباشرة إلى قسم الطلبات. في هذه الحالة ، سيكون عليك إدخال عنوان البريد الإلكتروني ورقم الطلب.",
            "faq-3":"س: كيف يمكنني إجراء الدفع؟",    
            "qu3":". يمكنك الاختيار من بين طرق الدفع المختلفة مثل بطاقات الخصم / الائتمان (فيزا او ماستر كارد) والنقد عند التسليم إذا كنت تفضل إجراء الدفع عند تسليم طلبك إلى عنوان منزلك ، حدد طريقة الدفع عند الاستلام والنقر فوق  تأكيد الدفع. لطلبات الدفع عند الاستلام ، يرجى الحصول على المبلغ الدقيق المتاح للبريد السري",
            "faq-4":"س. ما الذي يمكن القيام به إذا تم اختراق بطاقة الخصم / الائتمان الخاصة بي أثناء إجراء الدفع عبر الإنترنت؟",   
            "qu4":"يرجى الرجوع إلى سياسة الخصوصية الخاصة بنا ، والتي تذكر أن جميع التفاصيل الشخصية التي تقدمها لنا يتم التعامل معها في سرية تامة. إذا كنت تعتقد أن بطاقتك الائتمانية قد تعرض للاختراق ، فقم بإبلاغ البنك المصدر للبطاقة على الفور.",
            "faq-5":"س: ماذا أفعل إذا لم أكن راضيًا عن المنتج الذي تلقيته؟",
            "qu5":"ج. ندرك أنه قد تكون هناك أوقات تريد فيها إرجاع شيء اشتريته ونحن هنا لمساعدتك. يرجى التأكد من الاتصال بنا في غضون 3 أيام من يوم تسليم طلبك. بعد 3 أيام ، لن نقبل أي عائدات. تأكد من أن العنصر موجود في عبوته الأصلية ، وغير ملبوس وفي نفس الحالة تلقيته.",
             "faq-6":"س: هل يمكنني إرجاع أو استبدال منتج عن طريق البريد أو البريد السريع؟",
                "qu6":"ج: نعم ، هذا ممكن ، سوف تحتاج إلى الاتصال بممثل خدمة العملاء لدينا وتسجيل طلبك. بعد أن نتلقى طلبك ، سوف نتصل بك ونوضح عملية إرجاع المنتج عبر البريد السريع.",
             "faq-7":"س: هل يمكنني إرجاع العنصر إذا فقدت العبوة الأصلية؟",
            "qu7":". نحن نقبل إعادة العنصر فقط إذا كان في المربع الأصلي و / أو التعبئة سليمة مع جميع التسميات والباركود على ذلك ، ولكن في هذه الحالة ، يرجى الاتصال بفريق خدمة العملاء ",
             "faq-8":"س: كيف يمكنني الحصول على رد على بطاقة الائتمان / الخصم الخاصة بي؟؟",
            "qu8":"ج. تلك الطلبات الموضوعة بواسطة بطاقة الائتمان / الخصم ، ثم سيتم رد الدفعة إلى بطاقتك ، ولكن وفقًا لمتطلبات البنك الفردية ، قد يستغرق المبلغ ما يصل إلى شهر للتفكير في كشف حساب بطاقتك.",
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
            "faq-1":"Q. Who can buy from For All App?",
            "qu1":"A. Any individual 18 years of age and legally allowed to shop in EGYPT can shop at For All. They need to possess a valid credit / debit card (VISA/MASTERCARD) issued by an authorized bank.",
            "faq-2":"Q. How long does it take to receive my order ?",   
            "qu2":"A. We will deliver your items minimum 15 working days. You can track the status of your order at any time in My orders in the My account section. If you are not registered at For All, you can access directly in the Orders section. In this case, you will have to enter your e-mail address and order number.",
            "faq-3":"Q. What can be done if my debit/credit card has been compromised while making a payment online ?",    
            "qu3":"A. Please refer our privacy policy, which mentions that all personal details you provide to us are dealt with in the strictest confidentiality. If you think that your credit card has been compromised, then immediately report the same to your card issuing bank",
            "faq-4":"Q. What should I do if I am not satisfied with the product I received ?",   
            "qu4":"A. We understand that there may be times when you want to return something you’ve bought and we are here to help you out .Please make sure to contact us within 3 Days from the day your order is delivered. After 3 days, we will not accept any returns. Ensure that the item is in its original packaging, unworn and in the same condition you received it.",
            "faq-5":"Q. Can I return or exchange a product by mail or courier ?",
                "qu5":"A. Yes, this is possible, you will need to call our Customer Service Representative and register your request. After we receive your request, we would get in touch with you and explain the process of returning the product through courier",
             "faq-6":"Q. Can I still return the item if I lost the original packing ?",
                "qu6":"A. We accept the return of item only if it is in the original box and/or packaging intact with all labels and barcodes on it, however in this case, please contact our CUSTOMER SERVICE TEAM.",
             "faq-7":"Q. How can I receive REFUND on my credit/debit card ?",
                "qu7":"A. Those order placed by credit/debit card, then the Payment would be refunded to your card, but depending on the individual’s bank requirements, the amount may take up to a month to reflect on your card statement.",
    
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