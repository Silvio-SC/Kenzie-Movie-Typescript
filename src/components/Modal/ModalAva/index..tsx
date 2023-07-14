import { Select } from "../../Select"
import { Text } from "../../Textarea"
import { StyledModal, StyledModalBackground } from "../styles"
import { StylesModalDiv } from "../styles"
import { Title1 } from "../../../styles/Typography"
import { StylesModalAction } from "../styles"
import { AvalButton } from "../../Button/AvalButton"
import { useContext } from "react"
import { ContextApi } from "../../../providers"
import { api } from "../../../services/api"
import { SchemaModalCreate, TModalCreateValues } from "../../Schema/schema"
import { zodResolver } from "@hookform/resolvers/zod"
import { SubmitHandler, useForm } from "react-hook-form"


export const ModalAval = ()=>{

    const { setIsModalAvalOpen, notifySucess, notifyError, user, movieId, setUserReview, userReview} = useContext(ContextApi)

    const Token = localStorage.getItem("@TokenKenzieMoveis")

    const { register, reset, handleSubmit, formState: {errors} } = useForm<TModalCreateValues>({
        resolver: zodResolver(SchemaModalCreate)
    })
    
    const createReview: SubmitHandler<TModalCreateValues> = async (formData) => {
        const dataReview = {
            movieId: movieId,
            userId: Number(user?.id),
            score: Number(formData.score),
            description: formData.description,
        }
        
        try {
            const { data } = await api.post("/reviews", dataReview, {
                headers: {
                    Authorization: `Bearer ${Token}`
                }           
            })
            if (userReview !== null) {
                setUserReview([...userReview, data]);
            } else {
                setUserReview([data]);
            }
            notifySucess("Avalição criada com sucesso")
            closeModal()
            
        }catch (error) {
            notifyError("algo deu errado")
        } 

        reset()
    }

    const closeModal = () => {
        setIsModalAvalOpen(false)
    }

    return(
    <StyledModalBackground>
        <StyledModal>
            <StylesModalDiv>
                <Title1>Avaliação</Title1>
                <button onClick={closeModal}>x</button>
            </StylesModalDiv>
            
            <StylesModalAction onSubmit={handleSubmit(createReview)}>
                <Select {...register("score")} error={errors}/>
                <Text {...register("description")} error={errors} placeholder="Digite um comentario" />
                <AvalButton type="submit" />
            </StylesModalAction>
        </StyledModal>
    </StyledModalBackground>
    )
}