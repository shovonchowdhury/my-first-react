import './book.css'

export default function Books({book}){

    const {subject,price}=book;
    return(

        <div className='book'>
            <p>Books Name:{subject}</p>
            <p>Price:{price}</p>
        </div>
    )
}