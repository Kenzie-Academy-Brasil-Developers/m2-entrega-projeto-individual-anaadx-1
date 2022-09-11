import {
    Api
} from "./models/api.js";

class RegisterProfileClass {

    static async createProfile() {

        const nameInput = document.querySelector(".nameRegister")
        const emailInput = document.querySelector(".emailRegister")
        const passwordInput = document.querySelector(".passwordRegister")
        const workInput = document.querySelector(".workRegister")
        const buttonRegister = document.querySelector(".buttonRegister")
        const buttonLoginPage = document.querySelector(".buttonLoginPage")
        const buttonLoginPage2 = document.querySelector(".buttonLoginPage2")
        const buttonLoginPage3 = document.querySelector(".buttonLoginPage3")
        

        buttonRegister.addEventListener("click", async (event) => {

                event.preventDefault()

                const data = {
                    password: passwordInput.value,
                    email: emailInput.value, 
                    professional_level: workInput.value, 
                    username: nameInput.value
                }
            
             const cadastro = await Api.cadastrarUsuario(data)
             if(cadastro.email != undefined){
                window.location.assign("../../index.html")
             }

        })

        buttonLoginPage.addEventListener("click", (event) => {
            event.preventDefault()
            window.location.assign("../../index.html")
        })

        buttonLoginPage2.addEventListener("click", (event) => {
            event.preventDefault()
            window.location.assign("../../index.html")
        })

        buttonLoginPage3.addEventListener("click", (event) => {
            event.preventDefault()
            window.location.assign("../../index.html")
        })
}
}

await RegisterProfileClass.createProfile()