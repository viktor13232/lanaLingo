const browserLang = navigator.language || navigator.userLanguage;

getInitialLang = function() {
    if (browserLang.startsWith("en")) {
        changeLang(1);
    } else if (browserLang.startsWith("ru")) {
        changeLang(2);
    } else if (browserLang.startsWith("lv")) {
        changeLang(3);
    } else if (browserLang.startsWith("de")) {
        changeLang(4);
    } else {
        changeLang(1);
    }
}

window.onload = getInitialLang;

const english = {
    emailLang: "Email",

    //Hero Section
    heroCredo: "Your Learning Journey",
    heroApply: "Apply",

    //Top Nav Section
    topNavAboutMe: "About Me",
    topNavMyApproach: "My Approach",
    topNavWhyMe: "Why me?",
    topNavLearningProcess: "The learning process",
    topNavContactMe: "Contact Me",

    //About Me Section
    aboutMeHi: "Hi!",
    aboutMeColumnOne: "I’m Lana, and I’m happy to guide students on their language and music learning journey. I’ve been teaching German, Latvian, and Russian for many years, along with the basics of music education — theory, solfeggio, and beginner piano.",
    aboutMeColumnTwo: "Over the years, I’ve had the pleasure of helping learners of all ages and backgrounds succeed, no matter their starting point. I believe that learning works best when it’s personalized — based on each student’s goals, interests, and learning style. Together, we find the tools and methods that make learning clear, engaging, and effective.",
    aboutMeColumnThree: "While I don’t hold a formal linguistics degree, my years of hands-on experience and deep understanding of the subjects I teach allow me to be a supportive and effective tutor. I use trusted teaching methods tailored to modern needs to make the process relevant and inspiring.",
    aboutMeColumnFour: "I earned my higher education in Germany, where I also taught Russian and music to German students. This experience deepened my appreciation for intercultural communication and personal connection in education.",

    //My Approach Section
    myApproachHeading: "My Approach",
    myApproachColumnOne: "A personlalized learning plan - from the first meeting to confident results",
    myApproachColumnTwo: "One-on-one lessons tailored to each student's level and goals",

    //Why Me Section
    whyMeHeading: "Why me?",
    whyMeRowOne: "Individual approach to every student",
    whyMeRowTwo: "A variety of teaching materials, including my own custom resources",
    whyMeRowThree: "Patience, encouragement, and a respectful learning space",
    whyMeRowFour: "Lessons adapted to different goals: relocation, travel, work, studies",
    whyMeRowFive: "One tutor - for both languages and music",

    //Learning Process Section
    learningProcessHeading: "Learning process",
    learningProcessColumnOne: "I offer a convenient and effective format for remote (online) and in-person learning of music and foreign languages. Here's how we will move towards your goals:",
    learningProcessColumnTwo: "The first step – your application: Simply leave your request on this website, and I will definitely contact you as soon as possible.",
    learningProcessColumnThree: "The second step – our first meeting: During this meeting, we will discuss your goals, determine the frequency of our lessons, and agree on the necessary learning materials. We will also discuss the cost of our lessons at this meeting.",
    learningProcessColumnFour: "Preparing for the lesson – timely payment: To ensure our lesson goes as planned, payment for it must be made no later than 24 hours before the scheduled time. Please send confirmation of payment in advance.",
    learningProcessColumnFive: "See you at the lesson! After receiving confirmation of payment, our first lesson will take place.",
    learningProcessColumnSix: "Please note: If payment for the lesson is not received 24 hours before it begins, unfortunately, the lesson will be cancelled. This is necessary for me to manage my schedule and provide the best experience for all my students.",
    learningProcessBottomText: "Ready to take the first step? Leave your application right now!",

    //Contact Me Section
    contactMeHeader: "Contact me",
    contactMeNameLabel: "Name:",
    contactMeEmailLabel: "Email:",
    contactMeSubjectLabel: "Subject:",
    contactMeSubmitButton: "Submit",
    textAreaPlaceholder: "Write your message here",

    //Footer Section
    footerHeader: "Contact Details"
}

