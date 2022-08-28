import { ApiRequests } from "./requests.js";
import { Modal } from "./modal.js";
import { homePage } from "./homePage.js";

export class Delete {
    static deletePost() {
        console.log("Delete ta ok")
        const deleteBtn = document.querySelector(".buttonDelete")
        const modal1 = document.querySelector('.main__modais__modalDelete1')
        const modal2 = document.querySelector('.main__modais__modalDelete2')
        if(deleteBtn){
            deleteBtn.addEventListener('click', async (event) => {
                event.preventDefault()
                const postId = localStorage.getItem('S5-10: postId')
                await ApiRequests.deletePost(postId) 
                modal1.classList.add('hidden')
                modal2.classList.add('hidden')
                localStorage.removeItem('S5-10: postId')
    
                const posts = await ApiRequests.getPosts("page=1") 
                homePage.renderHomeMobile (posts)
                homePage.renderHomeDesktop (posts)
                Modal.showDeleteModal()
                Modal.closeModal()
            })
        }
        
    }

}