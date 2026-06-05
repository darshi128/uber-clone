import { useState } from "react";
import UserDataContext from "./UserDataContext";

function UserContext({children}) {
    const [user, setUser] = useState({
        email: '',
        fullName :{
            firstName: '',
            lastName: ''
        }
    })
  return (
    <div>
    <UserDataContext.Provider value={{ user, setUser }}>
      {children}
    </UserDataContext.Provider>
    </div>
  )
}



export default UserContext