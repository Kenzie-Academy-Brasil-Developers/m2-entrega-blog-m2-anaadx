export class Render {
    static renderPostsListDesktop(array)  {
        const ul = document.getElementById("container__posts1")

        array.forEach(post => {
            const card = this.renderPostsListDesktop(post)

            ul.appendChild(card)
        });
    }

    static renderCard (post) {
        const li = document.createElement("li")
    }
    
}
