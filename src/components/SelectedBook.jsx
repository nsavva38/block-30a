import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"

const SelectedBook = () => {
  const [selectedBook, setSelectedBook] = useState({})
  const { id } = useParams();


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


//--------------------------------RETURN--------------------------------//

  return (
    <section id="selected-book">
      <img src={selectedBook.coverimage} 
        alt={selectedBook.title}
        height="300"

      />
      <h1>{selectedBook.title}</h1>
      <h3>by {selectedBook.author}</h3>
      <p>{selectedBook.description}</p>
    </section>
  )
}

export default SelectedBook