const russian = {
    emailLang: "Электронная почта",

    //Hero Section
    heroCredo: "Ваше учебное путешествие",
    heroApply: "Начать",

    //Top Nav Section
    topNavAboutMe: "Обо мне",
    topNavMyApproach: "Мой подход",
    topNavWhyMe: "Почему я?",
    topNavLearningProcess: "Процесс обучения",
    topNavContactMe: "Связаться со мной",

    //About Me Section
    aboutMeHi: "Привет!",
    aboutMeColumnOne: "Я Лана, и я рада помогать студентам в их обучении языкам и музыке. Я преподаю немецкий, латышский и русский языки уже много лет, а также основы музыкального образования — теорию, сольфеджио и начальный фортепиано.",
    aboutMeColumnTwo: "В течение многих лет я имела удовольствие помогать ученикам всех возрастов и происхождений достигать успеха, независимо от их начального уровня. Я верю, что обучение работает лучше всего тогда, когда оно персонализировано — основывается на целях, интересах и стиле обучения каждого студента. Вместе мы находим инструменты и методы, которые делают обучение ясным, увлекательным и эффективным.",
    aboutMeColumnThree: "Хотя у меня нет официального диплома по лингвистике, мои годы практического опыта и глубокое понимание предметов, которые я преподаю, позволяют мне быть поддерживающим и эффективным преподавателем. Я использую проверенные методы преподавания, адаптированные под современные нужды, чтобы сделать процесс актуальным и вдохновляющим.",
    aboutMeColumnFour: "Я получила высшее образование в Германии, где также преподавала русский язык и музыку студентам-немцам. Этот опыт углубил моё признание в межкультурной коммуникации и личном взаимодействии в образовании.",

    //My Approach Section
    myApproachHeading: "Мой подход",
    myApproachColumnOne: "Персонализированный учебный план - от первой встречи до уверенных результатов",
    myApproachColumnTwo: "Индивидуальные уроки, адаптированные к уровню и целям каждого студента",

    //Why Me Section
    whyMeHeading: "Почему я?",
    whyMeRowOne: "Индивидуальный подход к каждому студенту",
    whyMeRowTwo: "Разнообразие учебных материалов, включая мои собственные ресурсы",
    whyMeRowThree: "Терпение, поддержка и уважительное учебное пространство",
    whyMeRowFour: "Уроки, адаптированные к различным целям: переезд, путешествия, работа, учеба",
    whyMeRowFive: "Один преподаватель - для языков и музыки",

    //Learning Process Section
    learningProcessHeading: "Процесс обучения",
    learningProcessColumnOne: "Я предлагаю удобный и эффективный формат для удаленного (онлайн) и очного обучения музыке и иностранным языкам. Вот как мы будем двигаться к вашим целям:",
    learningProcessColumnTwo: "Первый шаг – ваша заявка: Просто оставьте свою заявку на этом сайте, и я обязательно свяжусь с вами как можно скорее.",
    learningProcessColumnThree: "Второй шаг – наша первая встреча: Во время этой встречи мы обсудим ваши цели, определим частоту наших уроков и согласуем необходимые учебные материалы. Мы также обсудим стоимость наших уроков на этой встрече.",
    learningProcessColumnFour: "Подготовка к уроку – своевременная оплата: Чтобы обеспечить проведение нашего урока по плану, оплата за него должна быть произведена не позднее чем за 24 часа до запланированного времени. Пожалуйста, заранее отправьте подтверждение оплаты.",
    learningProcessColumnFive: "Увидимся на уроке! После получения подтверждения оплаты, наш первый урок состоится.",
    learningProcessColumnSix: "Пожалуйста, обратите внимание: Если оплата за урок не будет получена за 24 часа до его начала, к сожалению, урок будет отменен. Это необходимо для того, чтобы я могла управлять своим расписанием и обеспечивать лучший опыт для всех моих студентов.",
    learningProcessBottomText: "Готовы сделать первый шаг? Оставьте свою заявку прямо сейчас!",

    //Contact Me Section
    contactMeHeader: "Связаться со мной",
    contactMeNameLabel: "Имя:",
    contactMeEmailLabel: "Электронная почта:",
    contactMeSubjectLabel: "Тема:",
    contactMeSubmitButton: "Отправить",
    textAreaPlaceholder: "Напишите ваше сообщение здесь",

    //Footer Section
    footerHeader: "Контакты"

}


