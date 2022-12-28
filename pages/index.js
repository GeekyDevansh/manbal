import React from 'react'
import Filters from '../components/Filters'
import Search from '../components/Search'



const index = ({darkMode}) => {

 
  return (
    <>
    <div className={`${darkMode?'bg-[#0F0E12]':'bg-gray-100'} h-full w-full flex flex-wrap md:flex-nowrap `} >
      
    <div className='md:w-1/5 mt-10 ml-[7%] md:mr-0 mr-[7%] w-full ' >
        <Filters darkMode={darkMode} />
    </div>
    <div className='md:w-4/5 mt-10 w-full ' >
      <Search darkMode={darkMode} />
    </div>

    </div>
    </>
  )
}

export default index