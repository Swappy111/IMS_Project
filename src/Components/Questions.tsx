import React, { useState } from 'react'
import { IQuestions } from '../Interfaces/IQuestions';

interface IProps {
  items: IQuestions;
  ans: any;
  setAns: any;
}

const Questions:React.FC<IProps>= ({items,setAns,ans}) => {

  const [value,setValue]=useState();

  const handleChange=(e:any)=>{
    console.log(e.target.value);

    ans.map((item: any, index: any) => {
      if (item.question_id === items.question_id) {
        ans.splice(index, 1);
      }
    });

    setAns((prevState: any) => [
      ...prevState,
      {
        question_id: items  .question_id,
        correct: e.target.value,
      },
    ]);
    console.log(ans)
  }
  return (
    <>
       <h5>{items.question}</h5>

    <form onChange={(e)=>handleChange(e)}>
      <input type="radio"   name="MCQ" value="a"/>
  <label htmlFor="MCQ">{items?.a}</label><br/>
  <input type="radio"   name="MCQ" value="b"/>
  <label htmlFor="MCQ">{items?.b}</label><br/>
  <input type="radio"   name="MCQ" value="c"/>
  <label htmlFor="MCQ">{items?.c}</label><br/>
  <input type="radio"   name="MCQ" value="d"/>
  <label htmlFor="MCQ">{items?.d}</label><br /><br />
    </form>

    </>
  )
}

export default Questions;
