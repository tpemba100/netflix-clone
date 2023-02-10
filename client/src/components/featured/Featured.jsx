import { InfoOutlined, PlayArrow } from "@mui/icons-material";
import axios from "axios";
import { Link } from "react-router-dom";
import "./featured.scss";
import { useState, useEffect } from "react";

export default function Featured({ type }) {
  const [content, setContent] = useState({});

  useEffect(() => {
    const getRandomContent = async () => {
      try {
        const res = await axios.get(`/api/movies/random?type=movies`, {
          // headers: {
          //   token:
          //     "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzY2UyMDgwZDA2YjMwMmI1MjdiYjdlYiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY3NTE5NTkzOSwiZXhwIjoxNjc1NjI3OTM5fQ.7HV5FvaXt0sepK9sZOcVE_0p6DTnceLUehhna9vLJYI",
          // },
        });
        setContent(res.data[0]);
      } catch (err) {
        console.log(err);
      }
    };
    getRandomContent();
  }, [type]);

  // console.log(content)

  return (
    <div className="featured">
      {type && (
        <div className="category">
          <span>{type === "movie" ? "Movies" : "Series"}</span>
          <select name="genre" id="genre">
            <option>Genre</option>
            <option value="adventure">Adventure</option>
            <option value="comedy">Comedy</option>
            <option value="crime">Crime</option>
            <option value="fantasy">Fantasy</option>
            <option value="historical">Historical</option>
            <option value="horror">Horror</option>
            <option value="sci-fi">Sci-fi</option>
            <option value="thrillerwestern">Thriller</option>
            <option value="western">Western</option>
            <option value="animation">Animation</option>
            <option value="drama">Drama</option>
            <option value="documentary">Documentary</option>
          </select>
        </div>
      )}
      <img
        // src="https://images.pexels.com/photos/6899260/pexels-photo-6899260.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
        src={content.img}
        alt=""
      />
      <div className="info">
        <img
          // src="https://upload.wikimedia.org/wikipedia/commons/2/23/Johnny_English_Title.png"
          src={content.imgTitle}
          alt=""
          width="200"
          height="200"
        />
        <span className="desc">{content.desc}</span>
        <div className="buttons">
          <Link to="/watch">
            <button className="play">
              <PlayArrow />
              <span className="play-btn">Play</span>
            </button>
          </Link>
          <button className="more">
            <InfoOutlined />
            <span>More</span>
          </button>
        </div>
      </div>
    </div>
  );
}
