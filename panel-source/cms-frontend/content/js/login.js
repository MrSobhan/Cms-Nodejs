const $  = document


const username_input = $.querySelector('#username-input')
const password_input = $.querySelector('#password-input')
const btn = $.querySelector('.submit-form-btn')

window.addEventListener('load' , ()=>{
    if(localStorage.getItem('isLogin') != null && localStorage.getItem('isLogin') == true){
        location.href = "http://127.0.0.1:8082/panel-users.html"
    }
})

btn.addEventListener('click' , (e)=>{
    e.preventDefault()
    if(username_input.value && password_input.value){
        fetch("http://localhost:4000/api/admins")
    .then((res) => res.json())
    .then((data) => {
      data.forEach(admin => {
        if(admin.userName = username_input.value && admin.password == String(password_input.value)){
            localStorage.setItem('isLogin' , true)
            localStorage.setItem('ID' , `${admin._id}`)
            location.href = "http://127.0.0.1:8082/panel-users.html"
        }else{
            localStorage.setItem('isLogin' , false)
            localStorage.setItem('ID' , "")
            console.log("bad");
        }
      });
      
    })
    .catch((err) => console.log(err));
    }else{
        alert("Enter Your Username Ageni :((")
    }
})