import {
    Api
} from "./models/api.js";

export class EditUser {

    static async editarUsuário() {
        const inputName = document.querySelector(".userName")
        const inputEmail = document.querySelector(".userEmail")
        const inputPassword = document.querySelector(".userPassword")
        const button = document.querySelector("#editUser")

        button.addEventListener("click", async (event) => {

            event.preventDefault()

            const data = {
                username: inputName.value,
                email: inputEmail.value,
                password: inputPassword.value
            }
            await Api.updateUserInfo(data)
        })
    }
}