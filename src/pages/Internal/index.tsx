import { AvalButton } from "../../components/Button/AvalButton"
import { Description } from "../../components/Description"
import { Footer } from "../../components/Footer"
import { Header, HeaderInternal } from "../../components/Header"
import { Paragraph, Title1 } from "../../styles/Typography"
import { MainInternal, StyledDescriptionText, StyledMovieDiv, StyledOthersAval, StyledSectionAval, StyledUserAval } from "./style"

import { useContext, useEffect, useState } from "react"
import { ContextApi, Movie } from "../../providers"
import { ModalAval } from "../../components/Modal/ModalAva/index."
import { api } from "../../services/api"
import star from "../../assets/Star.svg"
import edit from "../../assets/editIcon.svg"
import trash from "../../assets/trashIcon.svg"
import { ReviewsSection } from "../../components/ReviewsSection"
import { ModalEdith } from "../../components/Modal/ModalEdithAva"
import { ToastContainer } from "react-toastify"


export const InternalPage = () =>{

    const { movieId, setIsModalAvalOpen, isModalAvalOpen, user, userReview, setUserReview, navigate, setModalEdithIsOpen, modalEdithIsOpen, deleteReview} = useContext(ContextApi)
    const [movie, setMovie ] = useState<Movie | undefined>() 
    

    useEffect(() => {
        const getMovieInfo = async () => {
            try {
                const { data } = await api.get(`/movies/${movieId}?_embed=reviews`)
                setMovie(data)
                localStorage.setItem("@SelectedMovie", JSON.stringify(data))
            }catch (error) {
            }
            
            const LocalStorageMovie = localStorage.getItem("@SelectedMovie")
            LocalStorageMovie ? setMovie(JSON.parse(LocalStorageMovie)) : navigate("/")
        }

        const getUserReview= async () => {
            try {
                const response = await api.get(`/movies/${movieId}/reviews?userId=${user?.id}`)
                if(response.data.length !== 0){
                    setUserReview(response.data)
                } 
            }catch (error) {
            }
        }
        

        getUserReview()
        getMovieInfo()
    }, [])

    const Review = () => {
        if (user) {
            if (userReview !== null) {
                return (
                    <>
                        <div>
                            <Title1>Avaliações</Title1>
                        </div>
                        <Paragraph>Sua avaliação</Paragraph>
                        <StyledUserAval>
                            <Paragraph>{userReview[0]?.description}</Paragraph>
                            <div>
                                <div>
                                    <img src={star} alt="icone de estrela" />
                                    <Paragraph>{(Number(userReview[0]?.score) / 2).toFixed(1)}</Paragraph>
                                </div>
                                <button onClick={OpenModalEdit}><img src={edit} /></button>
                                <button onClick={deletReview}><img src={trash} /></button>
                            </div>
                        </StyledUserAval>
                    </>
                )
            } else {
                return ( 
                    <div>
                        <Title1>Avaliações</Title1>
                        <AvalButton  onClick={OpenModalAval} />
                    </div>
                )
            }
        } else {
            return <Title1>Avaliações</Title1>
        }
    }

    const OpenModalAval = () => {
        setIsModalAvalOpen(!isModalAvalOpen)
    }
    const OpenModalEdit = () => {
        setModalEdithIsOpen(!modalEdithIsOpen)
    }

    const deletReview =() =>{
        if (userReview !== null) {
            deleteReview(userReview[0].id);
        }
    }

    return(
        <>
            <MainInternal>
                <StyledMovieDiv img={movie?.image}>
                    {user? <HeaderInternal /> : <Header />}
                    <Description movie={movie} />
                </StyledMovieDiv>
                <StyledDescriptionText>
                    <Paragraph>
                        {movie ? movie.synopsis : null}
                    </Paragraph>
                </StyledDescriptionText>
                <StyledSectionAval>
                    {Review()}
                    <StyledOthersAval>
                        <ReviewsSection reviewList={movie?.reviews} />
                    </StyledOthersAval>
                </StyledSectionAval>
            </MainInternal>
            <ToastContainer />
            {isModalAvalOpen ? <ModalAval /> : null}
            {modalEdithIsOpen ? <ModalEdith/> : null}
            <ToastContainer />
            <Footer />
        </>
       )
}