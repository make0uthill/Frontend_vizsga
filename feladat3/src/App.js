import React from "react";
import {BrowserRouter, Routes, Route, Link} from "react-router-dom";
function App(){
return (
<BrowserRouter>
     <ul>
      <li>
         <Link to="/">Főoldal</Link>
      </li>
      <li>
         <Link to="/classes">Class</Link>
      </li>
</ul>
<Routes>
       <Route exact path="/" element={<Home />}></Route>
       <Route exact path="/classes" element={<Classes/>}>
          <Route exact path=":classId" element={<Class />} />
</Route>
</Routes>
</BrowserRouter>
)
}