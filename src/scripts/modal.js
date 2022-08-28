export class Modal {
  static showEditModal() {
    const modalEdit1 = document.querySelector(".main__modais__modalEdit1")
    const modalEdit2 = document.querySelector(".main__modais__modalEdit2")
    const modalEditButton1 = document.querySelectorAll(".buttonEdit1")
    const modalEditButton2 = document.querySelectorAll(".buttonEdit2")


    modalEditButton1.forEach((btn) => {
      btn.addEventListener('click', (event) => {
        localStorage.setItem("S5-10: postId", event.target.id)
        modalEdit1.classList.toggle('modalHidden')
      })
    })

    modalEditButton2.forEach((btn) => {
      btn.addEventListener('click', (event) => {
        localStorage.setItem("S5-10: postId", event.target.id)
        modalEdit2.classList.toggle('modalHidden')
      })
    })

  }

  static closeModal() {

    const buttonCloseEdit1 = document.querySelector('#buttonCloseEdit1')
    const buttonCloseEdit2 = document.querySelector('#buttonCloseEdit2')
    const buttonCloseDelete1 = document.querySelector('#buttonCloseDelete1')
    const buttonCloseDelete2 = document.querySelector('#buttonCloseDelete2')

    const modalEdit1 = document.querySelector(".main__modais__modalEdit1")
    const modalEdit2 = document.querySelector(".main__modais__modalEdit2")
    const modalDelete1 = document.querySelector(".main__modais__modalDelete1")
    const modalDelete2 = document.querySelector(".main__modais__modalDelete2")

    buttonCloseEdit1.addEventListener('click', () => {
      modalEdit1.classList.add('modalHidden')
    })

    buttonCloseEdit2.addEventListener('click', () => {
      modalEdit2.classList.add('modalHidden')
    })

    buttonCloseDelete1.addEventListener('click', () => {
      modalDelete1.classList.add('modalHidden')
    })

    buttonCloseDelete2.addEventListener('click', () => {
      modalDelete2.classList.add('modalHidden')
    })
  }

  static showDeleteModal() {
    const modalDeleteBtn1 = document.querySelectorAll('.buttonCloseDelete1')
    const modalDeleteBtn2 = document.querySelectorAll('.buttonCloseDelete2')
    const modalDelete1 = document.querySelector(".main__modais__modalDelete1")
    const modalDelete2 = document.querySelector(".main__modais__modalDelete2")

    modalDeleteBtn1.forEach((btn) => {
      btn.addEventListener('click', (event) => {
        localStorage.setItem("S5-10: postId", event.target.id)
        modalDelete1.classList.toggle('modalHidden')
      })
    })

    modalDeleteBtn2.forEach((btn) => {
      btn.addEventListener('click', (event) => {
        localStorage.setItem("S5-10: postId", event.target.id)
        modalDelete2.classList.toggle('modalHidden')
      })
    })
  }
}