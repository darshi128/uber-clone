

const RidePopUp = (props) => {
  return (
    <div>
        <h5 onClick={()=>{props.setRidePopupPanel(false)}} className='p-1 w-[93%] text-center absolute top-0 '><i className="text-3xl text-gray-200 ri-arrow-down-wide-fill"></i></h5> 
         <h3 className='text-2xl font-semibold mb-5'>New Ride Available!</h3>
         <div className="flex items-center justify-between mt-2 p-3 bg-yellow-400 rounded-lg">
            <div className="flex items-center gap-3 ">
               <img className="h-10 w-10 rounded-full object-cover" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdlMd7stpWUCmjpfRjUsQ72xSWikidbgaI1w&s" alt="" />
               <h2 className="text-lg font-medium">Harsh Patel</h2>
            </div>
            <h5 className="text-lg font-semibold">2.2 KM</h5>
         </div>
        <div className="flex gap-2 justify-between flex-col items-center">
          <div className="w-full mt-2">
            <div className="flex items-center gap-5 p-3 border-b-2">
                <i className="text-lg ri-map-pin-user-fill"></i>
                <div>
                    <h3 className="text-lg font-medium">562/11-A</h3>
                    <p className="text-sm text-gray-600">kakariya talab, bhopal</p>
                </div>
            </div>
            <div className="flex items-center gap-5 p-3 border-b-2">
               <i className="text-lg ri-map-pin-2-fill"></i>
                <div>
                    <h3 className="text-lg font-medium">562/11-A</h3>
                    <p className="text-sm  text-gray-600">kakariya talab, bhopal</p>
                </div>
            </div>
            <div className="flex items-center gap-5 p-3 ">
               <i className="text-lg ri-currency-line"></i>
                <div>
                    <h3 className="text-lg font-medium">₹193.20</h3>
                    <p className="text-sm  text-gray-600">Cash cash</p>
                </div>
            </div>
         </div>
          <button onClick={() => {
                        props.setConfirmRidePopupPanel(true)
                        props.confirmRide()

                    }} className=' bg-green-600 w-full text-white font-semibold p-2 px-10 rounded-lg'>Accept</button>
                    
         <button onClick={()=>{
            props.setRidePopupPanel(false)
          }}
          className="w-full bg-gray-200 text-gray-700 font-semibold p-2 mb-0 rounded-lg">Ignore</button>   
        </div>
    </div>
  )
}

export default RidePopUp