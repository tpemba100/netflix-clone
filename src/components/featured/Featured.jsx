import { InfoOutlined, PlayArrow } from "@mui/icons-material"
import { Link } from "react-router-dom"
import "./featured.scss"

export default function Featured({type}) {
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
            src="https://images.pexels.com/photos/6899260/pexels-photo-6899260.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" 
            alt="" 
        />
        <div className="info">
            <img 
                src="https://upload.wikimedia.org/wikipedia/commons/2/23/Johnny_English_Title.png" 
                alt="" 
            />
            <span className="desc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias repudiandae expedita 
                excepturi suscipit veritatis et error odit tempore, 
                quaerat eum ipsa illum hic tenetur voluptatem, eius obcaecati facere tempora saepe.
            </span>
            <div className="buttons">
            <Link to="/watch">
                <button className="play">
                    <PlayArrow/>
                        <span className="play-btn">Play</span>
                </button>
           </Link>
                <button className="more">
                    <InfoOutlined/>
                    <span>More</span>
                </button>
            </div>
        </div>
    </div>
  )
}
