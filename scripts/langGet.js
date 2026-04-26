
const enLangJSON = 'langJsons/en.json';
const ruLangJSON = 'langJsons/ru.json';
const lvLangJSON = 'langJsons/lv.json';
const deLangJSON = 'langJsons/de.json';

const lang = localStorage.getItem("language");


langChanger();


//Reading language JSON, depending on selected or naviagator language

function langChanger() {
    
    if(localStorage.getItem("language") === null)
        lang = navigator.language;
    
    if(lang.startsWith("en"))
        changeLanguage(enLangJSON);
    else if(lang.startsWith("ru"))
        changeLanguage(ruLangJSON);
    else if(lang.startsWith("de"))
        changeLanguage(deLangJSON);
    else if(lang.startsWith("lv"))
        changeLanguage(lvLangJSON);
    else {
        changeLanguage(enLangJSON);
        localStorage.setItem("language", "en");
    }
    
}

//Fetching lang JSON

async function getData(filePath) {
    try {
        const response = await fetch(filePath);
        if (!response.ok) {
            throw new Error('Network respone error');
        }

        const data = await response.json()
        return data;

    } catch (error) {
        console.error('Fetch error:', error);
        throw error;
    }
}

//Assigning Icons and Event Listeners to Buttons and main language flag (which is Anchor)

    const enObj = {
    name: "en",
    imgLink: "assets/us.svg",
    number: 1
}

const ruObj = {
    name: "ru",
    imgLink: "assets/ru.svg",
    number: 2
}
const lvObj = {
    name: "lv",
    imgLink: "assets/lv.svg",
    number: 3
}
const deObj = {
    name: "de",
    imgLink: "assets/de.svg",
    number: 4
}

const langObjArr = [enObj, ruObj, lvObj, deObj];

changeIcons();



function changeIcons() {
    const btnArr = document.querySelectorAll(".langBtn");
    const imgArr = document.querySelectorAll(".langBtnImg");

    let counter = 0;

    for(let i = 0; i<4; i++) {
        if(lang == langObjArr[i].name)
            document.querySelector(".langAImg").src = langObjArr[i].imgLink;
        else {
            imgArr[counter].src = langObjArr[i].imgLink;
            btnArr[counter].addEventListener("click", () => 
            {
            saveChosedLang(langObjArr[i].number);
            });
            counter++;
        }
    }
    
}

//Storing chosed lang in memory

function saveChosedLang(number) {
    switch (number) {
        case 1: {
            localStorage.setItem("language", "en");
            location.reload();
            break; 
       }
        case 2: {
            localStorage.setItem("language", "ru");
            location.reload();
            break;
        }
        case 3: {
            localStorage.setItem("language", "lv");
            location.reload();
            break;
        }
        case 4: { 
            localStorage.setItem("language", "de");
            location.reload();
            break;
        }

    }
}
