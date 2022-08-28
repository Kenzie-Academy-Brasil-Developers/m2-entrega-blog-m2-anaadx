import { ApiRequests } from "./requests.js";
import { Modal } from "./modal";
import { homePage } from "./homePage";

export class Delete {
    static deletePost() {
        const deleteBtn = document.querySelector('#deleteBtn')
        const modal1 = document.querySelector('.main__modais__modalDelete1')
        const modal2 = document.querySelector('.main__modais__modalDelete2')

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