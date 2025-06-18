import type { SignupInput } from "@samaryan57/blog-common"
import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import AuthHeader from "../components/AuthHeader.js"
import InputBox from "../components/InputBox.js"
import Quote from "../components/Quote.js"
import { BACKEND_URL } from "../config.js"

function Signup() {
  const [signupDetails, setSignupDetails] = useState<SignupInput>({
    name: "",
    email: "",
    password: ""
  });

  const navigate = useNavigate();

  async function sendRequest() {
    try {
      const response = await axios.post(`${BACKEND_URL}/api/v1/user/signup`, signupDetails);
      const { token } = response.data;
      localStorage.setItem("token", token);
      navigate("/blogs");

    } catch (err) {
      alert("Error while signing up!");
      console.error("Error sending signup response: ", err);
    }
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2">

      <div>
        <div className="h-screen flex justify-center">
          <div className="flex flex-col justify-center">
            <AuthHeader type="signup" />
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
            <button type="button" onClick={sendRequest} className="text-white w-80 bg-black hover:bg-gray-800 hover:cursor-pointer focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mt-3 me-2 mb-2">Sign Up</button>
          </div>
        </div>
      </div>

      <div className="hidden lg:block">
        <Quote />
      </div>
    </div>
  )
}

export default Signup