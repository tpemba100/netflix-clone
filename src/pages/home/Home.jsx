import Navbar from "../../components/navbar/Navbar";
import Featured from "../../components/featured/Featured"
import "./home.scss"
import List from "../../components/list/List"


const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <Featured />
      <List title="Continue to Watch" />
      <List title="Trending Now" />
      <List title="Recetly Added " />
      <List title="K-Drama " />
    </div>
  )
}

export default Home
