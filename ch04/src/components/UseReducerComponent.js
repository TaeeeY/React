import React, { useReducer } from 'react'

// 초기 상태와 리듀서 함수 정의
const initcountState = {count : 0};

function countReducer(state, action){
    switch(action.type){   
        case "INCREASE":
            return {count: state.count + 1};
        case "DECREASE":
            return {count: state.count - 1};
        case "RESET" :
            return {count : 0};
    }
}

// 초기상태와 리듀서 함수 정의
const initUserState = {name: "", age: 0};

function userReducer(state, action) {
    // 불변성을 유지해 이전 상태를 복사하고 새로운 값을 업데이트
    return {...state, [action.name] : action.value};
}

const UseReducerComponent = () => {
    const [countState, countDispatch] = useReducer(countReducer, initcountState);
    const [userstate, userDispatch] =useReducer(userReducer, initUserState);

  return (
    <div className='UseReducerComponent'>
        <h4>useReducer hook 실습</h4>

        <p>count : {countState.count}</p>
        <>
        <button onClick={() => {countDispatch({type:'INCREASE'})}}>증가</button>
        <button onClick={() => {countDispatch({type:'DECREASE'})}}>감소</button>
        <button onClick={() => {countDispatch({type:'RESET'})}}>리셋</button>
        </>

        <p>
            이름 : {userstate.name}
            <br />
            나이 : {userstate.age}
            <br />
        </p>
        

        <>
        <input type='text' name='name' value={userstate.name} onChange={(e) => {userDispatch(e.target)}} /><br />
        <input type='text' name='age' value={userstate.age} onChange={(e) => {userDispatch(e.target)}} />
        </>
    </div>
  )
}

export default UseReducerComponent