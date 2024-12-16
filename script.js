let books = [

    {
        title: 'the godfather',
        author: 'Pario Piuzo',
        ganre: 'Roman',
        img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGQ7ZVJru8e6EZfs2kWj4zyO3kDDQRN6sSFA&s'
    },
    {
        title: 'Hamlet ',
        author: 'William Shakespeare',
        ganre: 'Drama',
        img:'https://images.booksense.com/images/319/816/9789380816319.jpg'
    },
    {
        title: 'Sherlock Holmes',
        author: 'Sir Arthur Conan',
        ganre: 'adventure',
        img: 'https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781643130712/the-rivals-of-sherlock-holmes-9781643130712_hr.jpg'
    },
    {
        title: 'Harry Potter',
        author: 'J.K Rouling',
        ganre: 'Adventure',
        img: 'https://cdn.shopify.com/s/files/1/0051/8845/2401/files/Y3587HarryPotterandthePhilosophersStone_ROUNDED_33154eaf-79cb-440c-97cc-67f05e785c76_768x.png?v=1724245316'
    },
    {
        title: 'panther skin',
        author: 'SH. Rustaveli',
        ganre: 'Poema',
        img: 'https://booksale.ge/uploads/books/1592554393.jpg'
    },
    {
        title: 'Norwegyan wood',
        author: 'Haruki Murakami',
        ganre: 'Poema',
        img: 'https://assets.psichogios.gr/media/catalog/product/cache/129ede0f8fbeb8525bbded4ea93210df/9/7/9789604966530_1.jpg'
    },
    {
        title: 'The Great Gatsby',
        author: 'Francis Scott',
        ganre: 'Novel',
        img: 'https://assets2.titleleaf.com/lerner/product/cover/l_9781728428567_fc.jpg'
    },
    {
        title: 'The Lord of the Rings',
        author: 'J. R. R. Tolkien',
        ganre: 'Adventure',
        img: 'https://m.media-amazon.com/images/I/913sMwNHsBL._AC_UF1000,1000_QL80_.jpg'
    }
]


let container = document.querySelector('.container')

for (let i = 0; i < books.length; i++) {

    let box = document.createElement('div')

    box.innerHTML = `
    <img  src="${books[i].img}"/>
        <p>${books[i].title}</p>
        <p>${books[i].author}</p>
        <p>${books[i].ganre}</p>

    `

    container.appendChild(box)
}