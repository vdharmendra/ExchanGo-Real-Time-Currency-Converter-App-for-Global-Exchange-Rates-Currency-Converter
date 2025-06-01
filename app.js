let api = `https://v6.exchangerate-api.com/v6/${apiKey}/latest/USD`;

const fromDropDown = document.getElementById("fromCurrencySelect");

const toDropDown = document.getElementById("toCurrencySelect");

const result = document.getElementById("reslut");
// CREATE DROPDOWN FROM THE CURRENCIES ARRAY
currencyCodes.forEach((currency) => {
    const option = document.createElement("option");
    option.value = currency;
    option.text = currency;

    fromDropDown.add(option);
});
// SAME THING FOR THE CURRENCIES ARRAY
currencyCodes.forEach((currency) => {
    const option = document.createElement("option");
    option.value = currency;
    option.text = currency;

    toDropDown.add(option);
});

fromDropDown.value = "USD";
toDropDown.value = "INR";

let convertCurrency = () => {
    // CREATE REFERENCES
    const amount = document.querySelector("#amount").value;
    const fromCurrency = fromDropDown.value;
    const toCurrency = toDropDown.value;

    // IF AMOUNT INPUT FIELD IS NOT EMPTY
    if(amount.length != 0){
        // alert("okay");
        fetch(api).then((res) => res.json()).then((data) => {
                let fromExchangeRate = data.conversion_rates[fromCurrency];
                let toExchangeRate = data.conversion_rates[toCurrency];

                const convertedAmount = (amount/fromExchangeRate)*toExchangeRate;

                result.innerHTML = `${amount} ${fromCurrency} = ${convertedAmount.toFixed(2)} ${toCurrency}`;
            });
    } else {
        alert("Please Fill In The Amount");
    }

}

document.querySelector("#convertBtn").addEventListener("click", convertCurrency);