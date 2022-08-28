import { ApiRequests } from "./requests.js";
import { Modal } from "./modal.js";
import { homePage } from "./homePage.js";

export class Delete {
    static deletePost() {
        console.log("Delete ta ok")
        const deleteBtnPost1 = document.querySelector(".buttonDelete1")
        const deleteBtnPost2 = document.querySelector(".buttonDelete2")
        const deleteBtn1 = document.querySelector("#deleteBtn1")
        const deleteBtn2 = document.querySelector("#deleteBtn2")
        const modal1 = document.querySelector('.main__modais__modalDelete1')
        const modal2 = document.querySelector('.main__modais__modalDelete2')
        if(deleteBtnPost1){
            deleteBtn1.addEventListener('click', async (event) => {
                event.preventDefault()
                const postId = localStorage.getItem('S5-10: postId')
                await ApiRequests.deletePost(postId) 
                modal1.classList.add('hidden')
                localStorage.removeItem('S5-10: postId')
    
                const posts = await ApiRequests.getPosts("page=1") 
                homePage.renderHomeMobile (posts)
                homePage.renderHomeDesktop (posts)
                Modal.showDeleteModal()
                Modal.closeModal()
            })

            if(deleteBtnPost2){
                deleteBtn2.addEventListener('click', async (event) => {
                    event.preventDefault()
                    const postId = localStorage.getItem('S5-10: postId')
                    await ApiRequests.deletePost(postId) 
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
}