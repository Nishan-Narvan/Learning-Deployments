import { useState } from 'react'
import { FaTimes } from 'react-icons/fa'

import Navbar from './components/Navbar'

import Newcourses from './components/Newcourses'
import Exisitingcourses from './components/Exisitingcourses'
import Hero from './components/Hero'
import Button from './components/Button'



function App() {
  const [on, setOn] = useState(false)
    const [notif, setNotif] = useState(false)

  return (
    <>
      {/* hide-scrollbar CSS for webkit + Firefox + IE */}
      <style>{`
        .hide-scrollbar::-webkit-scrollbar { display: none; }
        .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>

      <div className='flex overflow-y-auto h-screen w-screen flex-col bg-gray-200 items-center relative' >
        {on && <div className='fixed inset-0 z-50 flex items-center justify-center backdrop-blur-md bg-black/20 overflow-auto hide-scrollbar'>
            <div className='p-15 flex flex-col max-w-[550px] max-h-[90vh] overflow-y-auto hide-scrollbar rounded-2xl justify-center bg-black/70 gap-10 text-white text-2xl relative'>
            {/* Cancel icon from react-icons/fa */}
            <button
              className='cursor-pointer hover:scale-110 hover:shadow-5xl shadow-md transition-shadow duration-100 absolute right-2 top-3 p-2 text-white'
              
              onClick={() => setOn(false)}
              aria-label="Close"
            >
              <FaTimes />
            </button>
            <input
              className='bg-amber-50 text-black hover:bg-gray-300 transition-colors ease-in-out duration-200 p-4 w-full rounded-md focus:outline-none focus:ring-0'
              placeholder='Enter Your HOOD_name'
            />
            <input
              className='bg-amber-50 text-black hover:bg-gray-300 transition-colors ease-in-out duration-200 p-4 rounded-md w-full focus:outline-none focus:ring-0'
              placeholder='Your reason for selecting this?'
            />
            <input
              className='bg-amber-50 text-black rounded-md hover:bg-gray-300 transition-colors ease-in-out duration-200 p-4 w-full mb-10 focus:outline-none focus:ring-0'
              placeholder='Enter Your Email/Phone '
            />
            <div className='w-full absolute -bottom-0.5 pb-3 right-1.5 flex justify-center items-center'>
              <Button  onClick={() => {
                  setOn(false)
                  setNotif(true)
                }} className='md:text-3xl max-w-33 rounded-xl'>Submit</Button>
            </div>
            

            </div>
          </div>}

 
      <Navbar/>
      <div className='h-screen w-screen'><Hero/></div>
      
      <Exisitingcourses setOn={setOn}/>
      <Newcourses setOn={setOn}/>
      {notif && (
       <div className='fixed animate-bounce duration-500 top-70 text-4xl bg-green-600 text-white px-5 py-3 rounded-lg shadow-lg z-50'>
         Our representative will contact you.
       </div>
          )}
          {notif && setTimeout(() => setNotif(false), 12000)}
      </div>
      
      
     
    </>
  )
}

export default App
