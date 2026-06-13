
import {useNavigate} from 'react-router-dom';
import { useEffect } from 'react';
// import UserDataContext from '../context/UserDataContext';

const UserProtectWrapper = ({children}) => {

  const token = localStorage.getItem('token');
  const navigate = useNavigate();

    useEffect(() => {
        if (!token) {
            navigate('/login')
        }
    },[token]);

  
  return (
    <>
      {children}
    </>
  )
}

export default UserProtectWrapper