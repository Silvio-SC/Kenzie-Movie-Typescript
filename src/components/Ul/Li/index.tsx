import { useContext, useEffect, useState } from "react"
import { api } from "../../../services/api"
import { ContextApi, Movie } from "../../../providers"
import { StyledLi,StyledName,StyledNote,StyledTime,StyledType } from "./styles"

import star from "../../../../src/assets/Star.svg"



interface LiMoviesProps{
    movie: Movie
}

export const LiMovies = ({movie}:LiMoviesProps)=>{

    const {setMovieId, navigate} = useContext(ContextApi)

    const [note ,setNote] = useState(0)

    useEffect(()=>{
        
        const getMovieNote = async () => {
            try {
                const response = await api.get(`/movies/${movie.id}?_embed=reviews`)
                
                const sum = response.data.reviews.reduce((acc: number, acv: { score: number })=> acc+Number(acv.score),0)
                const result = sum / response.data.reviews.length
                setNote(result ? result : 10)
            }catch (error) {
                console.log(error)
            }
            }
    
        getMovieNote()
    })
   

    const getMovieId = ()=>{
        setMovieId(movie.id)
        navigate("/internalPage")
    }

    return(
        <>
        <StyledLi onClick={getMovieId}>

        <img src={movie.image} alt={movie.name} />
            <section>

                <StyledType><strong>{movie.type}</strong></StyledType>
                <StyledTime>{`${movie.duration}m`}</StyledTime>

            </section>

            <section>

            <StyledName>{movie.name}</StyledName>
            <StyledNote><img src={star} alt="" />{(note/2).toFixed(1)}</StyledNote>
            
            </section>
        </StyledLi>
        </>
    )
}