const latvian = {

    emailLang: "E-pasts",

    //Hero Section
    heroCredo: "Jūsu mācību ceļojums",
    heroApply: "Pieteikties",

    //Top Nav Section
    topNavAboutMe: "Par mani",
    topNavMyApproach: "Mans piegājiens",
    topNavWhyMe: "Kāpēc es?",
    topNavLearningProcess: "Mācību process",
    topNavContactMe: "Sazināties ar mani",

    //About Me Section
    aboutMeHi: "Sveiki!",
    aboutMeColumnOne: "Es esmu Lana, un es esmu priecīga palīdzēt studentiem viņu valodu un mūzikas mācību ceļojumā. Es mācīju vācu, latviešu un krievu valodas jau daudzus gadus, kā arī mūzikas izglītības pamatus — teoriju, solfēdžio un sākotnējo piano.",
    aboutMeColumnTwo: "Gadu gaitā es biju priecīga palīdzēt mācīties visiem vecumiem un fona studentiem sasniegt panākumus, neatkarīgi no viņu sākuma līmeņa. Es ticu, ka mācīšanās darbojas labāk, kad tā ir personalizēta — balstoties uz katru studentu mērķiem, interesēm un mācīšanās stilu. Kopā mēs atradam rīkus un metodes, kas padara mācīšanās procesu skaidru, ieinteresējošu un efektīvu.",
    aboutMeColumnThree: "Lai gan es nesavam oficiālo lingvistikas diplomu, mani gadi praktiskajā pieredzē un dziļa saprotamais par tēmām, kuras es māku, ļauj man būt atbalstošam un efektīvam pedagogam. Es izmantoju uzticamus mācīšanās metodes, pielagrādotas modernajiem vajadzībām, lai padarītu procesu aktuālu un visspirdzinošu.",
    aboutMeColumnFour: "Es ieguvu augstskolas izglītību Vokarijum, kur arī mĀku krievu valodu un mūziku vokariju studentiem. Šis pieredze dziļinie mana vērtējums par starptautisko komunikaciju un personisko saziņu izglītībā.",

    //My Approach Section
    myApproachHeading: "Mans piegājiens",
    myApproachColumnOne: "Personalizēts mācību plāns - no pirmās tikšanās līdz pārliecinošiem rezultātiem",
    myApproachColumnTwo: "Individuālas nodarbības, pielāgotas katra studenta līmenim un mērķiem",

    //Why Me Section
    whyMeHeading: "Kāpēc es?",
    whyMeRowOne: "Individuāla pieeja katram studentam",
    whyMeRowTwo: "Dažādi mācību materiāli, ieskaitot manas paša izveidotās resursus",
    whyMeRowThree: "Pacietība, atbalsts un cieņpilna mācību vide",
    whyMeRowFour: "Nodarbības pielāgotas dažādiem mērķiem: pārvākšanās, ceļojumi, darbs, studijas",
    whyMeRowFive: "Viens skolotājs - gan valodām, gan mūzikai",

    //Learning Process Section
    learningProcessHeading: "Mācību process",
    learningProcessColumnOne: "Es piedāvāju ērtu un efektīvu formātu attālinātai (tiešsaistes) un klātienes mācībām mūzikā un svešvalodās. Lūk, kā mēs virzīsimies uz jūsu mērķiem:",
    learningProcessColumnTwo: "Pirmais solis – jūsu pieteikums: Vienkārši atstājiet savu pieteikumu šajā vietnē, un es noteikti sazināšos ar jums pēc iespējas ātrāk.",
    learningProcessColumnThree: "Otrais solis – mūsu pirmā tikšanās: Šīs tikšanās laikā mēs apspriedīsim jūsu mērķus, noteiksim mūsu nodarbību biežumu un vienosimies par nepieciešamajiem mācību materiāliem. Mēs arī apspriedīsim mūsu nodarbību izmaksas šajā tikšanās laikā.",
    learningProcessColumnFour: "Sagatavošanās nodarbībai – savlaicīga apmaksa: Lai nodrošinātu, ka mūsu nodarbība notiek pēc plāna, tās apmaksa jāveic ne vēlāk kā 24 stundas pirms plānotā laika. Lūdzu, iepriekš nosūtiet apmaksas apstiprinājumu.",
    learningProcessColumnFive: "Uz tikšanos nodarbībā! Pēc apmaksas apstiprinājuma saņemšanas mūsu pirmā nodarbība notiks.",
    learningProcessColumnSix: "Lūdzu, ņemiet vērā: Ja nodarbības apmaksa netiks saņemta 24 stundas pirms tās sākuma, diemžēl nodarbība tiks atcelta. Tas ir nepieciešams, lai es varētu pārvaldīt savu grafiku un nodrošināt labāko pieredzi visiem maniem studentiem.",
    learningProcessBottomText: "Gatavi veikt pirmo soli? Atstājiet savu pieteikumu tieši tagad!",

    //Contact Me Section
    contactMeHeader: "Sazināties ar mani",
    contactMeNameLabel: "Vārds:",
    contactMeEmailLabel: "E-pasts:",
    contactMeSubjectLabel: "Temats:",
    contactMeSubmitButton: "Iesniegt",
    textAreaPlaceholder: "Uzrakstiet savu ziņu šeit",

    //Footer Section
    footerHeader: "Kontakti"

}

