import "./App.scss";
import { Route, Routes, Navigate } from "react-router-dom";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Watch from "./pages/watch/Watch";
import axios from "axios";

function App() {
  const user = true;
  const mockData = { "title": "The Last of Us",
  "desc": "testing desc last of us",
  "img": "https://res.klook.com/images/fl_lossy.progressive,q_65/c_fill,w_1200,h_630/w_80,x_15,y_15,g_south_west,l_Klook_water_br_trans_yhcmh3/activities/t9ur9cc1khkup1dmcbzd/IMG%20Worlds%20of%20Adventure%20Admission%20Ticket%20in%20Dubai%20-%20Klook.jpg",
  "imgTitle": "https://res.klook.com/images/fl_lossy.progressive,q_65/c_fill,w_1200,h_630/w_80,x_15,y_15,g_south_west,l_Klook_water_br_trans_yhcmh3/activities/t9ur9cc1khkup1dmcbzd/IMG%20Worlds%20of%20Adventure%20Admission%20Ticket%20in%20Dubai%20-%20Klook.jpg",
  "trailer": "https://res.klook.com/images/fl_lossy.progressive,q_65/c_fill,w_1200,h_630/w_80,x_15,y_15,g_south_west,l_Klook_water_br_trans_yhcmh3/activities/t9ur9cc1khkup1dmcbzd/IMG%20Worlds%20of%20Adventure%20Admission%20Ticket%20in%20Dubai%20-%20Klook.jpg",
  "video": "https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c0fd273d2c6d9a064f3ae35579b2bbdf&profile_id=139&oauth2_token_id=57447761",
  "limit": 20,
  "genre": "action",
  "isSeries": true};

    // const testPostMovie = async () => {
    //   console.log("its running")
    //   try {
    //     const res = await axios.post(`/api/movies/`, mockData
    //     // {headers: {
    //     //     token:
    //     //       "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzY2UyMDgwZDA2YjMwMmI1MjdiYjdlYiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY3NTE5NTkzOSwiZXhwIjoxNjc1NjI3OTM5fQ.7HV5FvaXt0sepK9sZOcVE_0p6DTnceLUehhna9vLJYI",
    //     //   }}
    //       );
    //   } catch (err) {
    //     console.log(err);
    //     console.log("ERRORO MAN");
    //   }
    // };
    // testPostMovie();

    const headers = {
      'token': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzY2UyMDgwZDA2YjMwMmI1MjdiYjdlYiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY3NTE5NTkzOSwiZXhwIjoxNjc1NjI3OTM5fQ.7HV5FvaXt0sepK9sZOcVE_0p6DTnceLUehhna9vLJYI`
    }
    
    const postData = async () => {
      try {
        const response = await axios.post('/api/movies/x', mockData, { headers });
        console.log(response.data);
        console.log("IT WOKRED");
        
      } catch (error) {
        console.error(error);
        console.log("DIDNTWOKRED");

      }
    }
    // postData();

  return (
    <div>
      <Routes>
        <Route path="/" element={user ? <Home /> : <Navigate to="/register"/>} />
        <Route path="/register" element={!user ? <Register /> : <Navigate to="/" />} />
        <Route exact path="/login" element={!user ? <Login /> : <Navigate to="/" />} />

       {/* only disply these routes when user is true */}
        { user && (
        <>
          <Route path="/movies" element={<Home type="movie" />} />
          <Route path="/series" element={<Home type="series" />} />
          <Route path="/watch" element={<Watch />} />
        </>
        )}
      </Routes>
    </div>
  );
}

export default App;
