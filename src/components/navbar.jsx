import { useState } from 'react';
import { motion } from 'framer-motion';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(0);

  return (
    <>
      {/* <div className="w-screen h-screen bg-white fixed top-0 ">
        <ul>
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">About me</a>
          </li>
          <li>
            <a href="">Music</a>
          </li>
          <li>
            <a href="">Video</a>
          </li>
        </ul>
      </div> */}

      <nav className="h-[10vh] w-screen  px-[10vw] flex  items-center fixed top-0 backdrop-filter backdrop-blur-lg bg-opacity-30 ">
        <div className=" w-full flex justify-end mt-[2vh]">
          {/*For mobile screens  */}
          <button
            className=" md:hidden z-100 "
            onClick={() => {
              setIsMenuOpen(!isMenuOpen);
            }}
          >
            <motion.img
              className="w-[3.5vmax]"
              whileTap={{ y: '-1vh', opacity: 0 }}
              transition={{ type: 'spring' }}
              src={isMenuOpen ? './nav/cross.png' : './nav/burgerMenu.png'}
            />
          </button>

          {/* For Desktop screens */}

          <ul className=" flex-row gap-[1vw] hidden md:flex">
            <li>
              <a
                href="#"
                className="text-[black] border border-white bg-white px-[2.5vw] py-[0.3vw] rounded-full"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-white border-2 border-[#FFC5DA] px-[2vw] py-[0.3vw] rounded-full"
              >
                About me
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-white  border-2 border-[#FFC5DA] px-[2.5vw] py-[0.3vw] rounded-full"
              >
                Music
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-white  border-2 border-[#FFC5DA] px-[2.5vw] py-[0.3vw] rounded-full"
              >
                Video
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
