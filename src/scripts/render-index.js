import { Api } from "./models/api.js"

export class Render {

    static renderCompaniesList(array) {
        const ulAlimenticio = document.querySelector(".Alimenticio")
        const ulVarejo = document.querySelector(".Varejo")
        const ulTextil = document.querySelector(".Textil")
        const ulManufatura = document.querySelector(".Manufatura")
        const ulAeroespacial = document.querySelector(".Aeroespacial")
        const ulAutomotiva = document.querySelector(".Automotiva")
        const ulTI = document.querySelector(".TI")
        const ulAtacado = document.querySelector(".Atacado")

        array.forEach((companie) => {
            if (companie.sectors.description == "Alimenticio") {
                const card = Render.renderCard(companie)
                ulAlimenticio.appendChild(card)
            }

            if (companie.sectors.description == "Varejo") {
                const card = Render.renderCard(companie)
                ulVarejo.appendChild(card)
            }

            if (companie.sectors.description == "Textil") {
                const card = Render.renderCard(companie)
                ulTextil.appendChild(card)
            }

            if (companie.sectors.description == "Manufatura") {
                const card = Render.renderCard(companie)
                ulManufatura.appendChild(card)
            }

            if (companie.sectors.description == "Aeroespacial") {
                const card = Render.renderCard(companie)
                ulAeroespacial.appendChild(card)
            }

            if (companie.sectors.description == "Automotiva") {
                const card = Render.renderCard(companie)
                ulAutomotiva.appendChild(card)
            }

            if (companie.sectors.description == "TI") {
                const card = Render.renderCard(companie)
                ulTI.appendChild(card)
            }

            if (companie.sectors.description == "Atacado") {
                const card = Render.renderCard(companie)
                ulAtacado.appendChild(card)
            }
        })
    }


    static renderCard(companie) {

        const tagLi = document.createElement("li")

        const tagH2Nome = document.createElement("div")
        tagH2Nome.classList.add("h2")
        const tagPDescricao = document.createElement("p")
        
        tagLi.key = companie.sectors.uuid
        tagLi.id = companie.uuid
        tagH2Nome.innerText = companie.name
        tagPDescricao.innerText = companie.description

        tagLi.append(tagH2Nome,tagPDescricao)
    
        return tagLi

    }

    static async renderHome() {

        const ulAlimenticio = document.querySelector(".Alimenticio")
        const ulVarejo = document.querySelector(".Varejo")
        const ulTextil = document.querySelector(".Textil")
        const ulManufatura = document.querySelector(".Manufatura")
        const ulAeroespacial = document.querySelector(".Aeroespacial")
        const ulAutomotiva = document.querySelector(".Automotiva")
        const ulTI = document.querySelector(".TI")
        const ulAtacado = document.querySelector(".Atacado")

        const companies = await Api.getCompanies()

        ulAlimenticio.innerHTML = ''
        ulVarejo.innerHTML = ''
        ulTextil.innerHTML = ''
        ulManufatura.innerHTML = ''
        ulAutomotiva.innerHTML = ''
        ulAeroespacial.innerHTML = ''
        ulTI.innerHTML = ''
        ulAtacado.innerHTML = ''

        Render.renderCompaniesList(companies)
    }
}

await Render.renderHome()
