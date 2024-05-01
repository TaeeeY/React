import React, { useState } from 'react'

const UseStateComponent = () => {

    // state 생성
    // 옆에 setter 같이 써주기
    const [count, setCount] = useState(0);
    const [message, setMessage] = useState("");
    const [user, setUser] = useState({uid:"", name:"", age: 0 });


    const inputChangeHandler = (e)=>{
        setMessage(e.target.value);
    };


  return (
    <div className='UseStateComponent'>
        <h4>useState hooks 실습</h4>

        <p>
            상태값 : count : {count}
            <br />
            <button onClick={() => {setCount(count + 1)}}>증가</button>
            <button onClick={() => {setCount(count - 1)}}>감소</button>
        </p>

        <p>{message}</p>
        <input type='text' value={message} onChange={inputChangeHandler} />

        <p>
            아이디 : {user.uid}<br />
            이름 : {user.name}<br />
            나이 : {user.age}<br />
        </p>
        {/*...user, = 불변성 유지해주는 방법
            불변성을 유지시켜야 기존 상태를 업데이트
        */}
        <input type='text' value={user.uid} onChange={(e) => {setUser({...user, uid : e.target.value})}} />
        <br />
        <input type='text' value={user.name} onChange={(e) => {setUser({...user, name : e.target.value})}} />
        <br />
        <input type='text' value={user.age} onChange={(e) => {setUser({...user, age : e.target.value})}} />
    </div>
  )
}

export default UseStateComponent