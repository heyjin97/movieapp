import React, { useEffect } from 'react'
import { Button } from 'antd'
import { Axios } from 'axios'

function Favorite(props) {

    const movieId = props.movieId
    const userFrom = props.userFrom
    const movieTitle= props.movieInfo.title
    const moviePost = props.movieInfo.backdrop_path
    const movieRunTime = props.movieInfo.runtime

    useEffect(() => {

        let variables = {
            userFrom,
            movieId
        }

        Axios.post('/api/favoriteNumber', variables)
            .then(response => {
                if(response.data.success) {

                } else {
                    alert('숫자 정보를 가져오는데 실패했습니다.');
                }
            })

    }, [])

  return (
    <div>
        <Button>Favorite</Button>
    </div>
  )
}

export default Favorite