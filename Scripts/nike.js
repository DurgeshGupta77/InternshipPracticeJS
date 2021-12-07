let purchaseBtn = document.getElementById("purchase-btn");
let pError = document.getElementById("error");

purchaseBtn.addEventListener("click", renderError);

function renderError(){
    pError.textContent = "Something went wrong. Please try again letter" + "🙏";
}