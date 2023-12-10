import React, { useEffect, useState } from 'react'
import { IQuestions } from '../Interfaces/IQuestions'
import { StudentService } from '../Service/StudentService';
import { error } from 'console';
import Questions from '../Components/Questions';
import { useNavigate } from 'react-router-dom';

const Reactquestion:React.FC= () => {
  const [questions,setQuestions]=useState<IQuestions[]>();
  
  const localstore = localStorage.getItem("username");
  const navig=useNavigate();

  const [ans,setAns]=useState([]);

  const submitReacttest=()=>{
    if (ans.length === 0) return alert("attempt atleast one question.")
    
    let score=0;
    questions?.map((item)=>{
      ans?.map((answers: any)=>{
        if(item.question_id === answers?.question_id){
          if(item.correct === answers?.correct){
            score = score + 5;
          }
        }
      })
    });

    const updatedPointObj = {
      username: localstore,
      test: "react_point",
      point: score,
    };

    StudentService.updateTestPoints(updatedPointObj)
    .then((res) => {
      if (res.data) {
        navig("/dashboard");
      }
    })
    .catch((error) => {
      console.log(error)
    });
  };

  const GetReactQuestions=()=>{
    StudentService.getReactTestQuestions().then((res)=>{
      setQuestions(res.data)
    }).catch((error)=>{
      console.log(error)
    })
  };

  useEffect(()=>{
    GetReactQuestions();
  },[ans]);

  return (
    <>
    {questions?.map((items:any, index: any)=>{
      return(
        <div key={index}>
        <Questions items={items} setAns={setAns}  ans={ans}/>
        </div>
      )
    })}

    <button className='btn btn-primary' onClick={()=>submitReacttest()}>submit</button>

    </>
  )
}

export default Reactquestion;