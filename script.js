const first = document.getElementById("first");
const last = document.getElementById("last");
const email = document.getElementById("email");
const message = document.getElementById("msgtxt");
const consent = document.getElementById("consent");

const submit = document.getElementById("submit_btn");

const error1 = document.getElementById("first_name_error");
const error2 = document.getElementById("last_name_error");
const emailError = document.getElementById("email_error");
const queryError = document.getElementById("query_error");
const messageError = document.getElementById("msg_error");
const consentError = document.getElementById("consent_error");

const select = document.querySelectorAll(".select");

function handleError() {
  if (first.value === "") {
    error1.style.display = "block";
    first.style.border = "1px solid red";
    first.style.outline = "none";
  }

  if (last.value === "") {
    error2.style.display = "block";
    last.style.border = "1px solid red";
    last.style.outline = "none";
  }

  if (email.value === "") {
    emailError.style.display = "block";
    email.style.border = "1px solid red";
    email.style.outline = "none";
  }

  let isSelected = false;
  select.forEach(function (item) {
    if (item.checked) {
      isSelected = true;
    }
  });

  if (!isSelected) {
    queryError.style.display = "block";
  }

  if (message.value === "") {
    messageError.style.display = "block";
    message.style.border = "1px solid red";
  }

  if (!consent.checked) {
    consentError.style.display = "block";
  }
}

function handlesubmit() {
  submit.addEventListener("click", function () {
    handleError();
  });
}

handlesubmit();
