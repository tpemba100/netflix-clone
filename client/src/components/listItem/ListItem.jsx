import {
  Add,
  PlayArrow,
  ThumbsUpDownOutlined,
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
        const res = await axios.get(`/api/movies/find/` + item, {
          headers: {
            token:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzY2UyMDgwZDA2YjMwMmI1MjdiYjdlYiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY3NTE5NTkzOSwiZXhwIjoxNjc1NjI3OTM5fQ.7HV5FvaXt0sepK9sZOcVE_0p6DTnceLUehhna9vLJYI",
          },
        });
        setMovie(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getMovie();
  }, [item]);

  // Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzY2UyMDgwZDA2YjMwMmI1MjdiYjdlYiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY3NTE5NTkzOSwiZXhwIjoxNjc1NjI3OTM5fQ.7HV5FvaXt0sepK9sZOcVE_0p6DTnceLUehhna9vLJYI

  return (
    // <Link to="/watch" className="link">
    //using a object to pass movie to path and initalize path to watch
    <Link to="/watch" state={{ movie: movie }} className="link">
      <div
        className="ListItem"
        style={{ left: isHovered && index * 225 - 50 + index * 2.5 }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <img src={movie.img} alt="" />
        {isHovered && (
          <>
            <video src={movie.trailer} autoPlay={true} loop />
            {/* ListItem -> Link  --> movieInfo  (Icons, itemInfoTop(duration, limit, year)desc, genre) */}
            <div className="movieInfo">
              <div className="icons">
                <PlayArrow className="icon" />
                <Add className="icon" />
                <ThumbUpAltOutlined className="icon" />
                <ThumbsUpDownOutlined className="icon" />
              </div>
              <div className="itemInfoTop">
                <span>{movie.duration}</span>
                <span className="limit">{movie.limit}</span>
                <span>{movie.year}</span>
              </div>
              <div className="desc">{movie.desc}</div>
              <div className="genre">{movie.genre}</div>
            </div>
          </>
        )}
      </div>
    </Link>
  );
}
