// import React from 'react';
// import { Link } from 'react-router-dom';
// import { Stack } from '@mui/material';

// import Logo from '../assets/images/Logo.png';

// const Navbar = () => (
//   <Stack direction="row" bgcolor="#FFEBAD" sx={{ gap: { sm: '123px', xs: '40px' }, mt: { sm: '32px', xs: '20px' } }} px="20px">
//     <Link to="/">
//       <img src={Logo} alt="logo" style={{ width: '48px', height: '48px', margin: '0px 20px' }} />
//     </Link>
//     <Stack
//       direction="row"
//       gap="40px"
//       fontFamily="Alegreya"
//       fontSize="24px"
//       alignItems="flex-end"
//     >
//       <Link to="/" style={{ textDecoration: 'none', color: '#3A1212', borderBottom: '3px solid #FF2625' }}>Home</Link>
//       <a href="#exercises" style={{ textDecoration: 'none', color: '#3A1212' }}>Exercises</a>
//     </Stack>
//   </Stack>
// );

// export default Navbar;

import React from "react";
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import Logo from '../assets/images/Logo.png';

export default function Navbar() {
  return (
    <header className="bg-[#faf1e8] sticky top-0 z-10">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <div className="title-font font-medium text-white mb-4 md:mb-0">
        <img src={Logo} alt="logo" style={{ width: '48px', height: '48px', margin: '0px 20px' }} />
        </div>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center">
          <a href="/" className="mr-5 hover:text-[#FF2625]">
           Home
          </a>
          <a href="#exercises" className="mr-5 hover:text-[#FF2625]">
          Exercises
          </a>
          <a href="https://github.com/liuhangfan/fitness-app" className="mr-5 hover:text-[#FF2625]">
            Github
          </a>
        </nav>
        <a
          href="https://hangfan.link"
          className="inline-flex items-center border-0 py-1 px-3 focus:outline-none hover:text-[#FF2625] rounded text-xl mt-4 md:mt-0">
          Contact Me
          <ArrowOutwardIcon  fontSize="medium" />
        </a>
      </div>
    </header>
  );
}