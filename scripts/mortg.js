const form = document.getElementById("mortgage-form");

const loanAmount= form.elements["amount"];
const interestRate = form.elements["interest"];
const years = form.elements["years"];

const monthlyPaymentResult = form.elements["monthlyPayment"];
const totalPaymentResult = form.elements["totalAmountToPay"];


function mortgageFormula() {
    const r = parseFloat(interestRate.value) / 100 / 12;
    const n = parseFloat(years.value) * 12;

    return (parseFloat(loanAmount.value) * (
    (r * Math.pow(1 + r, n)) / 
    (Math.pow(1 + r, n) - 1))).toFixed(2);

}

function calculateMonthlyPayment() {
    if (isNaN(parseFloat(loanAmount.value)) ||
    isNaN(parseFloat(interest.value)) ||
    isNaN(parseFloat(years.value))) {
        return monthlyPaymentResult.value = "Monthly Payment";
    }

    monthlyPaymentResult.value = "Monthly Payment: " + mortgageFormula();
}

function calculateTotalPayment () {
    if (isNaN(parseFloat(loanAmount.value)) || isNaN(parseFloat(years.value))) 
        return totalPaymentResult.value = "Fill Form";


    totalPaymentResult.value = "Total Amount to Pay: " + 
                            (mortgageFormula() *
                              parseFloat(years.value) * 12).toFixed(2);

}

loanAmount.addEventListener("input", calculateMonthlyPayment);
loanAmount.addEventListener("input", calculateTotalPayment);

interestRate.addEventListener("input", calculateMonthlyPayment);
interestRate.addEventListener("input", calculateTotalPayment);

years.addEventListener("input", calculateMonthlyPayment);
years.addEventListener("input", calculateTotalPayment);


//Some JSON practice

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

const enLangLink = 'langJsons/en.json';
const ruLangLink = 'langJsons/ru.json';

function changeLanguage(lang) {
    const langFile = getData(lang);
    
    langFile.then(data => {
        console.log(data);
        document.getElementById("loanAmountId").innerText = data.frontPage[0].loanAmount;
    }).catch(error => {
        console.error('Error loading language file:', error);
    });
}

function langBtn(value) {
    localStorage.setItem("language", value);
    langChanger();
}

const lang = localStorage.getItem("language");

function langChanger() {
    switch (lang) {
        case "ru":
            changeLanguage(ruLangLink);
            break;
        case "en":
            changeLanguage(enLangLink);
            break;
    }
}

langChanger();


