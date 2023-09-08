const users_wrap = $.querySelector(".users-wrap");

// ! Form Delete

const modal_remove = $.querySelector(".modal-remove");
const unaccept_btn = $.querySelector(".unaccept-btn");
const btnRemoveUser = $.querySelector(".btnRemoveUser");

// ? Form Edit

const modal_edit = $.querySelector(".modal-edit");
const btnEditUser = $.querySelector(".btnEditUser");

const username_input = $.querySelector("#username-input");
const first_name_input = $.querySelector("#first-name-input");
const last_name_input = $.querySelector("#last-name-input");

const username_message = $.querySelector(".username-message");
const first_name_message = $.querySelector(".first-name-message");
const last_name_message = $.querySelector(".last-name-message");

const username_group = $.querySelector(".username-group");
const first_name_group = $.querySelector(".first-name-group");
const last_name_group = $.querySelector(".last-name-group");

let username_valid = false;
let firstname_valid = false;
let lastname_valid = false;

let idRemove = null;
let idEdit = null;

window.addEventListener("load", () => {
  AddUserDom();
});

// * fetch Data User

function AddUserDom() {
  fetch("http://localhost:4000/api/users")
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      users_wrap.innerHTML = "";
      data.forEach((e) => {
        users_wrap.insertAdjacentHTML(
          "beforeend",
          `<div class="user-box">
                    <div class="user-box_left">
                        <img src="content/img/profile/banana.png" class="user-profile-box" alt="">
                        <div class="user-detail">
                            <h1 class="user-id">
                                <span>${e.userName} <!-- username --> </span>
                                <span class="user-history"> ${
                                  e.created_AT
                                } <!-- history --> </span>
                            </h1>
                            <h3 class="user-name">${
                              e.firstName + " " + e.lastName
                            } <!-- user name (first name and last name) --> </h3>
                        </div>
                    </div>

                    <div class="user-btns-group">
                        <!-- ! ------------------------------ edit btn ------------------------------- ! -->
                        <button class="user-edit-btn" data-id="${
                          e._id
                        }" onclick="EditUser(this)">
                            edit
                        </button>
                        <!-- ! ----------------------------- remove btn ------------------------------ ! -->
                        <button class="user-remove-btn" data-id="${
                          e._id
                        }" onclick="RemoveUser(this)">
                            remove
                        </button>
                    </div>
                </div>`
        );
      });
    })
    .catch((err) => console.log(err));
}

// * Remove Data User

function RemoveUser(btn) {
  idRemove = btn.dataset.id;
  modal_remove.classList.add("visible");
}

unaccept_btn.addEventListener("click", () => {
  modal_remove.classList.remove("visible");
});

btnRemoveUser.addEventListener("click", () => {
  modal_remove.classList.remove("visible");
  fetch(`http://localhost:4000/api/users/${idRemove}`, {
    method: "DELETE",
    headers: {
      "Content-type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      AddUserDom();
    })
    .catch((err) => console.log(err));
});

// * Edit Data User

function EditUser(btn) {
  idEdit = btn.dataset.id;
  modal_edit.classList.add("visible");
}

username_input.addEventListener("keyup", () => {
  if (username_input.value.length >= 3) {
    username_valid = true;
    username_message.innerHTML = "valid message";
    username_message.classList.add("valid-message");
    username_message.classList.remove("invalid-message");

    username_group.classList.add("valid");
    username_group.classList.remove("invalid");
  } else {
    username_valid = false;
    username_message.innerHTML = "invalid message";
    username_message.classList.remove("valid-message");
    username_message.classList.add("invalid-message");

    username_group.classList.remove("valid");
    username_group.classList.add("invalid");
  }
});
first_name_input.addEventListener("keyup", () => {
  if (first_name_input.value.length >= 3) {
    firstname_valid = true;
    first_name_message.innerHTML = "valid message";
    first_name_message.classList.add("valid-message");
    first_name_message.classList.remove("invalid-message");

    first_name_group.classList.add("valid");
    first_name_group.classList.remove("invalid");
  } else {
    firstname_valid = false;
    first_name_message.innerHTML = "invalid message";
    first_name_message.classList.remove("valid-message");
    first_name_message.classList.add("invalid-message");

    first_name_group.classList.remove("valid");
    first_name_group.classList.add("invalid");
  }
});
last_name_input.addEventListener("keyup", () => {
  if (last_name_input.value.length >= 3) {
    lastname_valid = true;
    last_name_message.innerHTML = "valid message";
    last_name_message.classList.add("valid-message");
    last_name_message.classList.remove("invalid-message");

    last_name_group.classList.add("valid");
    last_name_group.classList.remove("invalid");
  } else {
    lastname_valid = false;
    last_name_message.innerHTML = "invalid message";
    last_name_message.classList.remove("valid-message");
    last_name_message.classList.add("invalid-message");

    last_name_group.classList.remove("valid");
    last_name_group.classList.add("invalid");
  }
});

btnEditUser.addEventListener("click", (e) => {
  e.preventDefault();
  modal_edit.classList.remove("visible");
  if (firstname_valid && lastname_valid && username_valid) {
    let obj = {
      firstName: first_name_input.value,
      lastName: last_name_input.value,
      userName: username_input.value,
      profile: "img/img/img",
    };
    fetch(`http://localhost:4000/api/users/${idEdit}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(obj),
    })
      .then((res) => AddUserDom())
      .catch((err) => console.clear());
    
      
  }
});
