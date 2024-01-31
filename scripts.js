


const convertbutton = document.querySelector(".convert-button")
const currencyselect = document.querySelector(".currency-select")


function convertValues(){
    const inputCurrencyValue = document.querySelector(".input-currency"). value
    const currencyValueToConvert = document.querySelector(".currency-values-to-convert")
    const currencyValueConverted = document.querySelector(".currency-values")

    const dolarToday = 5.2
    const euroToday = 6.2

    if(currencyselect.value == "dolar"){
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US",{
            style: "currency",
            currency:"USD"
        }).format( inputCurrencyValue / dolarToday)
    }

    if(currencyselect.value == "euro"){
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE",{
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue / euroToday)
    }
    
    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR",{
        style: "currency",
        currency: "BRL"
    }).format(inputCurrencyValue)
    
   }

function changeCurrency(){
    const currencyName = document.getElementById("currency-name")
    const currencyImage = document.querySelector(".currency-img")
    
    if (currencyselect.value == "dolar") {
        currencyName.innerHTML = "Dolar americano"
        currencyImage.src = "./assets/dolar.png"
       
    }

    if (currencyselect.value == "euro") {
        currencyName.innerHTML = "Euro"
        currencyImage.src = "./assets/Euro.png"
    } 
    
    convertValues()
}

currencyselect.addEventListener("change", changeCurrency)
convertbutton.addEventListener("click", convertValues)
