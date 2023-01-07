import { IoLocationSharp } from 'react-icons/io5';

const data = [
  {
    src: './nav/facebook.png',
    alt: 'Facebook',
    link: 'https://www.facebook.com',
  },
  {
    src: '/public/nav/Ig.png',
    alt: 'Instagram',
    link: 'https://www.instagram.com',
  },
  {
    src: '/public/nav/Spotify.png',
    alt: 'Spotify',
    link: 'https://www.spotify.com',
  },
  {
    src: '/public/nav/youtube.png',
    alt: 'Youtube',
    link: 'https://www.youtube.com',
  },
  {
    src: '/public/nav/twitter.png',
    alt: 'Twitter',
    link: 'https://www.twitter.com',
  },
  {
    src: '/public/nav/snapchat.png',
    alt: 'Snap Chat',
    link: 'https://www.snapchat.com',
  },
  {
    src: '/public/nav/appleMusic.png',
    alt: 'Apple Music',
    link: 'https://music.apple.com',
  },
  {
    src: '/public/nav/deezer.png',
    alt: 'Deezer',
    link: 'https://www.deezer.com',
  },
];

function Footer() {
  return (
    <>
      <div className="w-full h-[70vh] bg-black flex flex-col  justify-center md:items-center">
        <h2 className="text-white text-center text-[500%] cu--thankyou-text md:hidden">
          THANK
        </h2>
        <h2 className="text-white text-center text-[500%] cu--thankyou-text md:hidden mt-[-11%]">
          YOU
        </h2>
        <h2 className="text-white text-center text-[830%] cu--thankyou-text hidden md:block md:pr-[2vw]">
          THANK YOU
        </h2>

        <div className="flex md:gap-[1vw] w-full justify-center">
          {data.map((icon) => (
            <button key={icon.alt} className="text-white">
              <a href={icon.link}>
                <img
                  src={icon.src}
                  alt={icon.alt}
                  className="md:w-[4vw] md:max-w-[50px] w-[10vw]"
                />
              </a>
            </button>
          ))}
        </div>
      </div>
      <footer className="w-full h-[15vh] bg-[#D9D9D9] px-[7vw] md:py-[3vh] py-[2vh] flex  flex-wrap md:flex-row justify-between">
        <div className='flex flex-col gap-[0.5vh]'>
          <span className="flex flex-nowrap items-end ">
            <IoLocationSharp size={'2rem'} />
            <p>Colombo, Sri Lanka</p>
          </span>
          <p>Email : thecreativocode@gmail.com</p>
        </div>
        <div  className='flex items-end md:text-[90%] text-[70%]'>
          <p>Copyright 2022 © Creativo Code. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}

export default Footer;
