const currentBookContainer = document.querySelector('.current-book-container')
const mainContainer = document.querySelector('main')
const addBookBtn = document.querySelector('#add-book-btn')
const form = document.querySelector('.book-form')
const formContainer = document.querySelector('.form-container')
const submitBtn = document.querySelector('#submit-btn')

let myLibrary = []

// displays current books in myLibrary array
function displayLibrary() {
    currentBookContainer.textContent = ''

    for (let i = 0; i < myLibrary.length; i++) {
        const div = document.createElement("div")
        const span = document.createElement("span")
        const btn = document.createElement("button")
        btn.classList.add("book-btn")
        div.classList.add("book")
        currentBookContainer.appendChild(div)
        currentBookContainer.appendChild(div).appendChild(span)
        currentBookContainer.appendChild(div).appendChild(btn)

        myLibrary[i].id = i.toString()
        btn.setAttribute('value', i)

        span.textContent = myLibrary[i].title
        btn.textContent = "Remove book"
    }

    removeBook()
}

// displays form when clicking add new book
addBookBtn.addEventListener('click', displayAddBookForm)

//sends form information to book constructor
form.addEventListener('submit', (event) => {
    event.preventDefault()
    let title = document.querySelector('#title').value
    let author = document.querySelector('#author').value
    let pages = document.querySelector('#pages').value
    let read = document.querySelector('#read').value

    let book = new MakeBook(title, author, pages, read)
    addBookToLibrary(book)

    form.reset() 
})

//displays form and hides add book button
function displayAddBookForm() {
    formContainer.classList.remove('hidden')
    addBookBtn.classList.add('hidden')
}

//removes book when clicking on button
function removeBook() {
    let removeBookBtns = document.querySelectorAll(".book-btn")
    removeBookBtns.forEach(removeBtn => {
        removeBtn.addEventListener('click', function() {
            for (let i = 0; i < myLibrary.length; i++) {
                if (removeBtn.value === myLibrary[i].id) {
                    let x = myLibrary.splice(i, 1)
                    displayLibrary()
                }
            }
        })
    })
}

//book constuctor
function MakeBook(title, author, pages, read) {
    this.title = title,
    this.author = author,
    this.pages = pages,
    this.read = read,
    this.id = myLibrary.length.toString()

    this.read = function () {
        if (true) {
            
        }
    }
}

//adds book to array and updates view
function addBookToLibrary(book) {
    myLibrary.push(book)
    displayLibrary()
}

//initial check to see if there are any books in the array
function checkLibrary() {
    if (myLibrary.length === 0) {
        mainContainer.classList.add('no-books')
    } else {
        mainContainer.classList.remove('no-books')
    }
}
checkLibrary()

// id0: 5a138f7ce034a74bfe4d772ef374bf84
//mm: 5387-5049-1849