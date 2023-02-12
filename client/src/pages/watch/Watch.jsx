import { ArrowBackOutlined } from "@mui/icons-material"
import { Link, useLocation } from "react-router-dom"
import "./watch.scss"

export default function Watch() {
  const location = useLocation();
  const movie = location.state.movie;

  // console.log(location.state)
 
  return (
    <div className="watch">
        <Link to="/">
        <div className="back">
            <ArrowBackOutlined className="backButton"/>
            Home
        </div>
        </Link>
        <video
            className="video"
            autoPlay
            progress
            controls
            // src = "https://res.klook.com/images/fl_lossy.progressive,q_65/c_fill,w_1200,h_630/w_80,x_15,y_15,g_south_west,l_Klook_water_br_trans_yhcmh3/activities/t9ur9cc1khkup1dmcbzd/IMG%20Worlds%20of%20Adventure%20Admission%20Ticket%20in%20Dubai%20-%20Klook.jpg"
            src ={movie.video}
        />
    </div>
  )
}
