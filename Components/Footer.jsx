import logo from "../src/assets/images/logo.svg"
import facebook from "../src/assets/images/icon-facebook.svg"
import youtube from "../src/assets/images/icon-youtube.svg"
import twitter from "../src/assets/images/icon-twitter.svg"
import pinterest from "../src/assets/images/icon-pinterest.svg"
import instagram from "../src/assets/images/icon-instagram.svg"




export default function Footer(){
  return (
    <footer className="relative bg-darkBlue p-12 mt-10 md:mt-0 -z-1">
      <div className="container mx-auto flex flex-col items-center text-white space-y-8 md:flex-row md:flex-start md:justify-between ">
        <div className="flex flex-col  items-center md:ml-0 space-y-10 md:space-y-16">
          <div>
            <img src={logo} alt="logo" className="bg-white md:mt-1"/>
          </div>
          <div className="flex space-x-4">
              <a href="#" className="hover:text-limeGreen">
                <img src={facebook} alt="facbook icon" />
              </a>
              <a href="#" className="hover:text-limeGreen"><img src={youtube} alt="youtube icon" />
              </a>
              <a href="#" className="hover:text-limeGreen">
              <img src={twitter} alt="twitter icon" />
              </a>
              <a href="#" className="hover:text-limeGreen">
              <img src={pinterest} alt="pinterest icon" />
              </a>
              <a href="#" className="hover:text-limeGreen">
              <img src={instagram} alt="instagram" />
              </a>
            </div>
        </div>
        <div className="flex flex-col items-center text-center md:flex-row md:text-left md:space-y-0 md:space-x-10 lg:-ml-22">
            <div className="flex flex-col space-y-4">
              <a href="#" className="hover:text-limeGreen">About Us</a>
              <a href="#" className="hover:text-limeGreen">Contact</a>
              <a href="#" className="mb-4 hover:text-limeGreen md:mb-0">Blog</a>
            </div>
            <div className="flex flex-col space-y-4">
              <a href="#" className="hover:text-limeGreen">Careers</a>
              <a href="#" className="hover:text-limeGreen">Support</a>
              <a href="#" className="hover:text-limeGreen">Privacy Policy</a>
            </div>
        </div>
        <div className="flex flex-col items-center text-center space-y-8  md:text-left md:items-end md:space-y-10 md:-mt-8">
          <button className="nav-btn p-3 px-6 pt-2 text-white text-sm bg-gradient-to-r from-limeGreen to-brightCyan rounded-full baseline hover:text-lightGrayishBlue ">
             Request Invite
          </button>
          <small className="text-grayishBlue"> &copy;EasyBank. All Rights Reserved</small>
      </div>
    </div>
    </footer>
  )
}