import { Search, Notifications, ArrowDropDown, PermIdentity, Settings } from "@mui/icons-material"
import { useState, useContext } from "react"
import { Link } from "react-router-dom";
import "./navbar.scss"
import { AuthContext } from "../../authContext/AuthContext";
import { logout } from "../../authContext/AuthAction";

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const { dispatch } = useContext(AuthContext);

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
                <Link to="/" className="link">
                    <span>Home</span>
                </Link>
                <Link to="/series" className="link">
                    <span>TV Shows</span>
                </Link>
                <Link to="/movies" className="link">
                    <span>Movies</span>
                </Link>
                <Link to="/new-and-popular" className="link">
                    <span>New and Popular</span>
                </Link>
                <Link to="/my-list" className="link">
                    <span>My List</span>
                </Link>
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
                            <span onClick={()=>dispatch(logout())} className="signout">Sign out of Netflix</span>
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
