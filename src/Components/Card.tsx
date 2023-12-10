import React from 'react';
import { Link } from 'react-router-dom';

const Card:React.FC<any>= ({text,points,route}) => {
  return (
    <>
   

          <div className="card quize-card">

              <div className="card-head">
          {/* <img src="https://images.unsplash.com/photo-1583339793403-3d9b001b6008?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMTc3M3wwfDF8c2VhcmNofDd8fGh0bWx8ZW58MHx8fHwxNjg5MjM5ODA1fDA&ixlib=rb-4.0.3&q=80&w=2000" className='card-img-top' alt="" /> */}
          <img src="https://images.pexels.com/photos/247791/pexels-photo-247791.png?auto=compress&cs=tinysrgb&w=800"  className='card-img-top' alt="" />
              </div>
              <div className="card-body">
                
              <h1>{text}</h1>
                  <h3>{points}</h3>
                  <Link to={route} className='btn btn-primary'>Start</Link>
              </div>
        </div>
        
  </>
  )
}

export default Card;
