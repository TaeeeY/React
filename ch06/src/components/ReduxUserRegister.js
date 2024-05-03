import React, { useContext, useState } from 'react'
import UserContext from '../contexts/UserContext';
import { useDispatch } from 'react-redux';
import { addUser } from "../slices/userSlice";

const ReduxUserRegister = () => {

    const dispatch = useDispatch();    
    const [user, setUser] = useState({uid:"", name:"", age:0});

    // 상태값을 업데이트하는 핸들러
    const inputChangeHandler = (e) => {
        setUser({[e.target.name]:e.target.value});
    };

        const submitHandler = (e) => {
            e.preventDefault();

            // Context users 상태 업데이트
            dispatch(addUser(user));
    };


  return (
    <div className='ReduxUserRegister'>
        <p>ReduxUserRegister 실습</p>
        <form>
            <input type='text' name='uid' value={user.uid} /><br />
            <input type='text' name='name' value={user.name} /><br />
            <input type='text' name='age' value={user.age} /><br />
            <input type="submit" value="저장" /><br />
        </form>
    </div>
  );
};

export default ReduxUserRegister;