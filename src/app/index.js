import React from "react";
import Login from "../pages/login";
import Loader from "../components/shared/loader";
import { BrowserRouter,Routes,Route} from "react-router-dom";
import Notes from "../pages/notes";
import Main from "../layouts/Main";
function App() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login/>}/>
            <Route path="/notes" element={<Main/>}/>
            <Route index element={<Notes/>}/>
        </Routes>
      </BrowserRouter>
    );
  }
  
  export default App;  