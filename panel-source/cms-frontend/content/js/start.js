const $  = document

const admin_id = $.querySelector('.admin-id')
const admin_email = $.querySelector('.admin-email')
const sign_out_btn = $.querySelector('.sign-out-btn')

const fistname_box = $.querySelector('#fistname_box')
const lastname_box = $.querySelector('#lastname_box')

const adminIdMain = $.querySelector('#adminIdMain')
const adminemailMain = $.querySelector('#adminemailMain')

window.addEventListener('load' , ()=>{
    if(localStorage.getItem('isLogin') == null || localStorage.getItem('isLogin') == false){
        location.href = "http://127.0.0.1:8082/login.html"
    }
    console.log("Started");
    fetch(`http://localhost:4000/api/admins/${localStorage.getItem('ID')}`)
      .then((res) => res.json())
      .then(data =>{
        $.title = `Panel - ${data.userName}`
        admin_id.innerHTML = data.firstName + " " + data.lastName
        adminIdMain.innerHTML = data.firstName + " " + data.lastName

        admin_email.innerHTML = data.email
        adminemailMain.innerHTML = data.email

        fistname_box.innerHTML = data.firstName
        lastname_box.innerHTML = data.lastName
      })
      .catch((err) => console.clear());


})


sign_out_btn.addEventListener('click' , ()=>{
    localStorage.clear()
    location.href = "http://127.0.0.1:8082/login.html"
})