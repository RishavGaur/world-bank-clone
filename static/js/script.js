function nameNext() {
    let nameBlock = document.querySelector(".full-name");
    let nameField = document.getElementById("fullName");
    if (nameField.value == "") {
        nameField.style.borderColor = "red";
        alert("Please Enter Your Name to proceed...");
    } else {
        nameField.style.borderColor = "cadetblue";
        nameBlock.style.display = "none";
        let phoneBlock = document.querySelector(".phone-num");
        phoneBlock.style.display = "block";
    }
}
function phoneNext() {
    let phoneBlock = document.querySelector(".phone-num");
    let phoneField = document.getElementById("phoneNum");
    if (phoneField.value == "") {
        phoneField.style.borderColor = "red";
        alert("Please Enter Your Phone Number to proceed...");
    } else {
        phoneField.style.borderColor = "cadetblue";
        phoneBlock.style.display = "none";
        let emailBlock = document.querySelector(".email-id");
        emailBlock.style.display = "block";
    }
}
function emailNext() {
    let emailBlock = document.querySelector(".email-id");
    let emailField= document.getElementById("emailId");
    if (emailField.value == "") {
        emailField.style.borderColor = "red";
        alert("Please Enter Your Email Address to proceed...");
    } else {
        emailField.style.borderColor = "cadetblue";
        emailBlock.style.display = "none";
        let zipBlock = document.querySelector(".zip-code");
        zipBlock.style.display = "block";
    }
}
function zipNext() {
    let zipBlock = document.querySelector(".zip-code");
    let zipField = document.getElementById("zipCode");
    if (zipField.value == "") {
        zipField.style.borderColor = "red";
        alert("Please Enter Zip Code to proceed...");
    } else {
        zipField.style.borderColor = "cadetblue";
        zipBlock.style.display = "none";
        let bankBlock = document.querySelector(".bank-name");
        bankBlock.style.display = "block";
    }
}
function bankNext() {
    let bankBlock = document.querySelector(".bank-name");
    let bankField = document.getElementById("bankName");
    if (bankField.value == "") {
        bankField.style.borderColor = "red";
        alert("Please Enter the Bank Name to proceed...");
    } else {
        bankField.style.borderColor = "cadetblue";
        bankBlock.style.display = "none";
        let accBlock = document.querySelector(".acc-num");
        accBlock.style.display = "block";
    }
}
function accAndValid() {
    let valid=true;
    let accField = document.getElementById("accNum");
    if (accField.value == "") {
        accField.style.borderColor = "red";
        alert("Please Enter the last 4-digit of your Account Number...");
        valid=false;
    } else if (accField.value.length<4) {
        accField.style.borderColor = "red";
        alert("Please Enter Your Valid last 4-digit of your Account Number...");
        valid=false;
    } else {
        accField.style.borderColor = "cadetblue";
    }
    return valid;
}