import React, { useState } from 'react';

const AdditionButton = (props) => { //khi state của thằng cha truyền cho thằng con thì thứ thằng con nhận được là props, vì state chỉ có phạm vi khai báo là chính component đó.
    //console.log(props.data); //data được truyền thông qua props
    const [result, setResult] = useState();

    const handleAdd = () => {
        let result = parseInt(props.data.number1) + parseInt(props.data.number2); //cần phải ép lại kiểu dữ liệu vì giá trị input nhận vào đang là string
        props.handleResult(result);
    }

  return (
    <>
        <button onClick={handleAdd}>+</button>
    </>
  )
}

export default AdditionButton