//ButtonTop
mybutton = document.getElementById("btntop");
window.onscroll = function () {
  myfunction();
};

function myfunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

//Form Validation
const pname = document.getElementById("pname");
const pemail = document.getElementById("pemail");
const pmobile = document.getElementById("pmobile");
const kname = document.getElementById("kname");
//const form = document.getElementById("form");
const errN = document.querySelector(".errN");
const errM = document.querySelector(".errM");
const errK = document.querySelector(".errK");
const errR = document.querySelector(".errR");

const errEmail = document.querySelector(".errEmail");
const box = document.querySelectorAll(".box");
const successText = document.querySelector(".successText");

/*var temp = box[0];
for (var i = 0; i < 4; i++) {
  box[i].addEventListener("click", function () {
    temp.classList.remove("active");
    if (temp != this) {
      this.classList.add("active");
    } else {
      this.classList.toggle("active");
    }
    temp = this;
  });
}
*/

let flag1 = 0;
let flag2 = 0;
let flag3 = 0;
let flag4 = 0;
let flag5 = 0;

function checkRequiredName(input) {
  if (input.value.trim() === "") {
    errN.innerText = "Parent Name is Required";
    errN.style.display = "block";
    flag1 = 0;
  } else {
    errN.innerText = "";
    errK.style.display = "none";
    flag1 = 1;
  }
}

function checkRequiredMobile(input) {
  var numbers = /^[0-9]+$/;

  if (input.value.trim() === "") {
    errM.innerText = "Mobile Number Required";
    errM.style.display = "block";
    flag3 = 0;
  } else if (!input.value.match(numbers)) {
    errM.innerText = "Please input numeric characters only";
    errM.style.display = "block";
    flag3 = 0;
  } else if (input.value.length != 10) {
    errM.innerText = "Invalid Mobile Number";
    errM.style.display = "block";
    flag3 = 0;
  } else {
    errM.innerText = "";
    errM.style.display = "none";
    flag3 = 1;
  }
}

function checkRequiredKidName(input) {
  if (input.value.trim() === "") {
    errK.innerText = "Kid Name is Required";
    errK.style.display = "block";
    flag4 = 0;
  } else {
    errK.innerText = "";
    errK.style.display = "none";
    flag4 = 1;
  }
}

// Check email is valid
function checkEmail(input) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (input.value.trim() === "") {
    errEmail.innerText = "Email is Required";
    errEmail.style.display = "block";
    flag2 = 0;
  } else if (!re.test(input.value.trim())) {
    errEmail.innerText = "Invalid Email ID";
    errEmail.style.display = "block";
    flag2 = 0;
  } else {
    errEmail.innerText = "";
    errEmail.style.display = "none";
    flag2 = 1;
  }
}

function checkRadios() {
  var ops = document.getElementsByName("Options");
  if (ops[0].checked == true) {
    errR.innerText = "";
    errR.style.display = "none";
    flag5 = 1;
  } else if (ops[1].checked == true) {
    errR.innerText = "";
    errR.style.display = "none";
    flag5 = 1;
  } else {
    errR.innerText = "Please select one";
    errR.style.display = "block";
    flag5 = 0;
  }
}

const scriptURL =
  "https://script.google.com/macros/s/AKfycbyPCwlC9P0c_9GrqGN1YFcyPZP_BgfmbzY6DNE31_4v0yGRsBE/exec";
  
const form = document.forms["google-sheet"];

form.addEventListener("submit", function (e) {
  e.preventDefault();
  checkRequiredName(pname);
  checkEmail(pemail);
  checkRequiredMobile(pmobile);
  checkRequiredKidName(kname);
  checkRadios();

  // if (flag == 1) {
  // fetch(scriptURL, { method: "POST", body: new FormData(form) })
  // .then((response) => alert("Thanks For Submitting!"))
  //.catch((error) => console.error("Error!", error.message));
  //}

  function successAlert() {
    successText.innerText = "Your form has been Successfully Submitted";
    successText.style.display = "block";
  }

  if (flag1 == 1 && flag2 == 1 && flag3 == 1 && flag4 == 1 && flag5 == 1) {
    fetch(scriptURL, { method: "POST", body: new FormData(form) })
      .then((response) => successAlert())
      .catch((error) => console.error("Error!", error.message));
  } else {
    return false;
  }
  setTimeout(successAlert, 3000);
});