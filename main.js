var usdCost = 11000;
var rubCost = 171;
var euroCOst = 11051;
var valutaInput = document.querySelector(".valuta__input");
var valutaUZS = document.querySelector(".valuta__s-input");
var elForm = document.querySelector(".form")
var elSelect = document.querySelector(".custom-select")

elForm.addEventListener("submit", function(evt){
  evt.preventDefault()

  var inputValue = valutaInput.value.trim(2)

  switch (elSelect.value){
    case "USD":
    valutaUZS.value = (inputValue * usdCost).toFixed(2);
    break;
    case "RUB":
    valutaUZS.value = (inputValue * rubCost).toFixed(2);
    default:
    valutaUZS.value = (inputValue * euroCOst).toFixed(2);
    

  }
})

