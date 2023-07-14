import { Header, HeaderInternal } from "../../components/Header"
import { UlMovies } from "../../components/Ul"
import { Footer } from "../../components/Footer"
import { ContextApi } from "../../providers"
import { useContext } from "react"

export const HomePage = () =>{
   
   const {isLoading} = useContext(ContextApi)
   
   
   return(
      <>

      {isLoading?<HeaderInternal></HeaderInternal>: <Header/>  }
      <UlMovies></UlMovies>
      <Footer></Footer>
      </>
   
   )
}