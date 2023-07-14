import { useContext} from "react"
import { ContextApi } from "../../providers"
import { LiMovies } from "./Li"
import { BigLi } from "./BigLi"
import { StylesUl } from "./styles"


export const UlMovies = ()=>{

    const {movies} = useContext(ContextApi)
    const smallCatalago = movies.filter((movie) => movie.id !== 1 )
    if(movies.length != 0 )
    
    return(
        <>
        <StylesUl>
        <BigLi  movie1={movies[0]}></BigLi> 
        <div> 
        {smallCatalago.map((movie)=> <LiMovies  key={movie.id} movie={movie} ></LiMovies>)}
        </div> 
        </StylesUl>
        </>
    )
}