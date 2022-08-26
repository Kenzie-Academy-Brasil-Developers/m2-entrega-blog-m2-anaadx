import { ApiRequests } from "./requests.js";
import { RenderDesktop, RenderMobile} from "./render.js"

class homePage{

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
}

const posts = await ApiRequests.getPosts()

homePage.renderHomeDesktop(posts.data)
homePage.renderHomeMobile(posts.data)

