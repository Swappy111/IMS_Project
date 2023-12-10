import React, { useEffect, useState } from 'react'
import { StudentService } from '../Service/StudentService';
import { error } from 'console';
import { IQuestions } from '../Interfaces/IQuestions';
import Questions from '../Components/Questions';
import { useNavigate } from 'react-router-dom';

const Html:React.FC= () => {
  const [questions,setQuestions]=useState<IQuestions[]>();

  const localstore = localStorage.getItem("username");
  const navig=useNavigate();
  
  const [ans,setAns]=useState([]);

  const submitHtmltext=()=>{
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
      test: "html_point",
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
  
  const GetHtmlQuestion=()=>{
    StudentService.getHtmlTestQuestions().then((res)=>{
      setQuestions(res.data)
    }).catch((error)=>{
      console.log(error)
    })
  };

  useEffect(()=>{
    GetHtmlQuestion();
  },[ans])
  return (
      <>
        {questions?.map((items:any, index:any)=>{
          return(
            <div key={index}>
            <Questions items={items}  setAns={setAns}  ans={ans}/>
            </div>
          )
        })}

       <button className='btn btn-primary' onClick={()=>submitHtmltext()}>submit</button>

      </>
  )
}

export default Html
