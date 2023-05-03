import { ButtonTag, Description, InfoWrapper, MovieTitle, Poster, Rate, Rating, Release, Star, Tag, Tags, TileWrapper, Votes } from "./styled";
import star from "../images/star.svg";
import placeholder from "./Poster.jpg"
import { Genres } from "../../features/moviesPage/Genres/genres";
import { Link } from "react-router-dom";
import { imagesAPI600x900 } from "../../core/API";

const MovieTile = ({ poster, title, date, rate, voteCount, genres, id }) => {
    const movieGenres = Genres.filter((genre) => genres.includes(genre.id));

    return (
        <Link to={`/movie/?id=${id}`} key={id}>
            <TileWrapper>
                <Poster src={poster ? `${imagesAPI600x900}${poster}` : placeholder} alt={title}>
                </Poster>
                <InfoWrapper>
                    <Description>
                        <MovieTitle>{title}</MovieTitle>
                        <Release>{date ? date.slice(0, 4) : null}</Release>
                        <Tags>
                            {genres ? movieGenres.map((genre) => (
                                <ButtonTag key={genre.id}>
                                    <Tag>{genre.name}</Tag>
                                </ButtonTag>
                            )) : null}
                        </Tags>
                    </Description>
                    <Rating>
                        {rate !== 0 && voteCount !== 0 ?
                            <>
                                <Star src={star} />
                                <Rate>{rate ? rate : null}</Rate>
                                <Votes>{voteCount ? `${voteCount} votes` : null} </Votes>
                            </>
                            :
                            <Votes>No votes yet</Votes>
                        }
                    </Rating>
                </InfoWrapper>
            </TileWrapper>
        </Link>
    );
}

export default MovieTile;