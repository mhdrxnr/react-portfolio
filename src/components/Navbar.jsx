import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";



export default function Navbar() {
  return (
    <nav className=" mb-20 flex items-center justify-between py-6">
        <div className="flex flex-shrink-0 items-cetner">
            <h1 className="mx-4 text-3xl hover:text-purple-400 transition-all ease-in delay-100">Mhd</h1>
        </div>
        <div className="m-8 flex items-center justify-center gap-4 text-2xl ">
            <a href="https://www.linkedin.com/in/mohamed-amamra-336461324" target='_blank'><FaLinkedin className='hover:text-purple-400 transition-all ease-in delay-100 cursor-pointer' /></a>
            <a href="https://github.com/mhdrxnr" target='_blank'><FaGithub className='hover:text-purple-400 transition-all ease-in delay-100 cursor-pointer'/></a>
            <a href="https://x.com/Mhd__offc" target='_blank'><FaSquareXTwitter className='hover:text-purple-400 transition-all ease-in delay-100 cursor-pointer'/></a>
            <a href="https://instagram.com/mhd__offc" target='_blank'><FaInstagram className='hover:text-purple-400 transition-all ease-in delay-100 cursor-pointer'/></a>
        </div>
    </nav>
  )
}

