import { Api } from "./models/api.js"

class LoginPage {

    static async login() {
        
        const emailInput = document.getElementById("emailLogin")
        const passwordInput = document.getElementById("passwordLogin")
        const btnLogin = document.getElementById("btnLogin")
        const btnRegisterPage = document.querySelector(".btnRegisterPage")
        const btnRegisterPage2 = document.querySelector(".btnRegisterPage2")
        const btnCloseModal = document.querySelector(".closeModal")
        const modal = document.querySelector(".modal")

        btnLogin.addEventListener("click", async (event) => {
            event.preventDefault()
            const data = {
                email: emailInput.value,
                password: passwordInput.value
            }
            const resultadoApi = await Api.login(data)

            if(resultadoApi.token) {
                if(resultadoApi.is_admin == true){
                    window.location.assign("src/pages/dashAdm.html")
                }else{
                    window.location.assign("src/pages/dashOrdinary.html")
                }
            }else{
                modal.classList.toggle('hidden')
            }
        })

        btnRegisterPage.addEventListener("click", (event) => {
            event.preventDefault()
            console.log("clicou")
            window.location.assign("src/pages/register.html")
        })

        btnRegisterPage2.addEventListener("click", (event) => {
            event.preventDefault()
            console.log("clicou")
            window.location.assign("src/pages/register.html")
        })

        btnCloseModal.addEventListener("click", (event) => {
            event.preventDefault()
            modal.classList.add("hidden")
        })
    }
}

await LoginPage.login()



