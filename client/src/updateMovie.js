import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

const UpdateMovie = () => {
  const [movies, setMovies] = useState([]);

  //FETCH DATA USING GET
  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const res = await axios.get("/api/movies/g", {
          headers: {
            token:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzY2UyMDgwZDA2YjMwMmI1MjdiYjdlYiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY3NTE5NTkzOSwiZXhwIjoxNjc1NjI3OTM5fQ.7HV5FvaXt0sepK9sZOcVE_0p6DTnceLUehhna9vLJYI",
          },
        });
        setMovies(res.data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchMovies();
  }, []);

  //   console.log(movies);

  //   MAPING THRU EACH MOVIE AND CHANGING THE trailer.
  //    THEN UPDATING TO DATA USING MOVIE ID AND PUT API OPERATION
  const updateTrailer = async () => {
    const updatedMovies = movies.map((movie) => {
      return {
        ...movie,
        trailer:
          "https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c0fd273d2c6d9a064f3ae35579b2bbdf&profile_id=139&oauth2_token_id=57447761",
      };
    });

    try {
      for (const movie of updatedMovies) {
        await axios.put(`/api/movies/${movie._id}`, movie);
        console.log("done");
      }
    } catch (err) {
      console.error(err);
    }
  };

  const handle = () => {
    updateTrailer();
  };

  return (
    <div>
      <button onClick={handle}>UPDATE</button>
    </div>
  );
};

export default UpdateMovie;
