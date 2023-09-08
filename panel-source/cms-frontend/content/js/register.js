const $ = document;

const btn = $.querySelector(".submit-form-btn");
const firstname_input = $.querySelector("#firstname-input");
const lastname_input = $.querySelector("#lastname-input");
const username_input = $.querySelector("#username-input");

const firstname_valid_text = $.querySelector(".firstname_valid");
const lastname_valid_text = $.querySelector(".lastname_valid");
const username_valid_text = $.querySelector(".username_valid");

let firstname_valid = false;
let lastname_valid = false;
let username_valid = false;


let regex = /^[a-z0-9_-]{3,15}$/gm;

firstname_input.addEventListener("keyup", () => {
  if (firstname_input.value.length >= 3) {
    firstname_valid = true;
    firstname_valid_text.innerHTML = "valid message";
    firstname_valid_text.classList.add("valid-message");
    firstname_valid_text.classList.remove("invalid-message");
  } else {
    firstname_valid = false;
    firstname_valid_text.innerHTML = "invalid message";
    firstname_valid_text.classList.remove("valid-message");
    firstname_valid_text.classList.add("invalid-message");
  }
});
lastname_input.addEventListener("keyup", () => {
  if (lastname_input.value.length >= 3) {
    lastname_valid = true;
    lastname_valid_text.innerHTML = "valid message";
    lastname_valid_text.classList.add("valid-message");
    lastname_valid_text.classList.remove("invalid-message");
  } else {
    lastname_valid = false;
    lastname_valid_text.innerHTML = "invalid message";
    lastname_valid_text.classList.remove("valid-message");
    lastname_valid_text.classList.add("invalid-message");
  }
});
username_input.addEventListener("keyup", () => {
  if (username_input.value.length >= 3) {
    username_valid = true;
    username_valid_text.innerHTML = "valid message";
    username_valid_text.classList.add("valid-message");
    username_valid_text.classList.remove("invalid-message");
  } else {
    username_valid = false;
    username_valid_text.innerHTML = "invalid message";
    username_valid_text.classList.remove("valid-message");
    username_valid_text.classList.add("invalid-message");
  }
});

btn.addEventListener("click", (e) => {
    e.preventDefault()
  if (firstname_valid && lastname_valid && username_valid) {
    let obj = {
        firstName: firstname_input.value,
        lastName: lastname_input.value,
        userName: username_input.value,
        profile: 'hello/jdbc'
    }
    fetch('http://localhost:4000/api/users' , {
        method : "POST",
        headers : {
          "Content-type" : "application/json"
        },
        body : JSON.stringify(obj)
    }).then(res => console.log(res))
    .catch(err => console.clear())
  }
});
