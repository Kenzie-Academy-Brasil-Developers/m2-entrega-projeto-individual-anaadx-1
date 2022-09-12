import {
    Api
} from "./models/api.js"

export class Render {

    static async renderCompaniesList() {
        let token = localStorage.getItem("S7-02: sectorName")
        let companies = await Api.getCompaniesSector(token)
        const ul = document.querySelector(".companies")
        ul.innerHTML = ''

        companies.forEach((companie) => {

            const card = Render.renderCard(companie)
            ul.appendChild(card)
        })

    }

    static renderCard(companie) {

        const tagLi = document.createElement("li")

        const tagH2Nome = document.createElement("div")
        tagH2Nome.classList.add("h2")
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

    static async filterRenderCompanie(){
        let token = localStorage.getItem("S7-02: sectorName")
        let companies = await Api.getCompaniesSector(token)
        const botaoBusca = document.querySelector("#btnSearchCompanie")
        
        botaoBusca.addEventListener("click", async () => {

        const inputBusca = document.querySelector(".inputSearchCompanie")
        const pesquisa = await Render.filterRender(inputBusca.value, companies)

        const ul = document.querySelector(".companies")
        ul.innerHTML = ''

        pesquisa.forEach((companie) => {
            const card = Render.renderCard(companie)
            ul.appendChild(card)
        })
        })  
    }

    static async filterRender(valor, array){
        return array.filter(function (value) {
            return value.name.toLowerCase().includes(valor.toLowerCase());
        })
    }

    
    static async renderDepartmentsList() {
        let token = localStorage.getItem("S7-02: companieId")
        let departments = await Api.getAllCompanieDepartments(token)
        const ul = document.querySelector(".departamentos")
        ul.innerHTML = ''

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

    static async filterRenderDepartment(){
        let token = localStorage.getItem("S7-02: companieId")
        let departments = await Api.getAllCompanieDepartments(token)
        const botaoBusca = document.querySelector("#btnSearchDep")
        
        botaoBusca.addEventListener("click", async (event) => {
        event.preventDefault()
        const inputBusca = document.querySelector(".inputDepSearch")
        const pesquisa = await Render.filterRender(inputBusca.value, departments)

        const ul = document.querySelector(".departamentos")
        ul.innerHTML = ''

        pesquisa.forEach((department) => {
            const card = Render.renderDepartmentCard(department)
            ul.appendChild(card)
        })
        })  
    }

}



