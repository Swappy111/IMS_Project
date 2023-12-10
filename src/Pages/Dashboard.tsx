import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Card from '../Components/Card'
import { StudentService } from '../Service/StudentService';

const Dashboard:React.FC<any>= ({
   javascriptPoint,
   htmlPoint,
   cssPoint,
   reactPoint,
   setCssPoint,
   setHtmlPoint,
   setReactPoint,
   setJavascriptPoint,
 }) => {
   
   const localStore = localStorage.getItem("username");

   const getUserscore = async ()=> {
      
      await StudentService.getUsersPoint(localStore)
      .then((res) => {
        setCssPoint(res.data[0].css_point);
        setHtmlPoint(res.data[0].html_point);
        setReactPoint(res.data[0].react_point);
        setJavascriptPoint(res.data[0].js_point);
      })
      .catch((error) => { console.log(error) });
      };

   useEffect(()=>{
      getUserscore();
   },[]);   
   
   const handleLogout = () => {
      localStorage.removeItem("username"); 
    };

  return (
     <>
        <nav className='dashboard-navbar'>
            <Link to={'/'} className='btn btn-dark logout-button' onClick={()=>handleLogout()}>Log Out</Link>
        </nav>

   <div className="container quize-page">
      <img src="https://images.pexels.com/photos/276514/pexels-photo-276514.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className='dashboard-image' alt="" />
      <div className="row mt-5">

        <div className="col-3">
         <Card text={"HTML"} points={"50 points"} route={"/html"} />
         <div className="score-circle">Score={htmlPoint}</div>
        </div>

         <div className="col-3">
         <Card text={"CSS"} points={"50 points"} route={"/css"} />
         <div className="score-circle">Score={cssPoint}</div>
          </div>

          <div className="col-3">
         <Card text={"JavaScript"} points={"50 points"} route={"/javascript"} />
         <div className="score-circle">Score={javascriptPoint}</div>
          </div>

          <div className="col-3">
         <Card text={"React"} points={"50 points"} route={"/react"} />
         <div className="score-circle">Score={reactPoint}</div>
          </div>


    </div>
   </div>
     </>
  )
}

export default Dashboard;
