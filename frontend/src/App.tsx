import { BrowserRouter, Routes, Route } from "react-router-dom";
import Blog from "./pages/Blog.js";
import Blogs from "./pages/Blogs.js";
import Publish from "./pages/Publish.js";
import Signin from "./pages/Signin.js";
import Signup from "./pages/Signup.js";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/blog/:id" element={<Blog />} />
          <Route path="/publish" element={<Publish />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
