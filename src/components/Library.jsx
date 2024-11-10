import { useEffect, useState } from "react";

const Library = () => {

  const [libraryBooks, setLibraryBooks] = useState([]);

  useEffect(() => {
    const getBooks = async () => {
      const response = await fetch(`https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/books`);
      const booksJSON = await response.json();
      const books = booksJSON.books;
      console.log(`books:`, books);
      setLibraryBooks(books);

    }

    getBooks();

  }, [])




//--------------------------------RETURN--------------------------------//

  return(
    <>

      <h1>Library</h1>

      <section id="all-books">
        {
          libraryBooks.map((book) => {
            return (
              <section key={book.id}>
                  <img 
                    src={book.coverimage} 
                    height="200" 
                    alt={book.title}
                  />
                  <p>{book.title}<br></br>by {book.author}</p>
              </section>
            )
          })
        }
      </section>

    </>
  )
}

export default Library