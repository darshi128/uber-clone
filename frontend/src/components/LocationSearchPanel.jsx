


const LocationSearchPanel = (props) => {

  const location =[
    "24B, Near kapoor's cafe, Sheryians Coding School, Bhopal",
    "22B, Near Malhotra's cafe, Sheryians Coding School, Bhopal",
    "25B, Near Mehta's cafe, Sheryians Coding School, Bhopal",
    "18B, Near Singhania's cafe, Sheryians Coding School, Bhopal",
  ]

  return (
    <div>
      {
      location.map(function (elem, idx) {
        return <div key={idx} onClick={()=>{
           props.setVehiclePanel(true)
           props.setPanelOpen(false)
        }}
        className='flex gap-4 border-2 border-gray-50 active:border-black p-3 rounded-xl items-center my-2 justify-start'>
        <h2 className="bg-#[eee] h-8 flex items-center justify-center w-12 rounded-full"><i className="ri-map-pin-fill "></i></h2>
        <h4 className="font-medium">{elem}</h4>
      </div>
      })
      }
     
    </div>
  )
}

export default LocationSearchPanel