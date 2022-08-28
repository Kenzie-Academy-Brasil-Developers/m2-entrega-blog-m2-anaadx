export class Modal {
    static showEditModal() {
      const modalEdit = document.querySelector(".modal")
      const modalEditButton = document.querySelectorAll(".buttonEdit")
      
  
      modalEditButton.forEach((btn) => {
        btn.addEventListener('click', (event) => {
          localStorage.setItem("S5-10: postId", event.target.id)
          modalEdit.classList.toggle('hidden')
        })
      })
    }

    static closeModal() {
    
    const closeBtn = document.querySelector('#buttonClose')
    const modal = document.querySelector('.modal')

    closeBtn.addEventListener('click', () => {
      modal.classList.add('hidden')
      window.location.assign("../pages/homePage.html")
    })
  }

  static showDeleteModal() {
    const modalDeleteBtn = document.querySelectorAll('.buttonDelete')
    const modal = document.querySelector('.modal')

    modalDeleteBtn.forEach(btn => {
      btn.addEventListener('click', (event) => {
        localStorage.setItem("S5-10: postId", event.target.id)
        modal.classList.toggle('hidden')
      })
    })
  }

}
    