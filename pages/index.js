import React, {useState} from 'react'
import Filters from '../components/Filters'
import Search from '../components/Search'



const Index = ({darkMode}) => {

  const[filter1,setFilter1] = useState('')
  const[filter2,setFilter2] = useState('')
 
  return (
    <>
    <div className={`${darkMode?'bg-[#0F0E12]':'bg-gray-100'} min-h-screen w-full flex flex-wrap md:flex-nowrap `} >
      
    <div className='md:w-1/5 mt-10 ml-[7%] md:mr-0 mr-[7%] w-full ' >
        <Filters darkMode={darkMode} setFilter1={setFilter1} filter1={filter1} setFilter2={setFilter2} filter2={filter2}  />
    </div>
    <div className='md:w-4/5 mt-10 w-full ' >
      <Search darkMode={darkMode} filter1={filter1} filter2={filter2} />
    </div>

    </div>
    </>
  )
}

export default Index