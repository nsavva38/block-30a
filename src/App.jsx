import { useState } from "react";
import { Routes, Route } from "react-router-dom"
import { Link, useNavigate } from "react-router-dom";

import Library from "./components/Library.jsx"
import SelectedBook from "./components/SelectedBook.jsx";
import Register from "./components/Register.jsx";
import Account from "./components/Account.jsx";


const App = () => {
  const navigate = useNavigate();
  const [accessToken, setAccessToken] = useState(localStorage.getItem('token'));

const logOut = () => {
  localStorage.removeItem('token');
  setAccessToken(``);
  navigate(`/books`);
}


//--------------------------------RETURN--------------------------------//

  return (
    <>
     <nav>
      {
        accessToken ? 
        <>
          <button onClick={() => {logOut()}}>Log Out</button>
          <Link to={`/account`}>Account</Link>
        </>
        :
        <Link to={"/register"}>Log In</Link>
      }
      <Link to={"/books"}>Library Books</Link>
     </nav>

     <Routes>
      <Route path="/books" element={<Library />}/>
      <Route path="/register" element={<Register setAccessToken={setAccessToken}/>} />
      <Route path="/books/:id" element={<SelectedBook accessToken={accessToken}/>}/>
      <Route path="/account" element={<Account accessToken={accessToken}/>} />
     </Routes>
    </>
  )
}

export default App
