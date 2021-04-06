let inTxt = document.querySelector("#inputText");
let btn = document.querySelector("#btn-translator");
let outTxt = document.querySelector("#outputText");

let serverURL = "https://api.funtranslations.com/translate/minion.json";

function getURL(value)
{
    return serverURL + "?text=" + value;
}

function errorHandler(error)
{
    console.log("Error occured! " + error);
    alert("Something went wrong! Try again after some time!");
}

function translate()
{
    let inptxt = inTxt.value;

    fetch(getURL(inptxt))
    .then(response => response.json())
    .then(json => 
        {
            let outtxt = json.contents.translated;
            outTxt.innerText = outtxt;
        })
    .catch(errorHandler)
}

btn.addEventListener("click", translate);