const german = {

    emailLang: "E-Mail",

    //Hero Section
    heroCredo: "Ihre Lernreise",
    heroApply: "Bewerben",

    //Top Nav Section
    topNavAboutMe: "Über mich",
    topNavMyApproach: "Mein Ansatz",
    topNavWhyMe: "Warum ich?",
    topNavLearningProcess: "Der Lernprozess",
    topNavContactMe: "Kontaktieren Sie mich",

    //About Me Section
    aboutMeHi: "Hallo!",
    aboutMeColumnOne: "Ich bin Lana, und ich freue mich, Schüler auf ihrer Reise des Sprachen- und Musiklernens zu begleiten. Ich unterrichte seit vielen Jahren Deutsch, Lettisch und Russisch sowie die Grundlagen der Musikerziehung — Theorie, Solfeggio und Anfängerklavier.",
    aboutMeColumnTwo: "Im Laufe der Jahre hatte ich das Vergnügen, Lernenden jeden Alters und Hintergrunds zum Erfolg zu verhelfen, unabhängig von ihrem Ausgangspunkt. Ich glaube, dass Lernen am besten funktioniert, wenn es personalisiert ist — basierend auf den Zielen, Interessen und Lernstilen jedes Schülers. Gemeinsam finden wir die Werkzeuge und Methoden, die das Lernen klar, ansprechend und effektiv machen.",
    aboutMeColumnThree: "Obwohl ich keinen formalen Abschluss in Linguistik habe, ermöglichen mir meine jahrelange praktische Erfahrung und mein tiefes Verständnis der Fächer, die ich unterrichte, ein unterstützender und effektiver Tutor zu sein. Ich verwende bewährte Lehrmethoden, die auf moderne Bedürfnisse zugeschnitten sind, um den Prozess relevant und inspirierend zu gestalten.",
    aboutMeColumnFour: "Ich habe meine höhere Bildung in Deutschland erworben, wo ich auch Russisch und Musik für deutsche Studenten unterrichtet habe. Diese Erfahrung vertiefte meine Wertschätzung für interkulturelle Kommunikation und persönliche Verbindung in der Bildung.",

    //My Approach Section
    myApproachHeading: "Mein Ansatz",
    myApproachColumnOne: "Ein personalisierter Lernplan - von der ersten Begegnung bis zu überzeugenden Ergebnissen",
    myApproachColumnTwo: "Einzelunterricht, der auf das Niveau und die Ziele jedes Schülers zugeschnitten ist",

    //Why Me Section
    whyMeHeading: "Warum ich?",
    whyMeRowOne: "Individueller Ansatz für jeden Schüler",
    whyMeRowTwo: "Eine Vielzahl von Lehrmaterialien, einschließlich meiner eigenen Ressourcen",
    whyMeRowThree: "Geduld, Ermutigung und ein respektvoller Lernraum",
    whyMeRowFour: "Unterricht angepasst an verschiedene Ziele: Umzug, Reisen, Arbeit, Studium",
    whyMeRowFive: "Ein Tutor - für Sprachen und Musik",

    //Learning Process Section
    learningProcessHeading: "Der Lernprozess",
    learningProcessColumnOne: "Ich biete ein bequemes und effektives Format für Fern- (Online-) und Präsenzunterricht in Musik und Fremdsprachen an. So werden wir auf Ihre Ziele hinarbeiten:",
    learningProcessColumnTwo: "Der erste Schritt – Ihre Bewerbung: Hinterlassen Sie einfach Ihre Anfrage auf dieser Website, und ich werde mich so schnell wie möglich mit Ihnen in Verbindung setzen.",
    learningProcessColumnThree: "Der zweite Schritt – unser erstes Treffen: Während dieses Treffens besprechen wir Ihre Ziele, bestimmen die Häufigkeit unserer Lektionen und vereinbaren die notwendigen Lernmaterialien. Wir werden auch die Kosten unserer Lektionen bei diesem Treffen besprechen.",
    learningProcessColumnFour: "Vorbereitung auf die Lektion – rechtzeitige Zahlung: Um sicherzustellen, dass unsere Lektion wie geplant verläuft, muss die Zahlung dafür spätestens 24 Stunden vor der geplanten Zeit erfolgen. Bitte senden Sie die Zahlungsbestätigung im Voraus.",
    learningProcessColumnFive: "Bis zum Unterricht! Nach Erhalt der Zahlungsbestätigung findet unsere erste Lektion statt.",
    learningProcessColumnSix: "Bitte beachten Sie: Wenn die Zahlung für die Lektion nicht 24 Stunden vor Beginn eingeht, wird die Lektion leider abgesagt. Dies ist notwendig, damit ich meinen Zeitplan verwalten und die beste Erfahrung für alle meine Schüler bieten kann.",
    learningProcessBottomText: "Bereit, den ersten Schritt zu machen? Hinterlassen Sie jetzt Ihre Bewerbung!",

    //Contact Me Section
    contactMeHeader: "Kontaktieren Sie mich",
    contactMeNameLabel: "Name:",
    contactMeEmailLabel: "E-Mail:",
    contactMeSubjectLabel: "Betreff:",
    contactMeSubmitButton: "Senden",
    textAreaPlaceholder: "Schreiben Sie hier Ihre Nachricht",

    //Footer Section
    footerHeader: "Kontaktdaten"
}

