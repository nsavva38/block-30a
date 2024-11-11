import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom"

const SelectedBook = ({ accessToken }) => {
  const [selectedBook, setSelectedBook] = useState({})
  const { id } = useParams();
  const navigate = useNavigate();

  const getSelectedBook = async () => {
    const response = await fetch(`https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/books/${id}`);
    const responseJSON = await response.json();
    const book = responseJSON.book;
    console.log(`book:`, book);
    setSelectedBook(book);
  }

  useEffect(() => {

    getSelectedBook();
  }, [])

  const checkOut = async () => {
    await fetch(`https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/books/${id}`, {
      method: "PATCH",
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${accessToken}`
      },
      body: JSON.stringify({
        available: false,
      })
    }).then(response => response.json())
      .then(result => {
        console.log(result);
      })
      .catch(console.error);
      getSelectedBook();
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

        {
          accessToken ?
            selectedBook.available ?
            <>
              <>Available</>
              <button onClick={() => {checkOut()}}>Checkout</button>

            </>
              :
              <>Unavailable</>
          : null
        }
      </section>
      <br></br>
      <button onClick={() => { navigate(`/books`) }}>Back To Library</button>
    </>
  )
}

export default SelectedBook



// https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/books/${bookId} GET, PATCH