import { useState } from 'react'
import Navbar from '../components/Navbar'
import '../styles/index.css'

export default function App({ Component, pageProps }) {

  const [darkMode, setDarkMode] = useState(true)

  return(
    <>
    <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
    <Component darkMode={darkMode} {...pageProps} />
    </>
  ) 
 
}
