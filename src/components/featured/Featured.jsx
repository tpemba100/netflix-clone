import { InfoOutlined, PlayArrow } from "@mui/icons-material"
import "./featured.scss"

export default function Featured() {
  return (
    <div className="featured">
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
                <button className="play">
                    <PlayArrow/>
                    <span>Play</span>
                </button>
                <button className="more">
                    <InfoOutlined/>
                    <span>More</span>
                </button>
            </div>
        </div>
    </div>
  )
}
