import React, { useEffect, useState } from 'react'
import { API_KEY, API_URL, IMAGE_BASE_URL } from '../../Config';
import { useParams } from 'react-router-dom'
import MainImage from '../LandingPage/Sections/MainImage';
import MovieInfo from './Section/MovieInfo';
import GridCards from '../commons/GridCards';
import Favorite from './Section/Favorite';
import { Row, Button } from 'antd';
import Auth from '../../../hoc/auth';

function MovieDetail(props) {
    const {movieId} = useParams();
    const [Movie, setMovie] = useState([])
    const [Casts, setCasts] = useState([])
    const [ActorToggle, setActorToggle] = useState(false);
    
    useEffect(() => {

        // console.log(props.match);

        let endpointCrew = `${API_URL}movie/${movieId}/credits?api_key=${API_KEY}`;

        let endpointInfo = `${API_URL}movie/${movieId}?api_key=${API_KEY}`;

        fetch(endpointInfo)
        .then(response => response.json())
        .then(response => {
            console.log(response)
            setMovie(response)
        })

        fetch(endpointCrew)
        .then(response => response.json())
        .then(response => {
            console.log("responseForCrew", response)
            setCasts(response.cast);
        })

    }, [])

    const toggleActorView = () => {
        setActorToggle(!ActorToggle)
    }
return (
    <div>

        {/* Header */}
        <MainImage 
            image={`${IMAGE_BASE_URL}w1280${Movie.backdrop_path}`}
            title={Movie.original_title}
            text={Movie.overview} 
        />

        {/* Body */}
        <div style={{ width: '85%', margin: '1rem auto' }}>

            <div style={{ display:"flex", justifyContent:"flex-end" }}>
                {/* <Favorite   movieInfo={Movie} movieId={movieId} userFrom={localStorage.getItem('userId')}/> */}
            </div>

            {/* Movie Info */}
            <MovieInfo 
                movie={Movie}
            />

            <br />
            {/* Actors Grid */}
            <div style={{ display: 'flex', justifyContent: 'center', margin: '2rem' }}>
                    <Button onClick={toggleActorView}>Toggle Actor View </Button>
            </div>

            <br />

            {ActorToggle &&
                    <Row gutter={[16, 16]}>
                        {Casts && Casts.map((cast, index) => (
                        cast.profile_path &&
                        <GridCards 
                            image={cast.profile_path ?
                                `${IMAGE_BASE_URL}w500${cast.profile_path}` : null}
                            characterName={cast.name}
                        />
                    
                ))}
                </Row>
            }
            <br />
        </div>

    </div>
)
}

export default Auth(MovieDetail, null);