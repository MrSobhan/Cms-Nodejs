const session_dropdown_box = $.querySelector(".session-dropdown-box");

const session_name_input = $.querySelector("#session-name-input");
const session_time_input = $.querySelector("#session-time-input");
const session_price_input = $.querySelector("#session-price-input");

const session_dropdown_text = $.querySelector(".session-dropdown-text");
const session_dropdown_menu_item = $.querySelectorAll(".session-dropdown-menu-item");

const sessions = $.querySelector(".sessions");

// ? Remove Sessions

function RemoveSession(e) {
  let idRemove = e.dataset.id;
  fetch(`http://localhost:4000/api/sessions/${idRemove}`, {
    method: "DELETE",
    headers: {
      "Content-type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((data) => {
      AddToDom();
    })
    .catch((err) => console.log(err));
}

// ? Add Sessions

const btn = $.querySelector(".add-new-session-btn");

window.addEventListener("click", (e) => {
  if (e.target.id != "session-dropdown-box") {
    session_dropdown_box.classList.remove("active");
  }
});

session_dropdown_box.addEventListener("click", () => {
  session_dropdown_box.classList.add("active");
});

session_dropdown_menu_item.forEach((li) => {
  li.addEventListener("click", (e) => {
    session_dropdown_text.innerHTML = e.target.innerHTML;
  });
});

btn.addEventListener("click", (e) => {
  e.preventDefault();
  let obj = {
    title: session_name_input.value,
    time: session_time_input.value,
    isFree: !Boolean(Number(session_price_input.value)),
    course: session_dropdown_text.innerHTML,
  };

  fetch(`http://localhost:4000/api/sessions`, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(obj),
  })
    .then((res) => {
      ClearValue();
      AddToDom();
    })
    .catch((err) => console.log(err));
});

function ClearValue() {
  session_name_input.value = "";
  session_time_input.value = "";
  session_price_input.value = "";
  session_dropdown_text.innerHTML = "java script";
}

// ? Get Sessions (Add To Dom)\

function AddToDom() {
  fetch("http://localhost:4000/api/sessions")
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      sessions.innerHTML = "";
      data.forEach((e) => {
        sessions.insertAdjacentHTML(
          "beforeend",
          `<div class="session-box">
          <div>
              <h1 class="session-name-title">${e.title}</h1>
              <span class="session-category">${e.course}</span>
          </div>
          <div>
          <div>
              <span class="session-price-badge">${
                e.isFree ? "Free" : "Price"
              }</span>
              <span class="session-time">${e.time}</span>
          </div>
          <svg xmlns="http://www.w3.org/2000/svg" data-id="${
            e._id
          }" onclick="RemoveSession(this)" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
            </svg></div>

      </div>`
        );
      });
    })
    .catch((err) => console.log(err));
}

AddToDom();


