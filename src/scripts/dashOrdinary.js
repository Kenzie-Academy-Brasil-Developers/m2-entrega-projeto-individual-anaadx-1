import {
    Api
} from "./models/api.js";
import {
    EditUser
} from "./editUser.js";

class OrdinaryDash {

    static async acessControl() {
        const token = localStorage.getItem("S7-02: token")
        const users = await Api.getUsers()
        const modalEmpresas = document.querySelector(".modalEmpresas")

        modalEmpresas.classList.add("hidden")

        if (!token) {
            window.location.assign("../../index.html")
        }


        users.forEach((user) => {
            if (user.token == token) {
                if (user.is_admin != false) {
                    window.location.assign("../../index.html")
                }
            }
        })

    }

    static logout() {
        const btnLogout = document.querySelector(".logout")
        btnLogout.addEventListener("click", (event) => {
            event.preventDefault()
            localStorage.clear()
            window.location.assign("../../index.html")
        })
    }
}

EditUser.editarUsuário()
OrdinaryDash.acessControl()
OrdinaryDash.logout();