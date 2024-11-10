import { useState, useEffect } from "react"

const Account = ({ accessToken }) => {
  const [user, setUser] = useState({})

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



//--------------------------------RETURN--------------------------------//

  return (
    <>
      <h1>Account Info</h1>

      <h3>Hello {user.firstname}</h3>

      <section id="checked-out">
        <h3>Checked Out Books</h3>
      </section>
    </>
  )
}

export default Account


// https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/users/me GET