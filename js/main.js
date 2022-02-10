var bookstempleade = document.getElementById('cardtemplate').content

var bookslist = document.getElementById('list')

const keyapi = 'bc55be08'

function getbooks (pagination=1,search="books"){
  return  fetch(`https://www.omdbapi.com/?apikey=${keyapi}&s=${search}&page=${pagination}`)
    .then(res =>res.json())
}


function renderbooks(books,node){
    node.innerHTML=null

    let booksfragment = document.createDocumentFragment()

    books.forEach(element => {
        let booksitemEl = document.cloneNode( bookstempleade,true)

        let booksimg = booksitemEl.querySelector(' .card__img')
        booksimg.setAttribute('src',element.Poster)

        let bookstitel = booksitemEl.querySelector('.filim__card__titel')
        bookstitel.textContent= element.Title

        let booksyear = booksitemEl.querySelector('.filim__card__div__year')
        booksyear.textContent= element.Year

        booksfragment.appendChild(booksitemEl)
    });

    node.appendChild(booksfragment)
}

getbooks().then(books =>{
    console.log(books.Search)
    renderbooks(books.Search,bookslist)
})



