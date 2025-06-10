import { useState } from "react";
import AuthHeader from "../components/AuthHeader.js"
import InputBox from "../components/InputBox.js"
import Quote from "../components/Quote.js"
import { SigninInput } from "@samaryan57/blog-common";
import axios from "axios";


function Signin() {
  const [signinDetails, setSigninDetails] = useState<SigninInput>({
    email: "",
    password: ""
  });

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2">

      <div>
        <div>
          <div className="h-screen flex justify-center">
            <div className="flex flex-col justify-center">
              <AuthHeader type="signin" />
              <InputBox label="Email" placeholder="Your email" onChange={e => {
                  setSigninDetails(c => ({
                      ...c,
                      email: e.target.value
                  }))
              }} />
              <InputBox label="Password" type="password" placeholder="Your password" onChange={e => {
                  setSigninDetails(c => ({
                      ...c,
                      password: e.target.value
                  }))
              }} />
              <button type="button" className="text-white w-80 bg-black hover:bg-gray-800 hover:cursor-pointer focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mt-3 me-2 mb-2">Sign In</button>
            </div>
          </div>
        </div>
      </div>

      <div className="hidden lg:block">
        <Quote />
      </div>
    </div>
  )
}

export default Signin