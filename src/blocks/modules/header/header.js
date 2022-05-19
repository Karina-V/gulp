var $ = require("jquery");

$("#btnEl").on("click", function () {
    $("#fname").removeClass("error");
    $("#fname").removeClass("success");
    $("#lname").removeClass("error");
    $("#lname").removeClass("success");
    $("#email").removeClass("error");
    $("#email").removeClass("success");
});

$("#fname").on("blur", function () {
    if (!$("#fname")[0].value) {
        $("#fname").removeClass("success");
        $("#fname").addClass("error");
    } else {
        $("#fname").removeClass("error");
        $("#fname").addClass("success");
    }
});
$("#lname").on("blur", function () {
    if (!$("#lname")[0].value) {
        $("#lname").removeClass("success");
        $("#lname").addClass("error");
    } else {
        $("#lname").removeClass("error");
        $("#lname").addClass("success");
    }
});
$("#email").on("blur", function () {
    if (!$("#email")[0].value) {
        $("#email").removeClass("success");
        $("#email").addClass("error");
    } else {
        $("#email").removeClass("error");
        $("#email").addClass("success");
    }  
});

// //чстий js, робочий
// let fnameEl = document.getElementById("fname");
// let lnameEl = document.getElementById("lname");
// let emailEl = document.getElementById("email");
// let btnEl = document.getElementById("btnEl");

// btnEl.addEventListener("click", function () {
//     fnameEl.classList.remove("error");
//     fnameEl.classList.remove("success");
//     lnameEl.classList.remove("error");
//     lnameEl.classList.remove("success");
//     emailEl.classList.remove("error");
//     emailEl.classList.remove("success");
// });
// fnameEl.addEventListener("blur", function(){

//     if( !fnameEl.value ) {
//         fnameEl.classList.add("error");
//         return;
//     } else {
//         fnameEl.classList.add("success");
//     }
// });
// lnameEl.addEventListener("blur", function(){
//     if( !lnameEl.value ) {
//         lnameEl.classList.add("error");
//     } else {
//         lnameEl.classList.add("success");
//     }
// });
// emailEl.addEventListener("blur", function(){
//     if( !emailEl.value ) {
//         emailEl.classList.add("error");
//     } else {
//         emailEl.classList.add("success");
//     }
// });
