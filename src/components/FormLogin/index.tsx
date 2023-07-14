import { useContext } from "react"

import { SubmitHandler, useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { FormLoginSchema, TLoginFormValues } from "./FormLoginSchema"

import { api } from "../../services/api"

import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

import { Input } from "../Input"
import { StyledFormLogin } from "./style"
import { Paragraph, StyledLink, Title1 } from "../../styles/Typography"
import { StyleBig } from "../Button/styles"
import { ContextApi } from "../../providers"

export const FormLogin = () => {

    const { register, reset, handleSubmit, formState: {errors} } = useForm<TLoginFormValues>({
        resolver: zodResolver(FormLoginSchema)
    })

    const { navigate, notifySucess, notifyError, setUser, isLoading, setIsLoading } = useContext(ContextApi)

    const submit: SubmitHandler<TLoginFormValues> = async (formData) => {
       
        try {
            
            const { data } = await api.post("/login", formData)
            setUser(data.user)
            notifySucess("Login Concluido com sucesso")
            localStorage.setItem("@TokenKenzieMoveis", data.accessToken)
            localStorage.setItem("@UserId", data.user.id)
            navigate("/")
        } catch (error) {
            console.log(error)
            notifyError("Senha ou Email estão incorretos")
        } finally {
            setIsLoading(true)
        }

        reset()
    }

    return (
        <StyledFormLogin onSubmit={handleSubmit(submit)}>
            <Title1>Login</Title1>
            <Input type="email" placeholder="E-mail" {...register("email")} error={errors.email} />
            <Input type="password" placeholder="Senha" {...register("password")} error={errors.password} />
            <div>
                <StyleBig type="submit" >{isLoading ? "Entrando..." : "Entrar"}</StyleBig>
                <Paragraph>ou</Paragraph>
                <StyledLink to={"/register"}>Cadastre-se</StyledLink>
            </div>
            <ToastContainer />
        </StyledFormLogin>
    )
}