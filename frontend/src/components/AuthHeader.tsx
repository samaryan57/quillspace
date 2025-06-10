import { Link } from 'react-router-dom'

interface AuthHeaderProps {
    type: "signup" | "signin"
}

function AuthHeader({ type } : AuthHeaderProps) {
  return (
    <>
      <div className="text-3xl font-extrabold">
        {type === "signup" ? "Create an Account" : "Login to your Account"}
      </div>
      <div className="text-slate-500 mb-5">
        {type === "signup" ? "Already have an account?" : "Don't have an account?"}
        {" "}
        {
            type === "signup" ?
            <Link to={"/signin"} className="hover:underline">Login</Link> :
            <Link to={"/signup"} className="hover:underline">Sign up</Link>
        }
      </div>
    </>
  )
}

export default AuthHeader