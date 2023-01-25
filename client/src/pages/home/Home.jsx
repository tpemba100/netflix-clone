import Navbar from "../../components/navbar/Navbar";
import Featured from "../../components/featured/Featured"
import "./home.scss"
import List from "../../components/list/List"


const Home = ({type}) => {
  return (
    <div className="home">
      <Navbar />
      <Featured type={type} />
      <List title="Continue to Watch" />
      <List title="Trending Now" />
      <List title="Recetly Added" />
      <List title="K-Drama" />
    </div>
  )
}

export default Home;
