import { ApiRequests } from "./requests.js";
import { Modal } from "./modal.js";
import { homePage } from "./homePage.js";

export class UpdatePostCard{ 

  static updatePost () {
    console.log("update ta ok")
    const updateBtn = document.querySelector('buttonEdit')
    const modal1 = document.querySelector('.main__modais__modalEdit1')
    const modal2 = document.querySelector('.main__modais__modalEdit2')
    const postEditContent = document.querySelector("#editPost")
    if(updateBtn){
      updateBtn.addEventListener('click', async (event) => {
        event.preventDefault()
        const updatePostId = localStorage.getItem("S5-10: postId")
        const data = {
          content: postEditContent.value
        }
        await ApiRequests.updatePost(data, updatePostId)
        modal1.classList.add('hidden')
        modal2.classList.add('hidden')
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
