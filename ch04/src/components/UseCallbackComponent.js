import React, { useEffect, useState } from 'react'

const UseCallbackComponent = () => {
    const [number, setNumber] = useState(1);
    const [toggle, setToggle] = useState(true);

    const btnHandler = () => {
        console.log(`btnHandler number : ${number}`);
    };

    useEffect(() => {
        console.log('btnHandler 변경!');
    }, [btnHandler]);

  return (
    <div className='UseCallbackComponent'>
        <h4>UseCallback hook 실습</h4>

        <p>
            number : <input type='number' value={number} onChange={(e)=>{
                setNumber(e.target.value);
            }} />
        </p>

        <button onClick={btnHandler}>확인</button>

    </div>
  )
}

export default UseCallbackComponent