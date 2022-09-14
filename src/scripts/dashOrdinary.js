import {
    Api
} from "./models/api.js"
// import {
//     Render
// } from "./render-dashOrdinary.js";
import {
    EditUser
} from "./editUser-dashOrdinary.js";

class OrdinaryDash {

    static async acessControl() {
        const token = localStorage.getItem("S7-02: token")

        if (!token) {
            window.location.assign("../../index.html")
        }

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

await EditUser.editarUsuário()
OrdinaryDash.acessControl()
OrdinaryDash.logout();
// await Render.renderUserCompanie()
console.log("oi")
let array = await Api.getDepartmentByCompanie()
console.log(array)
let outraApi = await Api.getCompanies()
console.log(outraApi)