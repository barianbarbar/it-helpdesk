const scriptURL = "https://script.google.com/macros/s/AKfycbxLzlhDF2BkNOOAFfIaf3BRoLcA7eJdzxXDcE58HnNQPqeyPKaJ-OOoN6v7Hbm1b1Lebw/exec";

const form = document.forms["submit-to-spreadsheet"];
const timeFrom = document.querySelector("#from");
const timeTo = document.querySelector("#to");
const resultTimeEl = document.querySelector("#waktu");

const alertSuccess = document.querySelector(".alert.success");
const alertFailed = document.querySelector(".alert.failed");

const buttonSend = document.querySelector(".btn-send");
const buttonWait = document.querySelector(".btn-wait");

form.addEventListener("submit", (evt) => {
    buttonSend.classList.add("d-none");
    buttonWait.classList.remove("d-none");

    resultTimeEl.value = `${timeFrom.value}-${timeTo.value}`;
    console.log(resultTimeEl.value)
    console.log(new FormData(form));
    evt.preventDefault();
    fetch(scriptURL, {
        method: "POST",
        body: new FormData(form),
    })
    .then(() => {
        window.scrollTo(0, 0);
        alertSuccess.classList.add("active");
        setTimeout(() => {
            alertSuccess.classList.remove("active");
        }, 4000);
        form.reset();
    })
    .catch(() => {
        window.scrollTo(0, 0);
        alertFailed.classList.add("active");
        setTimeout(() => {
            alertFailed.classList.remove("active");
        }, 4000);
    })
    .finally(() => {
        buttonSend.classList.remove("d-none");
        buttonWait.classList.add("d-none");        
    });
});
