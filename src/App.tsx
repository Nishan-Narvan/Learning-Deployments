import { useState } from 'react'


import Navbar from './components/Navbar'

import Newcourses from './components/Newcourses'
import Exisitingcourses from './components/Exisitingcourses'
import Hero from './components/Hero'

function App() {
  const [on, setOn] = useState(false)

  return (
    <>
      <div className='flex overflow-y-auto h-screen w-screen flex-col bg-gray-200 items-center ' >
        {on && <div>This is a model</div>}

 
      <Navbar/>
      <div className='h-screen w-screen'><Hero/></div>
      
      <Exisitingcourses setOn={setOn}/>
      <Newcourses setOn={setOn}/>
      </div>
      
      
     
    </>
  )
}

export default App
