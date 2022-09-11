import { Api } from "./models/api.js"

export class CreateCompanie{

    static async createNewCompanie(body){

        const nameInput = document.querySelector("#name")
        const openingHourInput = document.querySelector("#openingHour")
        const descriptionInput = document.querySelector("#description")
        const buttonCreate = document.querySelector("#btnCreate")
        const token = localStorage.getItem("S7-02: sectionId")
        //quando fizer o filtro, quando selecionar o setor remover o section id antigo e setar um novo
        

        buttonCreate.addEventListener("click", async (event) => {

                event.preventDefault()

                const data = {
                    
                        name: nameInput.value,
                        opening_hours: openingHourInput.value,
                        description: descriptionInput.value,
                        sector_uuid: token

                }
            
            await Api.createCompanies(data)
        })
}
}