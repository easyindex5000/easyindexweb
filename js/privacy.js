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
            "tit-privacy":"جمع معلومات محددة:",
            "pri-1":"نقوم بجمع معلومات منك عند التسجيل على موقعنا أو حجز طبيب أو الاشتراك في نشرتنا الإخبارية.",
            "pri-2":"عند الحجز أو التسجيل على موقعنا ، حسب الاقتضاء ، قد يُطلب منك إدخال اسمك أو عنوان بريدك الإلكتروني أو عنوانك البريدي أو رقم هاتفك.",
            "headd-1":"الإفصاح عن الإعلان عن عرض جوجل:",
            "pri-3":"نحن نطبق ميزات Google Analytics التي تستخدم معلومات الإعلانات المصوّرة في التحليلات السكانية وتقارير الاهتمامات في Google Analytics.",
            "pri-4":"يمكنك إلغاء الاشتراك في Google Analytics للإعلانات المصوّرة ، لمنع استخدام بياناتك بواسطة Google Analytics ، بالانتقال إلى صفحة إلغاء الاشتراك في Google Analytics. (إليك الرابط:",
            "pri-5":"نحن ، مع موردي الطرف الثالث (بما في ذلك Google) ، نستخدم ملفات تعريف ارتباط الطرف الأول (مثل ملفات تعريف الارتباط في Google Analytics) وملفات تعريف ارتباط الطرف الثالث (مثل ملفات تعريف الارتباط من DoubleClick) للإبلاغ عن كيفية ظهور إعلاناتك والاستخدامات الأخرى لخدمات الإعلانات والتفاعلات مع ظهور الإعلان هذه والخدمات الإعلانية مرتبطة بزيارات إلى موقعنا. يمكنك قراءة المزيد حول ملفات تعريف الارتباط التي تستخدمها ميزات الإعلان في Google Analytics ، بالانتقال إلى صفحة سياسة خصوصية Google Analytics. (إليك الرابط:",
            "headd-2":"استخدامات محددة من المعلومات",
            "pri-6":"يمكن استخدام أي من المعلومات التي نجمعها منك بأحد الطرق التالية:",
            "pri-7":"لتخصيص تجربتك (تساعدنا معلوماتك على الاستجابة بشكل أفضل لاحتياجاتك الفردية)",
            "pri-8":"لمعالجة المعاملات (لن يتم بيع أو تبادل أو نقل أو تسليم معلوماتك ، سواء كانت عامة أو خاصة ، إلى أي شركة أخرى لأي سبب من الأسباب ، دون موافقتك ، بخلاف الغرض الصريح المتمثل في تسليم المنتج أو الخدمة التي تم شراؤها ).",
            "pri-9":"لإرسال رسائل بريد إلكتروني دورية (عنوان البريد الإلكتروني الذي توفره للحجز ، قد يتم استخدامه لإرسال المعلومات والتحديثات المتعلقة بحجزك ، بالإضافة إلى تلقي أخبار الشركة أو تحديثاتها أو معلومات المنتج أو الخدمة ذات الصلة ، إلخ.)",
            "pri-10":"ملاحظة: إذا كنت ترغب في أي وقت في إلغاء الاشتراك في تلقي رسائل البريد الإلكتروني في المستقبل ، فإننا نضمن إرشادات مفصلة لإلغاء الاشتراك في أسفل كل بريد إلكتروني.",
            "headd-3":"حماية المعلومات الخاصة بك",
            "pri-11":"ننفذ مجموعة متنوعة من التدابير الأمنية للحفاظ على سلامة معلوماتك الشخصية عند إجراء الحجز أو إدخال أو إرسال أو الوصول إلى معلوماتك الشخصية.",
            "pri-12":"نحن نقدم استخدام خادم آمن. يتم إرسال جميع المعلومات الحساسة / الائتمانية التي يتم توفيرها عبر تقنية Secure Socket Layer (SSL) ثم يتم تشفيرها في قاعدة بيانات موفري بوابة الدفع الخاصة بنا فقط للوصول إليها من قبل أولئك المرخص لهم بحقوق وصول خاصة إلى هذه الأنظمة ، ويلزمون الحفاظ على سرية المعلومات.",
            "pri-13":"بعد المعاملة ، لن يتم تخزين معلوماتك الخاصة (بطاقات الائتمان وأرقام الضمان الاجتماعي والبيانات المالية وما إلى ذلك) على خوادمنا.",
            "headd-4":"سياسة استخدام ملفات تعريف الارتباط",
            "pri-14":"ملفات تعريف الارتباط هي ملفات صغيرة ينقلها أحد المواقع أو موفر الخدمة الخاص به إلى القرص الصلب لجهاز الكمبيوتر الخاص بك من خلال متصفح الويب الخاص بك (إذا سمحت بذلك) التي تمكن المواقع أو أنظمة موفري الخدمة من التعرف على المستعرض الخاص بك والتقاط وتذكر بعض المعلومات",
            "pri-15":"إذا كنت تفضل ذلك ، فيمكنك اختيار جعل جهاز الكمبيوتر الخاص بك يحذرك في كل مرة يتم فيها إرسال ملف تعريف ارتباط ، أو يمكنك اختيار إيقاف تشغيل جميع ملفات تعريف الارتباط عبر إعدادات المتصفح. مثل معظم مواقع الويب ، إذا قمت بإيقاف تشغيل ملفات تعريف الارتباط ، فقد لا تعمل بعض خدماتنا بشكل صحيح.",
            "headd-5":"عدم الكشف عن المعلومات لأطراف أخرى",
            "pri-16":"نحن لا نبيع أو نتاجر أو ننقل معلوماتك الشخصية إلى أطراف خارجية. لا يشمل ذلك الأطراف الثالثة الموثوقة التي تساعدنا في تشغيل موقعنا ، أو إدارة أعمالنا ، أو تقديم الخدمات لك ، طالما وافقت تلك الأطراف على الحفاظ على سرية هذه المعلومات. قد نصدر أيضًا معلوماتك عندما نعتقد أن الإصدار مناسب للامتثال للقانون أو لتطبيق سياسات موقعنا أو لحماية حقوقنا أو حقوقنا أو ممتلكاتنا أو سلامتنا. ومع ذلك ، قد يتم تقديم معلومات الزائر غير المحددة للهوية إلى أطراف أخرى للتسويق أو الإعلان أو استخدامات أخرى. لن يتم تخزين أو بيع أو مشاركة أو تأجير أو استئجار جميع بيانات بطاقات الائتمان / الخصم ومعلومات التعريف الشخصية لأي أطراف ثالثة. قد يتم تغيير سياسات وأحكام موقع الويب أو تحديثه من حين لآخر للوفاء بالمتطلبات والمعايير. لذلك ، يتم تشجيع العملاء على زيارة هذه الأقسام بشكل متكرر حتى يتم تحديثهم بشأن التغييرات على الموقع. ستكون التعديلات سارية المفعول في يوم نشرها.",
            "headd-6":"روابط الطرف الثالث",
            "pri-17":"قد نقوم بتضمين أو تقديم منتجات أو خدمات جهة خارجية على موقعنا. مواقع الطرف الثالث هذه لديها سياسات خصوصية منفصلة ومستقلة. لذلك لا نتحمل أي مسؤولية أو مسؤولية عن محتوى وأنشطة هذه المواقع المرتبطة. ومع ذلك ، فإننا نسعى إلى حماية سلامة موقعنا ونرحب بأي ملاحظات حول هذه المواقع.",
            "headd-7":"الأحكام والشروط",
            "pri-18":"يرجى أيضًا زيارة قسم البنود والشروط الخاص بنا والذي يحدد استخدام وإخلاء المسئولية وحدود المسؤولية التي تحكم استخدام موقعنا على الويب ",
            "headd-8":"موافقتك",
            "pri-19":"باستخدام موقعنا ، فإنك توافق على سياسة الخصوصية الخاصة بنا.",
            "headd-9":"الاتصال بنا",
            "do-web":"www.4all2030.com",
            "pri-20":"إذا كان هناك أي أسئلة بخصوص سياسة الخصوصية هذه ، يمكنك الاتصال بنا باستخدام البريد الإلكتروني",
            "emaill":"marketing@forallw.com",
            "pri-21":"شكرا",
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
            "tit-privacy":"Collecting specific information :",
            "pri-1":"We collect information from you when you register on our site, book a doctor or subscribe to our newsletter.",
            "pri-2":"When booking or registering on our site, as appropriate, you may be asked to enter your name, e-mail address, mailing address or phone number.",
            "headd-1":" Disclosure Regarding Google Display Advertising :",
            "pri-3":"We implement Google Analytics features that use Display Advertising information for Google Analytics Demographics and Interest Reporting.",
            "pri-4":"You can opt-out of Google Analytics for Display Advertising, to prevent your data from being used by Google Analytics, by going to the Google Analytics opt-out page. (Here's the link: ",
            "pri-5":"We, along with third-party vendors (including Google), use first-party cookies (such as the Google Analytics cookies) and third-party cookies (such as the DoubleClick cookies) to report how your ad impressions, other uses of ad services, and interactions with these ad impressions and ad services are related to visits to our website. You can read more about the cookies used by Google Analytics advertising features, by going to the Google Analytics Privacy Policy page. (Here's the link: ",
            "headd-2":"Specific uses of information",
            "pri-6":"Any of the information we collect from you may be used in one of the following ways:",
            "pri-7":"To personalize your experience (your information helps us to better respond to your individual needs)",
            "pri-8":"To process transactions(Your information, whether public or private, will not be sold, exchanged, transferred, or given to any other company for any reason whatsoever, without your consent, other than for the express purpose of delivering the purchased product or service requested).",
            "pri-9":"To send periodic emails(The email address you provide for booking, may be used to send you information and updates pertaining to your booking, in addition to receiving occasional company news, updates, related product or service information, etc.)",
            "pri-10":"Note: If at any time you would like to unsubscribe from receiving future emails, we include detailed unsubscribe instructions at the bottom of each email.",
            "headd-3":"Protecting Your Information",
            "pri-11":"We implement a variety of security measures to maintain the safety of your personal information when you place a booking or enter, submit, or access your personal information.",
            "pri-12":"We offer the use of a secure server. All supplied sensitive/credit information is transmitted via Secure Socket Layer (SSL) technology and then encrypted into our Payment gateway providers database only to be accessible by those authorized with special access rights to such systems, and are required to keep the information confidential.",
            "pri-13":"After a transaction, your private information (credit cards, social security numbers, financials, etc.) will not be stored on our servers.",
            "headd-4":"Cookie Usage Policy",
            "pri-14":"Cookies are small files that a site or its service provider transfers to your computer’s hard drive through your Web browser (if you allow) that enables the sites or service providers systems to recognize your browser and capture and remember certain information",
            "pri-15":"If you prefer, you can choose to have your computer warn you each time a cookie is being sent, or you can choose to turn off all cookies via your browser settings. Like most websites, if you turn your cookies off, some of our services may not function properly.",
            "headd-5":"No disclosure of information to other parties",
            "pri-16":"We do not sell, trade, or otherwise transfer to outside parties your personally identifiable information. This does not include trusted third parties who assist us in operating our website, conducting our business, or servicing you, so long as those parties agree to keep this information confidential. We may also release your information when we believe release is appropriate to comply with the law, enforce our site policies, or protect ours or others rights, property, or safety. However, non-personally identifiable visitor information may be provided to other parties for marketing, advertising, or other uses. All credit/debit cards details and personally identifiable information will NOT be stored, sold, shared, rented or leased to any third parties. The Website Policies and Terms & Conditions may be changed or updated occasionally to meet the requirements and standards. Therefore the Customers’ are encouraged to frequently visit these sections in order to be updated about the changes on the website. Modifications will be effective on the day they are posted. ",
            "headd-6":"Third party links",
            "pri-17":"We may include or offer third party products or services on our website. These third party sites have separate and independent privacy policies. We therefore have no responsibility or liability for the content and activities of these linked sites. Nonetheless, we seek to protect the integrity of our site and welcome any feedback about these sites.",
            "headd-7":"Terms and Conditions",
            "pri-18":"Please also visit our Terms and Conditions section establishing the use, disclaimers, and limitations of liability governing the use of our website at ",
            "headd-8":"Your Consent",
            "pri-19":"By using our site, you consent to our privacy policy.",
            "headd-9":"Contacting Us",
            "do-web":"www.4all2030.com",
            "pri-20":"If there are any questions regarding this privacy policy you may contact us using the email ",
            "emaill":"marketing@forallw.com",
            "pri-21":"Thanks",      
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