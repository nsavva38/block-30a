import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom";

const Account = ({ accessToken }) => {
  const navigate = useNavigate();
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


  useEffect(() => {
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
    getCheckedBooks();
  }, [])


//--------------------------------RETURN--------------------------------//

  return (
    <>
      <h1>Account Info</h1>

      <h3>Hello {user.firstname}</h3>


        <h3>Checked Out Books</h3>
        <section id="all-books">
        {
          checkedBooks.map((reservedBook) => {
            return (
              <section onClick={() => {navigate(`/account/${reservedBook.id}`)}}key={reservedBook.id}>
                  <img 
                    src={reservedBook.coverimage} 
                    height="200" 
                    alt={reservedBook.title}
                  />
                  <p>{reservedBook.title}<br></br>by {reservedBook.author}</p>
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