import React, { useContext } from 'react'
import AuthContext, { AuthContextType } from '../context/AuthContext';
import { Link, useNavigate } from 'react-router-dom';


type Props = {}

const MyPage = (props: Props) => {
    const auth = useContext(AuthContext) as AuthContextType;
    const navigate = useNavigate();
    const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    
    
        // try {
         
        
        //   localStorage.setItem('token', "");
        //   auth.logout();
        //   navigate('/menu');
          
        // } catch (err: any) {
        //   console.log(err);
          
        // }
      }

  return (
    <div className='page-style-hk'> 
          <form className="loginBox" onSubmit={(e) => onSubmit(e)}>
    <div>Welcome</div><br />
    <input type='submit' value='Log out' onClick={auth.logout} />
    </form>
    </div>
  )
}

export default MyPage