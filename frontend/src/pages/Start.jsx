import uberLogo from "../assets/uber-logo.png";
import { Link } from 'react-router-dom';

function Start() {
  return (
    <div>
      <div className = " bg-cover bg-center bg-[url(https://images.unsplash.com/photo-1688349268401-dbc63d0ab159?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHRyYWZpYyUyMGxpZ2h0fGVufDB8fDB8fHww)] h-screen pt-8 w-full flex justify-content flex-col ">
        <img className="w-16 ml-8" src={uberLogo} alt="Uber Logo" />
         <div className = "bg-white mt-auto pb-7 py-4 px-4">
             <h2 className="text-[30px] font-bold">Get started with Uber</h2>
              <Link to="/login" className="flex items-center justify-center w-full bg-black text-white py-3 rounded-lg mt-4">Continue</Link>
         </div>
      </div>
    </div>
  )
}

export default Start;