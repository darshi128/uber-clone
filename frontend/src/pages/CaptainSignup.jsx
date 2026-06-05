import { Link } from "react-router-dom";
import uberLogo from '../assets/uber-logo.png'
import { useState } from 'react'

function CaptainSignup() {
  const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [userData, setUserData] = useState({})
  
    const submitHandler = (e) => {
       e.preventDefault();
       setUserData({
        fullName: {
          firstName: firstName,
          lastName: lastName,
        },
        email: email,
        password: password
       })
  
       console.log(userData)
       setEmail('')
       setPassword('')
       setFirstName('')
       setLastName('')
    }

 return (
     <div className ="p-7 h-screen flex flex-col justify-between">
      <div>
      <img className="w-16 mb-10" src={uberLogo} alt="Uber Logo" />
        <form onSubmit ={(e)=> submitHandler(e)} className='flex flex-col gap-4'>

           <h3 className="text-lg font-medium mb-2 w-full">What's our Captain's name?</h3>
           <div className='flex gap-4 mb-5'> 
            <input
            required 
            className ="bg-[#eeeeee]  rounded px-4 py-2 border w-1/2  text-lg placeholder:text-base"
            type="text"
            placeholder="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            />
            <input
            required 
            className ="bg-[#eeeeee]  rounded px-4 py-2 border w-1/2  text-lg placeholder:text-base"
            type="text"
            placeholder="Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            />
           </div>

           <h3 className="text-lg font-medium w-full mb-2">What's our Captain's email?</h3>
           <input
            required 
            className ="bg-[#eeeeee] mb-5 rounded px-4 py-2 border width-full text-lg placeholder:text-base"
            type="email"
            placeholder="email@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            />
           <h3 className="text-base font-medium mb-2">Enter password</h3>
           <input
            required
            className ="bg-[#eeeeee] mb-5 rounded px-4 py-2 border width-full text-lg placeholder:text-base"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="••••••••"
           />
           <button
            className='bg-[#111] text-white font-semibold mb-3 rounded-lg px-4 py-2 w-full text-lg placeholder:text-base'
          >Sign Up</button>
        </form>
          <p className='text-center'>Already have a account? <Link to='/captain-login' className='text-blue-600'>Login here</Link></p>
      </div>
      <div>
        <p className="text-[10px] leading-tight">This site is protected by reCAPTCHA and the  <span className = "underline"> Google Privacy Policy </span> and  <span className = "underline"> Terms of Service </span> apply.</p>
      </div>
    </div>
  )
}

export default CaptainSignup