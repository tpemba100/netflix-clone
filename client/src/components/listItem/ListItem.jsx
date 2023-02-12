import {
  Add,
  PlayArrow,
  ThumbUpAltOutlined,
} from "@mui/icons-material";
import { useEffect, useState } from "react";
import "./listItem.scss";
import { Link } from "react-router-dom";
import axios from "axios";

export default function ListItem({ index, item }) {
  const [isHovered, setIsHovered] = useState(false);
  const [movie, setMovie] = useState({});

  // const trailer ="https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c0fd273d2c6d9a064f3ae35579b2bbdf&profile_id=139&oauth2_token_id=57447761";

  useEffect(() => {
    const getMovie = async () => {
      try {
        const res = await axios.get(
          `/api/movies/find/` + item
          // , {
          // headers: {
          //   token:
          //     "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzY2UyMDgwZDA2YjMwMmI1MjdiYjdlYiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY3NTE5NTkzOSwiZXhwIjoxNjc1NjI3OTM5fQ.7HV5FvaXt0sepK9sZOcVE_0p6DTnceLUehhna9vLJYI",
          // },
          // }
        );
        setMovie(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getMovie();
  }, [item]);

  

  return (
    // <Link to="/watch" className="link">
    //using a object to pass movie to path and initalize path to watch
    <Link to="/watch" state={{ movie: movie }} className="link-cont">
      <div
        className="ListItem"
        style={{ left: isHovered && index * 225 - 50 + index * 2.5 }}
        // onMouseEnter={() => hoverDelay()}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* <img 
          src="https://occ-0-1723-92.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABU7D36jL6KiLG1xI8Xg_cZK-hYQj1L8yRxbQuB0rcLCnAk8AhEK5EM83QI71bRHUm0qOYxonD88gaThgDaPu7NuUfRg.jpg?r=4ee"
         alt="" 
        /> */}
        <img src={movie.img} alt="" />

        {isHovered && (
          <div>
            <video src={movie.trailer} autoPlay={true} loop />
            <div className="movieInfo">
              <div className="icons">
                <PlayArrow className="icon" />
                <Add className="icon" />
                <ThumbUpAltOutlined className="icon" />
                {/* <ThumbsUpDownOutlined className="icon" /> */}
              </div>
              <div className="itemInfoTop">
                <div className="title">{movie.title}</div>
                {/* <span>{movie.year}</span> */}
              </div>

              <div className="itemInfoButton">
                <div className="genre">{movie.genre}</div>
                <span className="limit">{movie.limit}</span>
                {/* <div className="desc">{movie.desc}</div> */}
              </div>
            </div>
          </div>
        )}
      </div>
    </Link>
  );
}
