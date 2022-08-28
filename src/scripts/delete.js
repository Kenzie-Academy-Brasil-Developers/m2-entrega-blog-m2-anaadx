import { ApiRequests } from "./requests.js";
import { Modal } from "./modal.js"

export class Delete {
    static deletePostMobile() {
        const deleteModalBtn = document.querySelector(".buttonDelete")
        const modal = document.querySelector('.main__modais__modalDelete1')
        const deleteBtn = document.getElementById("main__modais__modalDelete1__buttonDelete deleteBtn")
        
        if(deleteModalBtn){

            deleteBtn.addEventListener('click', async (event) => {
                event.preventDefault()
                const postId = localStorage.getItem('S5-10: postId')
                await ApiRequests.deletePost(postId) 
                modal.classList.add('hidden')
                localStorage.removeItem('S5-10: postId')
                window.location.assign("../pages/homePage.html")
                
            })
        }
        
    }
    static deletePostDesktop() {
        const deleteModalBtn = document.querySelector(".buttonDelete")
        const modal = document.querySelector('.main__modais__modalDelete2')
        const deleteBtn = document.getElementById("main__modais__modalDelete2__buttonDelete deleteBtn")
        
        if(deleteModalBtn){

            deleteBtn.addEventListener('click', async (event) => {
                event.preventDefault()
                const postId = localStorage.getItem('S5-10: postId')
                await ApiRequests.deletePost(postId) 
                modal.classList.add('hidden')
                localStorage.removeItem('S5-10: postId')
                window.location.assign("../pages/homePage.html")
                
            })
        }
        
    }

}