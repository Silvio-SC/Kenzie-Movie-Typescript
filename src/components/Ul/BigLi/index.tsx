import { StylesBigLi,StyledBigName,StyledBigNote,StyledBigTime,StyledBigType } from "./Styles"
import { useContext, useEffect, useState } from "react"
import { api } from "../../../services/api"
import { ContextApi, Movie } from "../../../providers"

import star from "../../../../src/assets/Star.svg"


interface BigLiProps{
    movie1: Movie
}



export const BigLi = ({movie1}:BigLiProps)=>{


    const {setMovieId, navigate} = useContext(ContextApi)
    

    const [note ,setNote] = useState(0)



    useEffect(()=>{
        const getMovieNote = async () => {
            try {
                const response = await api.get(`/movies/${movie1.id}?_embed=reviews`)
                
                const sum = response.data.reviews.reduce((acc: number, acv: { score: number })=> acc+Number(acv.score),0)
                const result = sum / response.data.reviews.length
                setNote(result ? result : 10)
            }catch (error) {
            }
            }
    
        getMovieNote()
        
    })

    const getMovieId = ()=>{
        setMovieId(movie1.id)
        navigate("/internalPage")
    }
    return(
        <>
        <StylesBigLi onClick={getMovieId}>
            <img src={movie1.image} alt={movie1.name} />
            <section>

                <StyledBigType><strong>{movie1.type}</strong></StyledBigType>
                <StyledBigTime>{`${movie1.duration}m`}</StyledBigTime>

            </section>

            <section>

            <StyledBigName>{movie1.name}</StyledBigName>
            <StyledBigNote><img src={star} alt="" />{(note/2).toFixed(1)}</StyledBigNote>
            
            </section>
        </StylesBigLi>
        </>
    )
}