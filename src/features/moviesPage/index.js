import { useEffect } from "react";
import { fetchPopularMovies, selectPopularMoviesList, selectPopularMoviesStatus } from "./popularMoviesSlice";
import { useDispatch, useSelector } from "react-redux";

export const MoviesPage = () => {
const dispatch = useDispatch();
useEffect(()=> {
  dispatch(fetchPopularMovies())
}, [])
const status = useSelector(selectPopularMoviesStatus);
const a = useSelector(selectPopularMoviesList);
if(status === "success")
{
console.log(a.results)
return(
  <>
<div><ul>
  {a.results.map(movie => (
<li key={movie.id}>{movie.title}</li>
  ))}</ul>
  </div>
</>
);
}
};