const first_name_input = $.querySelector("#first-name-input");
const last_name_input = $.querySelector("#last-name-input");
const current_username_input = $.querySelector("#current-username-input");
const new_password_input = $.querySelector("#new-password-input");
const confirm_password_input = $.querySelector("#confirm-password-input");
const email_input = $.querySelector("#email-input");

const btn = $.querySelector(".submit-change-info-btn");

let UserId = null;

window.addEventListener("load", () => {
  if (localStorage.getItem("ID")) {
    UserId = localStorage.getItem("ID");
  }

  fetch(`http://localhost:4000/api/admins/${UserId}`)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      first_name_input.value = data.firstName;
      last_name_input.value = data.lastName;
      current_username_input.value = data.userName;
      email_input.value = data.email;
    })
    .catch((err) => console.log(err));
});

btn.addEventListener("click", (e) => {
  e.preventDefault();

  if(new_password_input.value == confirm_password_input.value && new_password_input.value != ''){
    let obj = {
        firstName: first_name_input.value,
        lastName: last_name_input.value,
        userName: current_username_input.value,
        password: new_password_input.value,
        email: email_input.value,
      };
      fetch(`http://localhost:4000/api/admins/${UserId}`, {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(obj),
      })
        .then((res) => console.log(res))
        .catch((err) => console.clear());
  }else{
    alert('Enter Your Password :((')
  }


});
