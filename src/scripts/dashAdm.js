import {
    Api
} from "./models/api.js";
import {
    Render
} from "./render-dashAdm.js";


export class DashAdm {

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
                if (user.is_admin != true) {
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

    static async registerCompanie() {
        const inputName = document.querySelector(".companieName")
        const inputHour = document.querySelector(".companieHour")
        const inputDescription = document.querySelector(".companieDescription")
        const button = document.querySelector("#btnCreateComp")

        button.addEventListener("click", async (event) => {

            event.preventDefault()

            const data = {
                name: inputName.value,
                opening_hours: inputHour.value,
                description: inputDescription.value,
                sector_uuid: localStorage.getItem("S7-02: sectorId")
            }

            await Api.createCompanies(data)
            Render.renderCompaniesList()
        })
    }

    static async showCompanies() {
        const botoesSetores = document.querySelector(".setores__buttons")
        const setores = await Api.getSectorsAll()
        const modalEmpresas = document.querySelector(".modalEmpresas")
        const modalSectors = document.querySelector(".setores")

        botoesSetores.addEventListener("click", async (event) => {
            event.preventDefault()
            const target = event.target

            if (target.innerText == "Alimenticio") {
                localStorage.removeItem("S7-02: sectorId")
                localStorage.removeItem("S7-02: sectorName")

                setores.forEach((setor) => {
                    if (setor.description == "Alimenticio")
                        localStorage.setItem("S7-02: sectorId", setor.uuid)
                    localStorage.setItem("S7-02: sectorName", "Alimenticio")

                })
                Render.renderCompaniesList()


                modalEmpresas.classList.remove("hidden")
                modalSectors.classList.add("hidden")

            }
            if (target.innerText == "Varejo") {
                localStorage.removeItem("S7-02: sectorId")
                localStorage.removeItem("S7-02: sectorName")

                setores.forEach((setor) => {
                    if (setor.description == "Varejo")
                        localStorage.setItem("S7-02: sectorId", setor.uuid)
                    localStorage.setItem("S7-02: sectorName", "Varejo")
                })
                Render.renderCompaniesList()

                modalEmpresas.classList.remove("hidden")
                modalSectors.classList.add("hidden")

            }
            if (target.innerText == "Textil") {
                localStorage.removeItem("S7-02: sectorId")
                localStorage.removeItem("S7-02: sectorName")

                setores.forEach((setor) => {
                    if (setor.description == "Textil")
                        localStorage.setItem("S7-02: sectorId", setor.uuid)
                    localStorage.setItem("S7-02: sectorName", "Textil")
                })
                Render.renderCompaniesList()

                modalEmpresas.classList.remove("hidden")
                modalSectors.classList.add("hidden")
            }
            if (target.innerText == "Manufatura") {
                localStorage.removeItem("S7-02: sectorId")
                localStorage.removeItem("S7-02: sectorName")

                setores.forEach((setor) => {
                    if (setor.description == "Manufatura")
                        localStorage.setItem("S7-02: sectorId", setor.uuid)
                        localStorage.setItem("S7-02: sectorName", "Manufatura")
                })
                Render.renderCompaniesList()

                modalEmpresas.classList.remove("hidden")
                modalSectors.classList.add("hidden")
            }
            if (target.innerText == "Aeroespacial") {
                localStorage.removeItem("S7-02: sectorId")
                localStorage.removeItem("S7-02: sectorName")

                setores.forEach((setor) => {
                    if (setor.description == "Aeroespacial")
                        localStorage.setItem("S7-02: sectorId", setor.uuid)
                    localStorage.setItem("S7-02: sectorName", "Aeroespacial")
                })
                Render.renderCompaniesList()

                modalEmpresas.classList.remove("hidden")
                modalSectors.classList.add("hidden")
            }
            if (target.innerText == "Automotiva") {
                localStorage.removeItem("S7-02: sectorId")
                localStorage.removeItem("S7-02: sectorName")

                setores.forEach((setor) => {
                    if (setor.description == "Automotiva")
                        localStorage.setItem("S7-02: sectorId", setor.uuid)
                    localStorage.setItem("S7-02: sectorName", "Automotiva")
                })
                Render.renderCompaniesList()

                modalEmpresas.classList.remove("hidden")
                modalSectors.classList.add("hidden")
            }
            if (target.innerText == "TI") {
                localStorage.removeItem("S7-02: sectorId")
                localStorage.removeItem("S7-02: TI")

                setores.forEach((setor) => {
                    if (setor.description == "Alimenticio")
                        localStorage.setItem("S7-02: sectorId", setor.uuid)
                    localStorage.setItem("S7-02: sectorName", "TI")
                })
                Render.renderCompaniesList()

                modalEmpresas.classList.remove("hidden")
                modalSectors.classList.add("hidden")
            }
            if (target.innerText == "Atacado") {
                localStorage.removeItem("S7-02: sectorId")
                localStorage.removeItem("S7-02: sectorName")

                setores.forEach((setor) => {
                    if (setor.description == "Atacado")
                        localStorage.setItem("S7-02: sectorId", setor.uuid)
                    localStorage.setItem("S7-02: sectorName", "Atacado")
                })
                Render.renderCompaniesList()

                modalEmpresas.classList.remove("hidden")
                modalSectors.classList.add("hidden")
            }

        })
    }

    static async registerDepartment() {
        const inputName = document.querySelector(".departmentName")
        const inputDescription = document.querySelector(".departmentDescription")
        const button = document.querySelector("#btnCreateDep")

        button.addEventListener("click", async (event) => {

            event.preventDefault()

            const data = {
                name: inputName.value,
                description: inputDescription.value,
                company_uuid: localStorage.getItem("S7-02: companieId")
            }
            await Api.createDepartments(data)
            await Render.renderDepartmentsList()
        })
    }

    static async editDeleteEmployeeDepartment() {
        const modalEdit = document.querySelector(".editDep")
        const inputDescriptionDep = document.querySelector(".inputDepEdit")
        const modalFuncionarios = document.querySelector(".modalFuncionarios")
        const buttonModalEditDep = document.querySelector("#btnEditar")
        const ulDep = document.querySelector(".departamentos")

        ulDep.addEventListener("click", async (event) => {
            event.preventDefault()
            const target = event.target
            console.log(target)

            localStorage.removeItem("S7-02: depId")
            localStorage.setItem("S7-02: depId", target.id)
            const tokenDep = localStorage.getItem("S7-02: depId")

            if (target.classList == "buttonEditDep") {
                modalEdit.classList.remove("hidden")

                const data = {
                    description: inputDescriptionDep.value,
                }
                console.log(data)

                buttonModalEditDep.addEventListener("click", async (event) => {
                    event.preventDefault()
                    await Api.editDepDescription(tokenDep, data)
                    await Render.renderDepartmentsList()
                })
            }
        
            if (target.classList == "buttonDeleteDep") {
                await Api.deleteDepartment(tokenDep)
                await Render.renderDepartmentsList()
            }

            if (target.classList == "buttonEmployees") {
                modalFuncionarios.classList.remove("hidden")
                const backToPage = document.querySelector(".backToPage")
                backToPage.addEventListener("click", async (event) => {
                    event.preventDefault()
                    modalFuncionarios.classList.add("hidden")
                })
            }

        })
    }

    static async showDepartments() {
        const modalEmpresas = document.querySelector(".modalEmpresas")
        const modalDepartamentos = document.querySelector(".modalDepartamentos")
        const ulEmpresas = document.querySelector(".companies")

        ulEmpresas.addEventListener("click", async (event) => {
            event.preventDefault()
            const target = event.target
            localStorage.removeItem("S7-02: companieId")
            localStorage.setItem("S7-02: companieId", target.id)
            Render.renderDepartmentsList()
            modalDepartamentos.classList.remove("hidden")
            modalEmpresas.classList.add("hidden")
        })

    }

    static closeModal() {
        const sectorModal = document.querySelector(".setores")
        const backToSectorButton = document.querySelector(".backToSectors")
        const companieModal = document.querySelector(".modalEmpresas")
        const backToCompanieButton = document.querySelector(".closeDepartments")
        const depModal = document.querySelector(".modalDepartamentos")
        const editModal = document.querySelector(".editDep")
        const closeEditDepModal = document.querySelector(".closeEditModal")
        const backToPage = document.querySelector(".backToPage")

        backToSectorButton.addEventListener("click", async (event) => {
            event.preventDefault()
            sectorModal.classList.remove("hidden")
            companieModal.classList.add("hidden")
        })

        backToCompanieButton.addEventListener("click", async (event) => {
            event.preventDefault()
            companieModal.classList.remove("hidden")
            depModal.classList.add("hidden")
        })

        closeEditDepModal.addEventListener("click", async (event) => {
            event.preventDefault()
            editModal.classList.add("hidden")
        })

        backToPage.addEventListener("click", async (event) => {
            event.preventDefault()
            modalFuncionarios.classList.add("hidden")
        })

    }
}

DashAdm.logout()
await DashAdm.acessControl()
DashAdm.showCompanies()
await DashAdm.registerCompanie()
await Render.filterRenderCompanie()
DashAdm.showDepartments()
DashAdm.registerDepartment()
DashAdm.editDeleteEmployeeDepartment()
await Render.filterRenderDepartment()
DashAdm.closeModal()