import { useState } from "react";
import { Routes, Route } from "react-router-dom"
import { Link } from "react-router-dom";

import Library from "./components/Library.jsx"
import SelectedBook from "./components/SelectedBook.jsx";
import Register from "./components/Register.jsx";


const App = () => {

  const [accessToken, setAccessToken] = useState(``);




//--------------------------------RETURN--------------------------------//

  return (
    <>
     <nav>
      {
        console.log(accessToken)
      }
      {
        accessToken ? <button onClick={() => {setAccessToken(``)}}>Log Out</button>
        :
        <Link to={"/register"}>Log In</Link>
      }
      <Link to={"/books"}>Library Books</Link>
     </nav>

     <Routes>
      <Route path="/books" element={<Library />}/>
      <Route path="/register" element={<Register setAccessToken={setAccessToken}/>} />
      <Route path="/books/:id" element={<SelectedBook />}/>
     </Routes>
    </>
  )
}

export default App
