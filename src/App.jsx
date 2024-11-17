///by kin vikam maurya
// import { useState } from 'react'
// function App() {
//   const [count, setCount] = useState('white')
//   function click(color) {
//     setCount(color)
//   }
//   return (
//     <>
//      <div style={{backgroundColor:count}} className='h-screen w-screen flex gap-9 justify-center items-center'>
//      <button className=" w-24 text-xl bg-slate-500 " onClick={(()=>click('aqua'))}>aqua</button>
// <button className=" text-xl bg-red-600" onClick={()=>click('red')}>red</button> 
// <button className="text-xl bg-blue-600" onClick={()=>click('blue')}>blue</button>
// <button className=" w-24 text-xl bg-yellow-600" onClick={()=>click('yellow')} >yellow</button>
//      </div>
//     </>
//   )
// }
// export default App




///////////////////////by ravi sir

import React, { useState } from 'react'
const App = () => {
  const[color ,setcolor]=useState('bg-white')
  return (
    <div className={`min-h-screen flex items-end ${color}`}>
      <div className=' m-auto w-2/4 flex justify-evenly border rounded-2xl mb-14'>
        <div1 className='btn bg-green-600' onClick={()=>setcolor('bg-green-600')}>green</div1>
        <div2 className='btn bg-yellow-600' onClick={()=>setcolor('bg-yellow-600')}>yellow</div2>
        <div3 className='btn  bg-red-600' onClick={()=>setcolor('bg-red-600')}>red</div3>
        <div4 className='btn bg-orange-600' onClick={()=>setcolor('bg-orange-600')}>orange</div4>
      </div>
    </div>
  )
}

export default App