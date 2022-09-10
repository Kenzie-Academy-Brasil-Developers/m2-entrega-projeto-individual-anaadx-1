import {
  Api
} from "./models/api.js";

export class Modal {

  static renderModalPost(array){

      const sectionModal = document.querySelector(".containerModalPost")
      const modalButton = document.querySelectorAll(".buttonAbrirPost")

      modalButton.forEach((button) =>{
        button.addEventListener("click", (event) =>{
          event.preventDefault() 
          array.results.forEach((post) =>{
            if(button.id == post.uuid){
            
              sectionModal.innerHTML = " "
              const card = Modal.createModalPost(post)
              sectionModal.appendChild(card)
              sectionModal.classList.toggle('hidden')

              const closeBtnModalPost = document.querySelector(".modalCloseButton")   
              closeBtnModalPost.addEventListener('click', () => {
      
                sectionModal.classList.add('hidden')
                
              })
            }
          })
        })
      })
    }
      

  static createModalPost(post){
      const tagDiv1 = document.createElement("div")
      const tagDiv2 = document.createElement("div")
      tagDiv2.classList.add("imgEscritoEButton")
      const tagDiv3 = document.createElement("div")
      tagDiv3.classList.add("imgEscrito")
      const tagFigure = document.createElement("figure")
      const tagImg = document.createElement("img")
      const tagDiv4 = document.createElement("div")
      tagDiv4.classList.add("nomeProfissao")
      const tagH3Nome = document.createElement("h3")
      tagH3Nome.classList.add("title2")
      const tagPProfissao = document.createElement("p")
      tagPProfissao.classList.add("text2")
      const tagButtonX = document.createElement("button")
      tagButtonX.classList.add("modalCloseButton")
      const tagDiv5 = document.createElement("div")
      tagDiv5.classList.add("containerModalPost__escritoPost")
      const tagH2Titulo = document.createElement("h2")
      tagH2Titulo.classList.add("title1")
      const tagPEscritoPost = document.createElement("p")
      tagPEscritoPost.classList.add("text1")

      tagImg.src = post.author.image
      tagH3Nome.innerText = post.author.username
      tagH2Titulo.innerText = post.title
      tagPProfissao.innerText = post.author.work_at
      tagButtonX.innerText = "X"
      tagH2Titulo.innerText = post.title
      tagPEscritoPost.innerText = post.description

      tagFigure.appendChild(tagImg)
      tagDiv4.append(tagH3Nome, tagPProfissao)
      tagDiv3.append(tagFigure, tagDiv4)
      tagDiv2.append(tagDiv3, tagButtonX)
      tagDiv5.append(tagH2Titulo, tagPEscritoPost)
      tagDiv1.append(tagDiv2, tagDiv5)
      

      return tagDiv1
  }
}

const posts = await Api.getPosts()
Modal.renderModalPost(posts)