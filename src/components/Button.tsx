import React from 'react'

const Button = ({children, onClick, className}:{children: React.ReactNode, onClick: () => void, className?: string}) => {
  return (
    <button className={`border-blue-700/90 bg-blue-600 m-2  text-base rounded-lg text-white  font-bold hover:-translate-y-1  px-4 py-2 transition-transform ease-in-out duration-200 hover:shadow-[0_8px_16px_rgba(0,0,0,0.4)] cursor-pointer ${className}`} onClick={onClick}>{children}</button>
  )
}

export default Button