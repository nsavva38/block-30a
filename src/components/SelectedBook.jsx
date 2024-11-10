import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom"

const SelectedBook = () => {
  const [selectedBook, setSelectedBook] = useState({})
  const { id } = useParams();
  const navigate = useNavigate();


  useEffect(() => {
    const getSelectedBook = async () => {
      const response = await fetch(`https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/books/${id}`);
      const responseJSON = await response.json();
      const book = responseJSON.book;
      console.log(`book:`, book);
      setSelectedBook(book);
    }

    getSelectedBook();
  }, [])

  const checkOut = () => {
    console.log(`Checkout`);
  }

  const returnBook = () => {
    console.log(`Return Book`);
  }


//--------------------------------RETURN--------------------------------//

  return (
    <>
      <section id="selected-book">
        <img src={selectedBook.coverimage} 
          alt={selectedBook.title}
          height="300"

        />
        <h1>{selectedBook.title}<br></br>by {selectedBook.author}</h1>
        <p>{selectedBook.description}</p>
        <p>{String(selectedBook.available)}</p>
        <button onClick={() => {checkOut()}}>Checkout</button>
        <button onClick={() => {returnBook()}}>Return</button>
      </section>
      <br></br>
      <button onClick={() => { navigate(`/books`) }}>Back To Library</button>
    </>
  )
}

export default SelectedBook