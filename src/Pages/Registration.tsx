import React, { useState } from 'react'
import { IRegis } from '../Interfaces/IRegis'
import { StudentService } from '../Service/StudentService'
import { Link, redirect, useNavigate } from 'react-router-dom';
import { error } from 'console';
  
const Registration:React.FC=( ) => {   
  
    const navig=useNavigate();

    const [student,setstudent]=useState<IRegis>({
    fname: '',
    lname: '',
    emailId:'',
    mobileNo: ''
    }); 
// ===================================================Validation Code format========================================
    const [errors, setErrors] = useState<IRegis>({
      fname: '',
      lname: '',
      emailId: '',
      mobileNo: '',
    });

    const validateForm = () => {
      const newErrors: IRegis = { fname: '', lname: '', emailId: '', mobileNo: '' };
    
      if (student.fname.trim() === '') {
        newErrors.fname = 'First name is required';
      }
    
      if (student.lname.trim() === '') {
        newErrors.lname = 'Last name is required';
      }
    
      if (student.emailId.trim() === '') {
        newErrors.emailId = 'Email is required';
      } else if (!/^\S+@\S+\.\S+$/.test(student.emailId)) {
        newErrors.emailId = 'Invalid email address';
      }
    
      if (student.mobileNo.trim() === '') {
        newErrors.mobileNo = 'Mobile number is required';
      }
    
      setErrors(newErrors);

      console.log(newErrors)
    
      return Object.values(newErrors).every((error) => error === '');
    };

    const submitData=(event:React.ChangeEvent<HTMLInputElement>)=>{
      setstudent(
        {
          ...student,[event.target.name]:event.target.value
        }
      )
    }   

    // --------------------------------------------
    const createPointsTableForUser = (localStore: any) => {
      const userPointDetails = {
        user_id: localStore,
        js_point: 0,
        react_point: 0,
        html_point: 0,
        css_point: 0,
      };
    
      StudentService.postUserOnPointsTable(userPointDetails)
        .then((res) => {
          if (res && res.data) {
            navig('/login');
            console.log(res,"Post User")
          }
        })
        .catch((error) => {
          console.log(error)
        });
    };
// ----------------------------------------------------------------------------------------------------
    const Onsubmitdata=(e:React.FormEvent<HTMLFormElement>)=>{
      e.preventDefault()
// =====================================Validation implement========================================
      if (validateForm()) {
        console.log(student, "student");
        StudentService.Registration(student)
          .then((res) => {
            if (res && res.data) {
              console.log(res,"registered success")
              createPointsTableForUser(res.data[2]);
              console.log(res.data[2])
            }
          })
          .catch((error) => {
            console.log(error);
          });
      }
    }

// ----------------------------------------------------------------------



  return (
    <div>
      <div className="container-fluid container-register">
 <div className="row justify-content-center">
          <h1 className='mt-5 registerationheading title'>Welcome to TechWorld</h1>
            <div className="col-sm-5">
            <div className=" mt-5" id='regis'>
             
                  <form className='form' action="" onSubmit={(e)=>Onsubmitdata(e)}>
                <h4 className='form-inputs'>Register here first</h4><br />
                       {errors.fname && <span className="error">{errors.fname}</span>}<br/>
                    <input type="text" placeholder='fist name' name='fname' value={student.fname} onChange={(e)=>submitData(e)} /><br /><br />

                       {errors.lname && <span className="error">{errors.lname}</span>}<br/>
                    <input type="text" placeholder='last name' name='lname' value={student.lname} onChange={(e)=>submitData(e)} /><br /><br />

                       {errors.mobileNo && <span className="error">{errors.mobileNo}</span>}<br/>
                    <input type="number" placeholder='Mobile number' name='mobileNo' value={student.mobileNo} onChange={(e)=>submitData(e)} /><br /><br />
                    
                       {errors.emailId && <span className="error">{errors.emailId}</span>}<br/>
                    <input type="email" placeholder='Email' name='emailId' value={student.emailId} onChange={(e)=>submitData(e)} /><br /><br />
                      
                <div className="mb-2">
                            <input className="btn btn-warning" type="submit" />
                            {/* <Link to='/login' className='btn btn-success'>Submit</Link> */}
                </div>
                </form>
                
             
            </div>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Registration
