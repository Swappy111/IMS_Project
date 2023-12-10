import React, { useState } from 'react'
import { ILogin } from '../Interfaces/ILogin'
import { Link, useNavigate } from 'react-router-dom'
import { StudentService } from '../Service/StudentService';
import { error } from 'console';

const Login:React.FC= () => {
  const navig=useNavigate();

  const [data,setdata]=useState<ILogin>({
    username:'',
    pass:''
  })
// ======================================Validation Codeset==========================
  const [errors,setErrors]=useState<ILogin>({
    username:'',
    pass:''
  })

//-----------------------------------Alert for inccorect-----------
const [showAlert, setShowAlert] = useState<boolean>(false); 


  const validateForm=()=>{
    const newErrors:ILogin = { username:'', pass:''};

    if (data.username.trim () === '') {
      newErrors.username = "Username is required";
    }

    if (data.pass.trim () === '') {
      newErrors.pass = "Required password";
    }

    setErrors(newErrors);
    return Object.values(newErrors).every((error) => error === '')
  }
// =====================================================================================
  const submitdata=(event:React.ChangeEvent<HTMLInputElement>)=>{
    setdata({...data,
      [event.target.name]:event.target.value,
    })
  }

  const OnSubmitdata = (e:React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault();
 

    if (validateForm()) {

      StudentService.Login(data)
      .then((res)=>{
        if (   
          res &&
          res.data !== 0 &&
          res.data !== "Incorrect password" &&
          res.data !== "User not found"
          ) {
          console.log(res.data)
          localStorage.setItem('username',`${data.username}`);
          localStorage.setItem('First_name',`${data.fname}`);
          navig('/dashboard')
        }else {
          // Show alert for incorrect password
          setShowAlert(true);
        }
      }).catch((error)=>{
        console.log(error)
      })
    };
  };

  return (
    <div>
      <div className="container-fluid container-login">
        <div className="row justify-content-center">

          <div className="col-sm-5">
            <h3 className='mt-5 login-heading'>Login here</h3>

            <div className="card mt-5">
               <form action="" className='form' onSubmit={(e)=>OnSubmitdata(e)}>  

               {errors.username && <span className="error">{errors.username}</span>}<br/>
               <input type="text" placeholder='Username' value={data.username} name='username' onChange={(e)=>submitdata(e)}/><br /><br />

               {errors.pass && <span className="error">{errors.pass}</span>}<br/>
                <input type="text" placeholder='password' value={data.pass} name='pass' onChange={(e)=>submitdata(e)}/><br /><br />

                {showAlert && <div className="alert alert-danger">Incorrect username or password</div>}
                <div className="mb-2">
                    <input className="btn btn-info" type="submit" value="Submit" onChange={(e)=>submitdata(e)}/>
                    {/* <Link to='/dashboard' className='btn btn-info'>Submit</Link> */}
                        
                 </div>
               </form>
             
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
function success(arg0: string) {
  throw new Error('Function not implemented.');
}

