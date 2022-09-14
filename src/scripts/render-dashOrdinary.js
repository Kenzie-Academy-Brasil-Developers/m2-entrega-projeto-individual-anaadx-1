// import {
//     Api
// } from "./models/api.js";

// export class Render {

//     static async renderUserCompanie() {
//         let userId = localStorage.getItem("S7-02: userLog")
//         let usersDepartment = await Api.getUsersByDepartament()
//         console.log(usersDepartment)
//         let companiesDepartment = await Api.getDepartmentByCompanie()
//         console.log(companiesDepartment)
//         const divUser = document.querySelector(".infoUser")
//         const divCompanieDepartment = document.querySelector(".infoCompanieDepartment")
//         const ulEemployees = document.querySelector(".listaFun")

//         divUser.innerHTML = ''
//         divCompanieDepartment.innerHTML = ''
//         ulEemployees.innerHTML = ''

//         usersDepartment.forEach((user) => {
//             if (user.users.uuid == userId) {
//                 localStorage.setItem("S7-02: depId", user.users.department_uuid)
//                 const card = Render.renderCardUser(user)
//                 divUser.appendChild(card)
//             } else {
//                 const card = Render.renderCardUser(user)
//                 ulEemployees.appendChild(card)
//             }
//         })

//         companiesDepartment.forEach((info) => {
//             let depId = localStorage.getItem("S7-02: depId")
//             if (depId == info.uuid) {
//                 const card = Render.renderCardCompanie(info)
//                 divCompanieDepartment.appendChild(card)
//             }
//         })

//     }

//     static renderCardUser(user) {
//         let userId = localStorage.getItem("S7-02: userLog")

//         let {
//             email,
//             username,
//             professional_level,
//             kind_of_work,
//         } = user.users

//         if (user.uuid == userId) {

//         }
//         const tagDiv = document.createElement("div")
//         const tagLi = document.createElement("li")
//         const tagH2Nome = document.createElement("h2")
//         const tagH3Email = document.createElement("h3")
//         const tagH3Modalidade = document.createElement("h3")
//         const tagH3ProfessionalLevel = document.createElement("h3")

//         tagH2Nome.innerText = username
//         tagH3Email.innerText = email
//         tagH3Modalidade.innerText = kind_of_work
//         tagH3ProfessionalLevel.innerText = professional_level

//         if (user.uuid == userId) {
//             tagDiv.append(tagH2Nome, tagH3Email, tagH3Modalidade, tagH3ProfessionalLevel)
//             return tagDiv
//         } else {
//             tagLi.append(tagH2Nome, tagH3Email, tagH3Modalidade, tagH3ProfessionalLevel)
//             return tagLi
//         }
//     }

//     static async renderCardCompanie(info) {

//         let {
//             name,
//             opening_hours,
//             description,
//         } = info

//         const tagDivMaior = document.createComment("div")
//         const tagDivEmpresa = document.createElement("div")
//         const tagDivDepartment = document.createElement("div")
//         const tagH2CompanieName = document.createElement("h2")
//         const tagH2DepartmentName = document.createElement("h2")
//         const tagPHour = document.createElement("p")
//         const tagPDescription = document.createElement("p")
//         const tagPDescriptionDep = document.createElement("p")

//         tagH2CompanieName.innerText = name
//         tagH2DepartmentName = info.departments.name
//         tagPHour = opening_hours
//         tagPDescription = description
//         tagPDescriptionDep = info.departments.description

//         tagDivEmpresa.append(tagH2CompanieName, tagPHour, tagPDescription)
//         tagDivDepartment.append(tagH2DepartmentName, tagPDescriptionDep)
//         tagDivMaior.append(tagDivEmpresa, tagDivDepartment)

//     }
// }

