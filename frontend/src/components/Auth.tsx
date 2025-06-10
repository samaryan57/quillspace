import { SignupInput } from "@samaryan57/blog-common"
import { useState } from "react"
import { Link } from "react-router-dom"
import InputBox from "./InputBox.js"

function Auth() {
  const [signupDetails, setSignupDetails] = useState<SignupInput>({
    name: "",
    email: "",
    password: ""
  });
  
  return (
    <div className="h-screen flex justify-center">
      <div className="flex flex-col justify-center">
        <div className="text-3xl font-extrabold">
            Create an account
        </div>
        <div className="text-slate-500 mb-5">
            Already have an account?
            {" "}
            <Link to={"/signin"} className="hover:underline">Login</Link>
        </div>
        <InputBox label="Name" placeholder="Your name" onChange={e => {
            setSignupDetails(c => ({
                ...c,
                name: e.target.value
            }))
        }} />
        <InputBox label="Email" placeholder="Your email" onChange={e => {
            setSignupDetails(c => ({
                ...c,
                email: e.target.value
            }))
        }} />
        <InputBox label="Password" type="password" placeholder="Your new password" onChange={e => {
            setSignupDetails(c => ({
                ...c,
                password: e.target.value
            }))
        }} />
        <button type="button" className="text-white w-80 bg-black hover:bg-gray-800 hover:cursor-pointer focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mt-3 me-2 mb-2">Sign Up</button>
      </div>
    </div>
  )
}

export default Auth