export class Modal {
    static showModal() {
      const modalBtn = document.querySelectorAll('.modalBtn')
      const modal = document.querySelector('.modal')
  
      modalBtn.forEach((btn) => {
        btn.addEventListener('click', () => {
          modal.classList.toggle('hidden')
        })
      })
    }
  
    static closeModal() {
      const closeBtn = document.getElementById('closeBtn')
      const modal = document.querySelector('.modal')
  
      closeBtn.addEventListener('click', () => {
        modal.classList.add('hidden')
      })
    }
  
    static showEditModal() {
      const modalBtn = document.querySelectorAll('.modalEditBtn')
      const modal = document.getElementById('editModal')
  
      modalBtn.forEach(btn => {
        btn.addEventListener('click', (event) => {
          localStorage.setItem('@kenzieStore:itemId', event.target.id)
          modal.classList.toggle('hidden')
        })
      })
    }
    }

    