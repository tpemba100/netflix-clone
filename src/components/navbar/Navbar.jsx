import { Search, Notifications, ArrowDropDown, PermIdentity, Settings } from "@mui/icons-material"
import { useState } from "react"
import { Link } from "react-router-dom";
import "./navbar.scss"
const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);

   window.onscroll = () => {
         setIsScrolled(window.pageYOffset === 0 ? false : true);
         return () => (window.onscroll = null);
   };


  return (
    <div className={isScrolled ? "navbar scrolled" : "navbar"}>
        <div className="container">
            <div className="left">
                <img 
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"  
                    alt=""
                />
                <span>Home</span>
                <span>TV Shows</span>
                <span>Movies</span>
                <span>New and Popular</span>
                <span>My List</span>
            </div>
            <div className="right">
                <Search  className="icon"/>
                <Notifications className="icon"/>
                <img
                    src="https://images.pexels.com/photos/106685/pexels-photo-106685.jpeg?cs=srgb&dl=pexels-mark-broadhurst-106685.jpg&fm=jpg"
                    alt=""
                />
                <div className="profile">
                    <ArrowDropDown className="icon dropdownIcon"/>
                    <div className="options">
                        <div className="optionIcon ">
                            <PermIdentity/>
                            <span>Account</span>
                        </div>
                        <div className="optionIcon">
                            <Settings/>
                            <span>Setting</span>
                        </div>
                        <Link to="/" >
                            <div>
                            <span className="signout">Sign out of Netflix</span>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
            
        </div>
    </div>
  )
}

export default Navbar
