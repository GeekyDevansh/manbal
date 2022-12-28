import React from "react";
import { BsFillSunFill } from "react-icons/bs";
import { BsFillMoonFill } from "react-icons/bs";

const Navbar = ({darkMode, setDarkMode}) => {

  const handleOnClick = ()=>{

    setDarkMode(!darkMode)

  }

  return (
    <div className={`${darkMode?'bg-black':'bg-gray-200'} ${darkMode?'text-white':'text-black'} flex relative drop-shadow-md `}>
      {darkMode?(<div className="py-4 ml-[7%] ">
        <svg
          width="38"
          height="26"
          viewBox="0 0 38 26"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M14.7632 17.8779C14.7632 17.932 14.7632 17.9861 14.7632 18.0402C14.7632 21.8808 11.6489 24.9912 7.81213 24.9912C3.97149 24.9912 0.861115 21.8769 0.861115 18.0402C0.861115 14.2034 3.97535 11.0891 7.81213 11.0891"
            stroke="white"
            strokeWidth="1.70833"
            strokeMiterlimit="10"
          />
          <path
            d="M7.81601 11.0851C7.87397 11.0851 7.93578 11.0851 7.99374 11.089"
            stroke="white"
            strokeWidth="1.70833"
            strokeMiterlimit="10"
          />
          <path
            d="M29.9673 11.0851C33.808 11.0851 36.9184 14.1994 36.9184 18.0362C36.9184 21.8729 33.8041 24.9872 29.9673 24.9872C26.1267 24.9872 23.0163 21.8729 23.0163 18.0362"
            stroke="white"
            strokeWidth="1.70833"
            strokeMiterlimit="10"
          />
          <path
            d="M8.30283 18.0401L13.8397 8.87513L19.8518 18.0401L9.36538 1.56863"
            stroke="white"
            strokeWidth="1.70833"
            strokeMiterlimit="10"
          />
          <path
            d="M6.53708 1.56863H12.6612"
            stroke="white"
            strokeWidth="1.70833"
            strokeMiterlimit="10"
          />
          <path
            d="M30.3382 18.0401L24.7975 8.87512H21.1462"
            stroke="white"
            strokeWidth="1.70833"
            strokeMiterlimit="10"
          />
          <path
            d="M24.7975 8.87518V5.45956"
            stroke="white"
            strokeWidth="1.70833"
            strokeMiterlimit="10"
          />
          <path
            d="M25.7402 1.09729H29.4341C30.3536 1.09729 31.2462 1.47208 31.8489 2.16757C32.641 3.0833 32.9694 4.5786 30.3382 6.63415"
            stroke="white"
            strokeWidth="1.70833"
            strokeMiterlimit="10"
          />
        </svg>
      </div>):(<div className="py-4 ml-[7%]">
        <svg
          width="38"
          height="26"
          viewBox="0 0 38 26"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M14.7632 17.8779C14.7632 17.932 14.7632 17.9861 14.7632 18.0402C14.7632 21.8808 11.6489 24.9912 7.81213 24.9912C3.97149 24.9912 0.861115 21.8769 0.861115 18.0402C0.861115 14.2034 3.97535 11.0891 7.81213 11.0891"
            stroke="black"
            strokeWidth="1.70833"
            strokeMiterlimit="10"
          />
          <path
            d="M7.81601 11.0851C7.87397 11.0851 7.93578 11.0851 7.99374 11.089"
            stroke="black"
            strokeWidth="1.70833"
            strokeMiterlimit="10"
          />
          <path
            d="M29.9673 11.0851C33.808 11.0851 36.9184 14.1994 36.9184 18.0362C36.9184 21.8729 33.8041 24.9872 29.9673 24.9872C26.1267 24.9872 23.0163 21.8729 23.0163 18.0362"
            stroke="black"
            strokeWidth="1.70833"
            strokeMiterlimit="10"
          />
          <path
            d="M8.30283 18.0401L13.8397 8.87513L19.8518 18.0401L9.36538 1.56863"
            stroke="black"
            strokeWidth="1.70833"
            strokeMiterlimit="10"
          />
          <path
            d="M6.53708 1.56863H12.6612"
            stroke="black"
            strokeWidth="1.70833"
            strokeMiterlimit="10"
          />
          <path
            d="M30.3382 18.0401L24.7975 8.87512H21.1462"
            stroke="black"
            strokeWidth="1.70833"
            strokeMiterlimit="10"
          />
          <path
            d="M24.7975 8.87518V5.45956"
            stroke="black"
            strokeWidth="1.70833"
            strokeMiterlimit="10"
          />
          <path
            d="M25.7402 1.09729H29.4341C30.3536 1.09729 31.2462 1.47208 31.8489 2.16757C32.641 3.0833 32.9694 4.5786 30.3382 6.63415"
            stroke="black"
            strokeWidth="1.70833"
            strokeMiterlimit="10"
          />
        </svg>
      </div>)}
      

      
      
      <div className="border-solid border-b-2 border-[#0094FF] p-4 ml-[20%] text-sm ">
        Dashboard
      </div>

    <button className=" top-[15%] border-2 p-2 border-gray-300 focus:outline-none rounded-full absolute right-[7%] " onClick={handleOnClick} >

    {darkMode?( <BsFillSunFill size={20} />):(<BsFillMoonFill size={20} />)}
   
    

    </button>

    </div>
  );
};

export default Navbar;
