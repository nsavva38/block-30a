
import { Routes, Route } from "react-router-dom"

import Library from "./components/Library.jsx"
import SelectedBook from "./components/SelectedBook.jsx";

const App = () => {




//--------------------------------RETURN--------------------------------//

  return (
    <>
     <nav>Nav Here</nav>

     <Routes>
      <Route path="/books" element={<Library />}/>
      <Route path="/books/:id" element={<SelectedBook />}/>
     </Routes>
    </>
  )
}

export default App
