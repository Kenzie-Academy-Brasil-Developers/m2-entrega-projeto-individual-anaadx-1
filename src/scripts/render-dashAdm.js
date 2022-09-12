import {
    Api
} from "./models/api.js"
import {
    Toast
} from "./tostify.js"

export class Render {

    static async renderCompaniesList() {
        let token = localStorage.getItem("S7-02: sectorName")
        let companies = await Api.getCompaniesSector(token)
        const ul = document.querySelector(".companies")
        ul.innerHTML = ''

        if (companies <= 0) {
            Toast.create("Não há empresas nesse setor", "#ff0000")
        }
        companies.forEach((companie) => {

            const card = Render.renderCard(companie)
            ul.appendChild(card)
        })

    }

    static renderCard(companie) {

        const tagLi = document.createElement("li")

        const tagH2Nome = document.createElement("h2")
        const tagPHorario = document.createElement("p")
        const tagH4Ramo = document.createElement("h4")
        const buttonDepartamentos = document.createElement("button")
        buttonDepartamentos.classList.add("buttonDepartments")
        buttonDepartamentos.classList.add("buttonAbrir")

        tagLi.key = companie.sectors.uuid
        tagLi.id = companie.uuid
        tagH2Nome.innerText = companie.name
        tagPHorario.innerText = companie.opening_hours
        tagH4Ramo.innerText = companie.sectors.description
        buttonDepartamentos.innerText = "Departamentos"
        buttonDepartamentos.id = companie.uuid

        tagLi.append(tagH2Nome, tagPHorario, tagH4Ramo, buttonDepartamentos)

        return tagLi

    }

    static async filterRenderCompanie() {
       
        const botaoBusca = document.querySelector("#btnSearchCompanie")

        botaoBusca.addEventListener("click", async () => {
            let token = localStorage.getItem("S7-02: sectorName")
            let companies = await Api.getCompaniesSector(token)
            let inputBusca = document.querySelector(".inputSearchCompanie")
            console.log(token)
            let pesquisa = await Render.filterRender(inputBusca.value, companies)
            console.log(pesquisa)
            console.log(companies)

            const ul = document.querySelector(".companies")
            ul.innerHTML = ''

            if (pesquisa <= 0) {
                Toast.create("Não há empresas com este nome", "#ff0000")
                ul.innerHTML = ''
                Render.renderCompaniesList()
            } else {
                pesquisa.forEach((companie) => {
                    const card = Render.renderCard(companie)
                    ul.appendChild(card)
                })
            }
        })
    }


    static async filterRender(valor, array) {
        return array.filter(function (value) {
            return value.name.toLowerCase().includes(valor.toLowerCase());
        })
    }


    static async renderDepartmentsList() {
        let token = localStorage.getItem("S7-02: companieId")
        let departments = await Api.getAllCompanieDepartments(token)
        const ul = document.querySelector(".departamentos")
        ul.innerHTML = ''

        if (departments <= 0) {
            Toast.create("Não há departamentos nesta empresa", "#ff0000")
        }
        departments.forEach((deparment) => {

            const card = Render.renderDepartmentCard(deparment)
            ul.appendChild(card)
        })

    }

    static renderDepartmentCard(department) {

        const tagLi = document.createElement("li")

        const tagH3Nome = document.createElement("h3")
        const tagPDescricao = document.createElement("p")
        const buttonFuncionarios = document.createElement("button")
        buttonFuncionarios.classList.add("buttonEmployees")
        buttonFuncionarios.classList.add("buttonAbrir")
        const tagDiv = document.createElement("div")
        const buttonDeletarDepartamento = document.createElement("button")
        buttonDeletarDepartamento.classList.add("buttonDeleteDep")
        buttonDeletarDepartamento.classList.add("buttonDelete1")
        const buttonEditarDepartamento = document.createElement("button")
        buttonEditarDepartamento.classList.add("buttonEditDep")
        buttonEditarDepartamento.classList.add("buttonAbrir")

        tagLi.id = department.uuid
        tagH3Nome.innerText = department.name
        tagPDescricao.innerText = department.description
        buttonFuncionarios.innerText = "Funcionários"
        buttonFuncionarios.id = department.uuid
        buttonEditarDepartamento.id = department.uuid
        buttonEditarDepartamento.innerText = "Editar"
        buttonDeletarDepartamento.id = department.uuid
        buttonDeletarDepartamento.innerText = "Deletar"

        tagDiv.append(buttonEditarDepartamento, buttonDeletarDepartamento)
        tagLi.append(tagH3Nome, tagPDescricao, buttonFuncionarios, tagDiv)

        return tagLi
    }

    static async filterRenderDepartment() {
        
        const botaoBusca = document.querySelector("#btnSearchDep")
        const ul = document.querySelector(".departamentos")

        botaoBusca.addEventListener("click", async (event) => {
            let token = localStorage.getItem("S7-02: companieId")
        let departments = await Api.getAllCompanieDepartments(token)
            event.preventDefault()
            const inputBusca = document.querySelector(".inputDepSearch")
            const pesquisa = await Render.filterRender(inputBusca.value, departments)

            if (pesquisa <= 0) {
                Toast.create("Não há departamentos com este nome", "#ff0000")
                ul.innerHTML = ''
                Render.renderDepartmentsList()
            } else {
                ul.innerHTML = ''
                pesquisa.forEach((department) => {
                    const card = Render.renderDepartmentCard(department)
                    ul.appendChild(card)
                })
            }

        })
    }

    static async renderEmployeeList() {
        let token = localStorage.getItem("S7-02: depId")
        let users = await Api.getUsers()
        console.log(users)
        const ul = document.querySelector(".listafuncionarios__ul")
        ul.innerHTML = ''

        users.forEach((user) => {
            if (user.is_admin != true && user.department_uuid == token) {
                const card = Render.renderEmployeeCard(user)
                ul.appendChild(card)
            } 
        })


    }

    static renderEmployeeCard(user) {

        const tagLi = document.createElement("li")

        const tagH2Nome = document.createElement("div")
        const tagPTipoTrabalho = document.createElement("p")
        const tagH3Nivel = document.createElement("h4")
        const button = document.createElement("button")

        tagLi.id = user.uuid
        tagH2Nome.innerText = user.username
        tagPTipoTrabalho.innerText = user.kind_of_work
        tagH3Nivel.innerText = user.professional_level
        button.innerText = "Demitir"
        button.classList.add("buttonDelete1")
        button.classList.add("demitir")
        button.id = user.uuid

        tagLi.append(tagH2Nome, tagPTipoTrabalho, tagH3Nivel, button)

        return tagLi

    }

    static async renderAvailebleEmployeeList() {
        let users = await Api.getUsers()
        const selectUser = document.getElementById("selectUser")
        selectUser.innerHTML = ""

        users.forEach((user) => {
            if(user.is_admin != true && user.department_uuid == null){
                let optionCliente = Render.renderAvailebleEmployeeCard(user)
                selectUser.appendChild(optionCliente)
            }
        });
    }

    static renderAvailebleEmployeeCard(user) {

        let{
            uuid,
            username
        } = user

        let tagOption = document.createElement("option")
        tagOption.value = uuid
        tagOption.innerText = username

        return tagOption

    }


}