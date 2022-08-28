import { ApiRequests } from "./requests.js";
import { Modal } from "./modal";
import { homePage } from "./homePage";

export class updatePostClass { 

    static updatePost () {
        const updateBtn = document.querySelector('#editBtn')
        const modal1 = document.querySelector('.main__modais__modalEdit1')
        const modal2 = document.querySelector('.main__modais__modalEdit2')
        const postEditContent = document.querySelector("#editPost")

    
        updateBtn.addEventListener('click', async (event) => {
          event.preventDefault()
          const updatePostId = localStorage.getItem("S5-10: postId")
    
          const data = {
            content: postEditContent.value
            
          }
    
          await ApiRequests.updatePost(data, updatePostId) //precisa passar o id por parametro será?
          modal1.classList.add('hidden')
          modal2.classList.add('hidden')
          localStorage.removeItem("S5-10: postId")
    
          const posts = await ApiRequests.getPosts() //onde pega a Page que precisa passar por parametro?
          homePage.renderHomeMobile (posts)
          homePage.renderHomeDesktop (posts)
          Modal.showEditModal()
          Modal.closeModal()
        })
      }
}
