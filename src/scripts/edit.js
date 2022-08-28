import { ApiRequests } from "./requests.js";
import { Modal } from "./modal.js";
import { homePage } from "./homePage.js";

export class UpdatePostClass { 

  static updatePost () {
    console.log("update ta ok")
    const updatePostBtn1 = document.querySelector('buttonEdit1')
    const updatePostBtn2 = document.querySelector('buttonEdit2')
    const updateBtn1 = document.querySelector('buttonEdit2')
    const updateBtn2 = document.querySelector('buttonEdit2')
    const modal1 = document.querySelector('.main__modais__modalEdit1')
    const modal2 = document.querySelector('.main__modais__modalEdit2')
    const postEditContent = document.querySelector("#editPost")
    
    if(updatePostBtn1){
      updateBtn1.addEventListener('click', async (event) => {
        event.preventDefault()
        const updatePostId = localStorage.getItem("S5-10: postId")
        const data = {
          content: postEditContent.value
        }
        await ApiRequests.updatePost(data, updatePostId)
        modal1.classList.add('modalHidden')
      
        localStorage.removeItem("S5-10: postId")
        const posts = await ApiRequests.getPosts("page=1")
        homePage.renderHomeMobile (posts)
        homePage.renderHomeDesktop (posts)
        Modal.showEditModal()
        Modal.closeModal()
      })
    }

    if(updatePostBtn2){
      updateBtn2.addEventListener('click', async (event) => {
        event.preventDefault()
        const updatePostId = localStorage.getItem("S5-10: postId")
        const data = {
          content: postEditContent.value
        }
        await ApiRequests.updatePost(data, updatePostId)
        modal2.classList.add('modalHidden')
      
        localStorage.removeItem("S5-10: postId")
        const posts = await ApiRequests.getPosts("page=1")
        homePage.renderHomeMobile (posts)
        homePage.renderHomeDesktop (posts)
        Modal.showEditModal()
        Modal.closeModal()
      })
    }
}
}
