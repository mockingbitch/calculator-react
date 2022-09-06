import React, { useState, useCallback } from 'react'
import AdditionButton from './components/AdditionButton';
import SubtractionButton from './components/SubtractionButton';
import MultiplicationButton from './components/MultiplicationButton';
import DivisionButton from './components/DivisionButton';

const App = () => {
  const [data, setData] = useState(); //khai báo data bằng useState => trong state hiện đã có 1 biến là data
  const [result, setResult] = useState();

  const handleOnChange = useCallback((event) => {  //định nghĩa hàm handleOnchange
    const { name, value } = event.target; //lấy ra name và value của ô input thông qua event.target input
    setData({ ...data, [name] : value}); //set lại data dựa theo name và value của ô input 
  });
console.log(data); //đã lấy được data

  //viết hàm xử lý kết quả:
  const handleResult = (returnResult) => {
    setResult(returnResult)
  }
console.log(result);
  return (
    <>
      <div className='main'>
        <input type='number' name="number1" onChange={handleOnChange} className='form-control' placeholder='Enter number 1' />  {/* hàm onChange dùng để bắt sự kiện của ô input */}
        <br/>
        <input type='number' name="number2" onChange={handleOnChange} className='form-control' placeholder='Enter number 2' /> {/* thông thường thì onChange sẽ viết dưới dạng onChange={(event) => this.handleOnChange(event)} */}
      </div>
      <br/>
      <AdditionButton data={data} handleResult={handleResult} />  {/* gọi các components ra và truyền state vào components */}
      <SubtractionButton data={data} handleResult={handleResult} /> 
      <MultiplicationButton data={data} handleResult={handleResult} />
      <DivisionButton data={data} handleResult={handleResult} />
      <br/>
      <input type='text' value={result} />
    </>
  )
}

export default App