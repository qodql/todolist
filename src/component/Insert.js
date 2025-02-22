import React from 'react'
import { v4 as uuidv4 } from 'uuid';
import store from '../state/store';
import swal from 'sweetalert';

const Insert = () => {
    let {dataCtrl} = store();

    let insert = (e)=>{
        e.preventDefault();
        let value = e.target.todo.value;
        let data ={id:uuidv4(), todo: value, status:false}

        if(value !== ''){
            dataCtrl({type:"post",data});
        }else{
            swal("내용을 입력해 주세요");
        }
        e.target.todo.value = '';
        e.target.todo.focus();
    }
    
    

  return (
    <div className='insert'>
        <form onSubmit={insert}>
            <input type='text' name='todo' placeholder='오늘의 할 일'/>
            <button>+</button>
        </form>
    </div>
  )
}

export default Insert