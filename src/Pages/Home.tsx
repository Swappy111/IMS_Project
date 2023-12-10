import React, { useState } from 'react'
import { IRegis } from '../Interfaces/IRegis'
import { StudentService } from '../Service/StudentService'
import { Link, redirect, useNavigate } from 'react-router-dom';
import { error } from 'console';
import Navbar from './Navbar';
  
const Home:React.FC=( ) => {   
 
  return (
    <>

      <Navbar/>
{/* ---------------------------------------------------------------NAVBAR------------------------------------------------------ */}


{/* --------------------------------------------------------- First-Container----------------------------------------------------------- */}
  
  
    {/* <div className="container-fluid"> */}
    <div className='home-container'>
      <div className="flex justify-center items-center">
         <video autoPlay loop muted  className='background-video'  src="https://cdnsecakmi.kaltura.com/p/537811/sp/53781100/download/entry_id/0_xlka3d02/flavor/0_r2rc9vax"></video>
        {/* <video autoPlay loop muted  className='background-video'  src="https://vod-progressive.akamaized.net/exp=1701899127~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F4467%2F14%2F372335193%2F1547101002.mp4~hmac=b3419df5a6437270d43e677a3454a6c0f084e673a6884b7ca3f81f6c18eccf1b/vimeo-prod-skyfire-std-us/01/4467/14/372335193/1547101002.mp4"></video> */}
       
      <div className='tex-container'>  
      <h1 className='text-3xl md:text-5xl text'>Welcome To Tech-World</h1>
      <Link to={'/quiz'} className='button'>Quizes</Link>
      </div>
    </div>
    </div>

     {/* <div className='About-container'>
      <h2>About</h2>
      <h1></h1>
    </div> */}
    {/* </div> */}
   
    </>
  )
}

export default Home;
