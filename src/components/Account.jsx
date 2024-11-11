import { useState, useEffect } from "react"

const Account = ({ accessToken }) => {
  const [user, setUser] = useState({});
  const [checkedBooks, setCheckedBooks] = useState([]);

  useEffect(() => {
    const getUserInfo = async () => {
      await fetch(`https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/users/me`,{
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${accessToken}`
        },
      }).then(response => response.json())
        .then(result => {
          console.log(result);
          setUser(result);
        })
        .catch(console.error);

    }

    getUserInfo();
  }, [])


  const getCheckedBooks = async () => {
    await fetch(`https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/reservations`, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${accessToken}`
      },
    }).then(response => response.json())
      .then(result => {
        console.log(result);
        setCheckedBooks(result.reservation);
      })
      .catch(console.error);
  }

  useEffect(() => {
    getCheckedBooks();
  }, [])

  const returnBook = async (reservedBookID) => {
    console.log(`book returned`, reservedBookID);
    await fetch(`https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/reservations/${reservedBookID}`, {
      method: "DELETE",
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${accessToken}`
      },
    }).then(response => response.json())
      .then(result => {
        console.log(result);
      })
      .catch(console.error);
      getCheckedBooks();
  }

//--------------------------------RETURN--------------------------------//

  return (
    <>
      <h1>Account Info</h1>

      <h3>Hello {user.firstname}</h3>


        <h3>Checked Out Books</h3>
        <section id="all-books">
        {
          checkedBooks.length <= 0 ?
          <h4>No checked books</h4>
          :
          checkedBooks.map((reservedBook) => {
            return (
              <section>
                  <img 
                    src={reservedBook.coverimage} 
                    height="200" 
                    alt={reservedBook.title}
                  />
                  <p>{reservedBook.title}<br></br>by {reservedBook.author}</p>
                  <button onClick={() => {returnBook(reservedBook.id)}}>Return Book</button>
              </section>
            )
          })
        }
      </section>
    </>
  )
}

export default Account


// https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/users/me GET


// https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/reservations GET

// https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/reservations/:reservationId DELETE