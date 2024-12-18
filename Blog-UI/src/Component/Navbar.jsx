import React from 'react';
import Logo from '../assets/logo.png';



const Navbar = () => {
  // const [menuToggle, setMenuToggle] = useState(false);

  return (
    <div>
      <nav className='flex flex-wrap-reverse items-center justify-center gap-20 h-[60px] opacity-[100%] drop-shadow-lg bg-[#242535]'>

        <div>
          <img className='h-[30px] w-[130px] opacity-[100%] mr-[80px]' src={Logo} alt="logo"></img>
        </div>

        <ul className='flex gap-10 text-[14px] font-sans opacity-[100%] text-[white]'>

          <li className='hover:text-[#3c4493]'> Home </li>

          <li className='hover:text-[#3c4493]'> Blog </li>

          <li className='hover:text-[#3c4493]'> Single Post </li>

          <li className='hover:text-[#3c4493]'> Pages </li>

          <li className='hover:text-[#3c4493]'> Contact </li>

        </ul>

        <div className='flex gap-5 ml-20'>

          <button className='border-[1px] border-solid border-transparent rounded-[50px] justify-center h-[40px] w-[80px] flex items-center  text-white hover:bg-[#3e4694] text-[15px] hover:text-black'>
            Sign up
          </button>

          <button className='border-[1px] border-solid border-transparent rounded-[50px] justify-center h-[40px] w-[80px] flex items-center text-white hover:bg-[#3e4694] text-[15px] hover:text-black'>
            Log in
          </button>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
