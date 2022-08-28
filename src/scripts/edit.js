import { ApiRequests } from "./requests.js";
import { Modal } from "./modal.js"


export class UpdatePostCard { 

  static update () {
    const updateModalBtn = document.querySelector('.buttonEdit')
    const modal1 = document.querySelector('.main__modais__modalEdit1')
    const modal2 = document.querySelector('.main__modais__modalEdit2')
    const postEditContent = document.getElementById("main__modais__modalEdit__input editPost")
    const updateBtn = document.querySelectorAll("#main__modais__modalEdit__buttonEdit editBtn")
    

//     if(updateModalBtn){
//       updateBtn.addEventListener('click', async (event) => {
//          console.log("ok")

//         const updatePostId = localStorage.getItem("S5-10: postId")
//         console.log(updatePostId)

//         const data = {
//           content: postEditContent.value
//         }
//         console.log(data)
//         await ApiRequests.updatePost(data, updatePostId)

//         modal1.classList.add('hidden')
//         modal2.classList.add('hidden')
//         localStorage.removeItem("S5-10: postId")
        
        
//       })
//     }
}
}

