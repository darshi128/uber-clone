import { Link, useNavigate} from "react-router-dom";
import uberLogo from '../assets/uber-logo.png'
import { useState, useContext } from 'react'
import axios from "axios";
import UserDataContext from '../context/UserDataContext'

function UserSignup() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')

  const navigate = useNavigate()
  const {user, setUser} = useContext(UserDataContext)
  
  const submitHandler = async (e) => {
     e.preventDefault();
     const newUser ={
      fullName: {
        firstName: firstName,
        lastName: lastName,
      },
      email: email,
      password: password
     }

     const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/register`, newUser)
     
     if(response.status === 201){
      const data = response.data;
      setUser(data.user);
      localStorage.setItem('token', data.token);
      navigate('/home')
     }
     console.log(user)
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

           <h3 className="text-lg font-medium mb-2">What's your name?</h3>
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

           <h3 className="text-lg font-base mb-2">What's your email?</h3>
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
          >Create Account </button>
        </form>
          <p className='text-center'>Already have a account? <Link to='/login' className='text-blue-600'>Login here</Link></p>
      </div>
      <div>
       <p className="text-[10px] leading-tight">This site is protected by reCAPTCHA and the  <span className = "underline"> Google Privacy Policy </span> and  <span className = "underline"> Terms of Service </span> apply.</p>
      </div>
    </div>
  )
}

export default UserSignup