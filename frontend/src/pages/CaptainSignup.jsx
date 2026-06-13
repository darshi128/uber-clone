import { Link, useNavigate } from "react-router-dom";
import uberLogo from '../assets/uber-logo.png'
import { useState, useContext } from 'react'
import axios from "axios";
import CaptainDataContext from "../context/CaptainDataContext";

function CaptainSignup() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')

  const [ vehicleColor, setVehicleColor ] = useState('')
  const [ vehiclePlate, setVehiclePlate ] = useState('')
  const [ vehicleCapacity, setVehicleCapacity ] = useState('')
  const [ vehicleType, setVehicleType ] = useState('')
  
    const {captain, setCaptain} = useContext(CaptainDataContext)

    const submitHandler = async (e) => {
       e.preventDefault();
      const captainData = {
      fullName: {
         firstName: firstName,
         lastName: lastName,
      },
      email,
      password,
      vehicle: {
      color: vehicleColor,
      plate: vehiclePlate,
      capacity: Number(vehicleCapacity),
      vehicleType: vehicleType
      }
     }
      const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/captains/register`, captainData)

      if(response.status === 201){
        const data = response.data
        setCaptain(data.captain)
        localStorage.setItem('token', data.token)
        navigate('/captain-home')
      }
      console.log(captain)
       setEmail('')
       setPassword('')
       setFirstName('')
       setLastName('')
       setVehicleColor('')
       setVehiclePlate('')
       setVehicleCapacity('')
       setVehicleType('')

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

           <h3 className='text-lg font-medium mb-2'>Vehicle Information</h3>
          <div className='flex gap-4 mb-7'>
            <input
              required
              className='bg-[#eeeeee] w-1/2 rounded-lg px-4 py-2 border text-lg placeholder:text-base'
              type="text"
              placeholder='Vehicle Color'
              value={vehicleColor}
              onChange={(e) => {
                setVehicleColor(e.target.value)
              }}
            />
            <input
              required
              className='bg-[#eeeeee] w-1/2 rounded-lg px-4 py-2 border text-lg placeholder:text-base'
              type="text"
              placeholder='Vehicle Plate'
              value={vehiclePlate}
              onChange={(e) => {
                setVehiclePlate(e.target.value)
              }}
            />
          </div>
          <div className='flex gap-4 mb-7'>
            <input
              required
              className='bg-[#eeeeee] w-1/2 rounded-lg px-4 py-2 border text-lg placeholder:text-base'
              type="number"
              placeholder='Vehicle Capacity'
              value={vehicleCapacity}
              onChange={(e) => {
                setVehicleCapacity(e.target.value)
              }}
            />
            <select
              required
              className='bg-[#eeeeee] w-1/2 rounded-lg px-4 py-2 border text-lg placeholder:text-base'
              value={vehicleType}
              onChange={(e) => {
                setVehicleType(e.target.value)
              }}
            >
              <option value="" disabled>Select Vehicle Type</option>
              <option value="car">Car</option>
              <option value="auto">Auto</option>
              <option value="motorcycle">Motorcycle</option>
            </select>
          </div>

           <button
            className='bg-[#111] text-white font-semibold mb-3 rounded-lg px-4 py-2 w-full text-lg placeholder:text-base'
          >Create captain account</button>
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