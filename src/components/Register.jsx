import { useState } from "react"
import { useNavigate } from "react-router-dom";

const Register = ( {setAccessToken }) => {

  const navigate = useNavigate();
  const [inputFirstName, setInputFirstName] = useState(``);
  const [inputLastName, setInputLastName] = useState(``);
  const [inputEmail, setInputEmail] = useState(``);
  const [inputPassword, setInputPassword] = useState(``);

  const [userEmail, setUserEmail] = useState(``);
  const [userPassword, setUserPassword] = useState(``);

  const addUser = async (event) => {
    event.preventDefault();
    
    await fetch(`https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/users/register`, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          firstname: inputFirstName,
          lastname: inputLastName,
          email: inputEmail,
          password: inputPassword
        })
      }).then(response => response.json())
        .then(result => {
          console.log(result);
          setAccessToken(result.token);
          localStorage.setItem('token', result.token);
        })
        .catch(console.error);
    
    setInputFirstName(``);
    setInputLastName(``);
    setInputEmail(``);
    setInputPassword(``);

    navigate(`/books`);

  } 

  const logIn = async (event) => {
    event.preventDefault();

    await fetch(`https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/users/login`,{
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: userEmail,
        password: userPassword
      })
    }).then(response => response.json())
      .then(result => {
        console.log(result);
        setAccessToken(result.token);
        localStorage.setItem('token', result.token);
      })
      .catch(console.error);

    setUserEmail(``);
    setUserPassword(``)
    

    navigate(`/books`);
  }


//--------------------------------RETURN--------------------------------//

  return (
    <section id="register">

      <h1>Sign Up To Checkout Books!</h1>
      <section id="register-form">
      <h4>Sign Up!</h4>
        <form onSubmit={addUser}>
          <input 
            onChange={(event) => {setInputFirstName(event.target.value)}}
            placeholder="First Name"
          />
          <input
            onChange={(event) => {setInputLastName(event.target.value)}} 
            placeholder="Last Name"
          />
          <input
            onChange={(event) => {setInputEmail(event.target.value)}} 
            placeholder="Email"
          />
          <input
            onChange={(event) => {setInputPassword(event.target.value)}}
            placeholder="Password"
          />
          <button>Sign Up</button>
        </form>
      </section>

      <h4>Log In</h4>      
      <section id="login-form">
        <form onSubmit={logIn}>
          <input 
            onChange={(event) => {setUserEmail(event.target.value)}}
            placeholder="Email"
          />
          <input 
            onChange={(event) => {setUserPassword(event.target.value)}}
            placeholder="Password"
          />
          <button>Log In</button>
        </form>
      </section>

    </section>

  )

}

export default Register

// https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/users/register POST

// https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/users/login POST