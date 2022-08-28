import { ApiRequests } from "./requests.js";
import { Modal } from "./modal";
import { RenderDesktop, RenderMobile} from "./render.js"
import { UpdatePostClass } from "./edit"
import { Delete} from "./delete"

export class homePage{

    static renderHomeMobile (posts) {
        const token = localStorage.getItem("S5-10: token")
        const postsList = document.querySelector(".container__posts1")

        postsList.innerHTML = ''

        if(!token) {
            window.location.assign("../../index.html")
        }

        RenderMobile.renderPostsListMobile(posts)
    }

    static renderHomeDesktop (posts) {
        const token = localStorage.getItem("S5-10: token")
        const postsList = document.querySelector(".container__posts2")

        postsList.innerHTML = ''

        if(!token) {
            window.location.assign("../../index.html")
        }

        RenderDesktop.renderPostsListDesktop(posts)
    }

    static renderCreatePost (){
        const text = document.getElementById("inputCaixaDeTexto")
        const btnPost = document.getElementById("btnPost")

        btnPost.addEventListener("click", () => {
            

            const newPost = {
                content: text.value
            }
            
        ApiRequests.createPost(newPost)
        
        })
    }

    static logout (){
        const btnLogout = document.getElementById("btnLogout")
        btnLogout.addEventListener("click", (event) =>{
            event.preventDefault()
            localStorage.clear()
            window.location.assign("../../index.html")
        })
    }

    static async userInfo (){
        const userImg = document.getElementById("userImg")
        const userName = document.getElementById("userName")
        const user = await ApiRequests.getUser()

        userImg.src = user.avatarUrl
        userName.innerText = user.username
    }
}

const posts = await ApiRequests.getPosts("page=1")

homePage.renderHomeDesktop(posts.data)
homePage.renderHomeMobile(posts.data)
homePage.renderCreatePost()

homePage.userInfo()
homePage.logout()

Modal.showEditModal()
Modal.showDeleteModal()
Modal.closeModal()

Delete.deletePost()
UpdatePostClass.updatePost()



