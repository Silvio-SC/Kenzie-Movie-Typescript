import { Select } from "../../Select"
import { Text } from "../../Textarea"
import {  StyledModal, StylesModalDiv,  StylesModalAction, StyledModalBackground } from "../styles"
import { Title3 } from "../../../styles/Typography"
import { StylesAvalButton } from "../../Button/AvalButton/styles"
import { SubmitHandler, useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { SchemaModalEdit, TModalEditValues } from "../../Schema/schema"
import { useContext } from "react"
import { ContextApi } from "../../../providers"




export const ModalEdith = ()=>{

    const { setModalEdithIsOpen, userReview, editReview } = useContext(ContextApi)

    const {register, handleSubmit, reset, formState:{errors}} = useForm<TModalEditValues>({
        resolver:
        zodResolver(SchemaModalEdit)
    })

    const closeModal = () => {
       setModalEdithIsOpen(false)
    }

   
    const submited: SubmitHandler<TModalEditValues> = async(formData) =>{ 
        if (userReview !== null) {
            editReview(formData, userReview[0].id);
        }
        reset()
        setModalEdithIsOpen(false)
    }

    return(
        <StyledModalBackground>
            <StyledModal>
                <StylesModalDiv>
                <Title3>Editar Avaliação</Title3>
                <button onClick={closeModal}>X</button>
                </StylesModalDiv>
                
                <StylesModalAction onSubmit={handleSubmit(submited)}>
                    <Select {...register("score")} error={errors.score}/>
                    <Text {...register("description")} error={errors.description}/>
                    <StylesAvalButton type="submit"> Atualizar </StylesAvalButton>
                </StylesModalAction>
            </StyledModal>
        </StyledModalBackground>
     
    )
}