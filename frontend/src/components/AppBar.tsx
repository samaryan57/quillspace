import Avatar from "./Avatar.js"
import { Link } from "react-router-dom"

function AppBar() {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm flex justify-between pl-15 pr-10 py-3">
      <Link to="/blogs" className="flex flex-col justify-center cursor-pointer">
        QuillSpace
      </Link>
      <div className="flex">
        <Link to="/publish">
          <button type="button" className="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full cursor-pointer text-sm px-6 py-1.5 text-center me-5">New</button>
        </Link>

        <div className="flex flex-col justify-center cursor-pointer">
          <Avatar name="Aryan" />
        </div>
      </div>
    </div>
  )
}

export default AppBar