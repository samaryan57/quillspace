import { BrowserRouter, Routes, Route } from "react-router-dom"
import Blog from "./pages/Blog.js"
import Signin from "./pages/Signin.js"
import Signup from "./pages/Signup.js"

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/blog/:id" element={<Blog />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
