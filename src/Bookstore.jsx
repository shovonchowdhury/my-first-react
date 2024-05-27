import Books from "./Books"

export default function Bookstore({books}){
    return (

        <div>
            <h2>Number of Books: {books.length}</h2>
            {
                books.map(book=><Books book={book}></Books>)
            }
        </div>
    )
}