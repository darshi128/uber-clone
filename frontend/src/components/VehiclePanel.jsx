
const VehiclePanel = (props) => {
  return (
    <div>
         <h5 onClick={()=>{props.setVehiclePanel(false)}} className='p-1 w-[93%] text-center absolute top-0 '><i className="text-3xl text-gray-200 ri-arrow-down-wide-fill"></i></h5> 
         <h3 className='text-2xl font-semibold mb-5'>Choose a Vehicle</h3>

         <div onClick={()=>{props.setConfirmRidePanel(true)}}
         className='flex border-2 active:border-black  mb-2 rounded-xl items-center justify-between w-full p-3'>
           <img  className='h-10' src="https://static.vecteezy.com/system/resources/thumbnails/025/305/916/small/white-sport-car-on-transparent-background-3d-rendering-illustration-free-png.png" alt="" />
           <div className=' w-1/2'>
            <h4 className='font-medium text-base'>UberGo <span><i className="ri-user-3-fill"></i>4</span></h4>
            <h5 className='font-medium text-sm'>2 mins away</h5>
            <p className='font-normal text-xs text-gray-600'>Affordable, compact rides</p>
           </div>
           <h2 className='text-lg font-semibold'>₹{props.fare.car}</h2>
         </div>

         <div onClick={()=>{props.setConfirmRidePanel(true)}}
         className='flex border-2 active:border-black mb-2 rounded-xl items-center justify-between w-full p-3'>
           <img  className='h-10' src="https://cn-geo1.uber.com/image-proc/crop/resizecrop/udam/format=auto/width=552/height=552/srcb64=aHR0cHM6Ly90Yi1zdGF0aWMudWJlci5jb20vcHJvZC91ZGFtLWFzc2V0cy85NTM4NTEyZC1mZGUxLTRmNzMtYmQ1MS05Y2VmZjRlMjU0ZjEucG5n" alt="" />
           <div className=' w-1/2'>
            <h4 className='font-medium text-base'>Moto <span><i className="ri-user-3-fill"></i>1</span></h4>
            <h5 className='font-medium text-sm'>3 mins away</h5>
            <p className='font-normal text-xs text-gray-600'>Affordable motorcycle rides</p>
           </div>
           <h2 className='text-lg font-semibold'>₹{props.fare.motorcycle}</h2>
         </div>

         <div onClick={()=>{props.setConfirmRidePanel(true)}}
         className='flex border-2 active:border-black mb-2 rounded-xl items-center justify-between w-full p-3'>
           <img  className='h-10' src="https://cn-geo1.uber.com/image-proc/crop/resizecrop/udam/format=auto/width=552/height=0/srcb64=aHR0cHM6Ly90Yi1zdGF0aWMudWJlci5jb20vcHJvZC91ZGFtLWFzc2V0cy80ZTcxOGQ1Yy1lNDMxLTU5YzUtYWNiNS1hYzQwYzI2YzI0ZGYud2VicA==" alt="" />
           <div className=' w-1/2'>
            <h4 className='font-medium text-base'>UberAuto <span><i class="ri-user-3-fill"></i>3</span></h4>
            <h5 className='font-medium text-sm'>3 mins away</h5>
            <p className='font-normal text-xs text-gray-600'>Affordable auto rides</p>
           </div>
           <h2 className='text-lg font-semibold'>₹{props.fare.auto}</h2>
         </div>
    </div>
  )
}

export default VehiclePanel