function changeLang(number) {
    let text;
    if (number === 1) {
        text = english;
    } else if (number === 2) {
        text = russian;
    } else if (number === 3) {
        text = latvian;
    } else if (number === 4) {
        text = german;
    }

    document.querySelectorAll(".emailLang").forEach(el => {
        el.innerHTML = text.emailLang;
    });

    //Hero Section
    document.getElementById("heroCredo").innerHTML = text.heroCredo;
    document.getElementById("heroApply").innerHTML = text.heroApply;

    //Top Nav Section
    document.getElementById("topNavAboutMe").innerHTML = text.topNavAboutMe;
    document.getElementById("topNavMyApproach").innerHTML = text.topNavMyApproach;
    document.getElementById("topNavWhyMe").innerHTML = text.topNavWhyMe;
    document.getElementById("topNavLearningProcess").innerHTML = text.topNavLearningProcess;
    document.getElementById("topNavContactMe").innerHTML = text.topNavContactMe;

    //About Me Section
    document.getElementById("abouMeHi").innerHTML = text.aboutMeHi;
    document.getElementById("aboutMeColumnOne").innerHTML = text.aboutMeColumnOne;
    document.getElementById("aboutMeColumnTwo").innerHTML = text.aboutMeColumnTwo;
    document.getElementById("aboutMeColumnThree").innerHTML = text.aboutMeColumnThree;
    document.getElementById("aboutMeColumnFour").innerHTML = text.aboutMeColumnFour;

    //My Approach Section
    document.getElementById("myApproachHeading").innerHTML = text.myApproachHeading;
    document.getElementById("myApproachColumnOne").innerHTML = text.myApproachColumnOne;
    document.getElementById("myApproachColumnTwo").innerHTML = text.myApproachColumnTwo;

    //Why Me Section
    document.getElementById("whyMeHeading").innerHTML = text.whyMeHeading;
    document.getElementById("whyMeRowOne").innerHTML = text.whyMeRowOne;
    document.getElementById("whyMeRowTwo").innerHTML = text.whyMeRowTwo;
    document.getElementById("whyMeRowThree").innerHTML = text.whyMeRowThree;
    document.getElementById("whyMeRowFour").innerHTML = text.whyMeRowFour;
    document.getElementById("whyMeRowFive").innerHTML = text.whyMeRowFive;

    //Learning Process Section
    document.getElementById("learningProcessHeading").innerHTML = text.learningProcessHeading;
    document.getElementById("learningProcessColumnOne").innerHTML = text.learningProcessColumnOne;
    document.getElementById("learningProcessColumnTwo").innerHTML = text.learningProcessColumnTwo;
    document.getElementById("learningProcessColumnThree").innerHTML = text.learningProcessColumnThree;
    document.getElementById("learningProcessColumnFour").innerHTML = text.learningProcessColumnFour;
    document.getElementById("learningProcessColumnFive").innerHTML = text.learningProcessColumnFive;
    document.getElementById("learningProcessColumnSix").innerHTML = text.learningProcessColumnSix;
    document.getElementById("learningProcessBottomText").innerHTML = text.learningProcessBottomText;

    //Contact Me Section
    document.getElementById("contactMeHeader").innerHTML = text.contactMeHeader;
    document.getElementById("contactMeNameLabel").innerHTML = text.contactMeNameLabel;
    document.getElementById("contactMeEmailLabel").innerHTML = text.contactMeEmailLabel;
    document.getElementById("contactMeSubjectLabel").innerHTML = text.contactMeSubjectLabel;
    document.getElementById("contactMeSubmitButton").innerHTML = text.contactMeSubmitButton;
    document.getElementById("textAreaLang").placeholder = text.textAreaPlaceholder;

    //Footer Section
    document.getElementById("footerHeader").innerHTML = text.footerHeader;
}



