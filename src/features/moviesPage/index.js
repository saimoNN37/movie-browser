import { useEffect } from "react";
import { fetchPopularMovies, selectPopularMoviesList, selectPopularMoviesStatus } from "./popularMoviesSlice";
import { useDispatch, useSelector } from "react-redux";
import { imagesAPI600x900 } from "../../core/API";
import Pagination from "../../common/Pagination";
import PopularMovieTile from "../../common/PopularMovieTile";
import { Container } from "../../common/Container";
import { Layout } from "./styled";

export const MoviesPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPopularMovies())
  }, [])
  const status = useSelector(selectPopularMoviesStatus);
  const fetchResult = useSelector(selectPopularMoviesList);
  if (status === "success") {
    console.log(fetchResult.results)
    return (
      <>
        <Container>
          <Layout>
          {a.results.map(movie => (
            <PopularMovieTile
            poster={`${imagesAPI600x900}${movie.poster_path}`}
            title={movie.title}
            date={movie.release_date}
            rate={movie.vote_average}
            voteCount={movie.vote_count} 
            genres={movie.genre_ids}
            />
          ))}
          </Layout>       
          <Pagination></Pagination>
          </Container>
      </>      
    );

  }
};