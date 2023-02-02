import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(0);

  return (
    <>
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            key="menu"
            className="w-screen h-[90vh] backdrop-filter backdrop-blur-lg bg-opacity-70 fixed top-[10vh] md:hidden"
            initial={{ opacity: 0, x: '-100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '-100%' }}
            // transition={{ duration: 0.3 }}
          >
            <ul className="cu--navbar-text h-[90vh] flex flex-col gap-[5vh] text-[450%] justify-center pl-[5vw]">
              <li>
                <a
                  onClick={() => {
                    setIsMenuOpen(false);
                  }}
                  href="#home"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  onClick={() => {
                    setIsMenuOpen(false);
                  }}
                  href="#aboutme"
                >
                  About me
                </a>
              </li>
              <li>
                <a
                  onClick={() => {
                    setIsMenuOpen(false);
                  }}
                  href="#music"
                >
                  Music
                </a>
              </li>
              <li>
                <a
                  onClick={() => {
                    setIsMenuOpen(false);
                  }}
                  href="#vedio"
                >
                  Video
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
      <nav className="h-[10vh] w-screen  px-[10vw] flex  items-center backdrop-filter backdrop-blur-lg bg-opacity-30 fixed top-0 bg-slate-700">
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
                href="#home"
                className="text-white border-2 hover:border-white hover:bg-white hover:text-black  border-[#FFC5DA] px-[2.5vw] py-[0.3vw] rounded-full"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#aboutme"
                className="hover:border-white hover:bg-white hover:text-black text-white border-2 border-[#FFC5DA] px-[2vw] py-[0.3vw] rounded-full"
              >
                About me
              </a>
            </li>
            <li>
              <a
                href="#music"
                className="hover:border-white hover:bg-white hover:text-black text-white  border-2 border-[#FFC5DA] px-[2.5vw] py-[0.3vw] rounded-full"
              >
                Music
              </a>
            </li>
            <li>
              <a
                href="#vedio"
                className="hover:border-white hover:bg-white hover:text-black text-white  border-2 border-[#FFC5DA] px-[2.5vw] py-[0.3vw] rounded-full"
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
