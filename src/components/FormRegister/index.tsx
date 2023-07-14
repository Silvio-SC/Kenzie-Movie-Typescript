import { SubmitHandler, useForm } from "react-hook-form";
import { Input } from "../../components/Input";
import { SchemaRegister, TRegisterValues } from "../../components/Schema/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { CustomLink } from "../../CustomLink";
import seta from "../../assets/seta.png"
import { api } from "../../services/api";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"
import { ContextApi } from "../../providers";
import { useContext } from "react";
import { AvarageButton } from "../Button/Avarage";
import { StyledForm, StyledDivTitle, StyledDivText, StyledButtonVoltar, StyledInputs, StyledButtonCadastro, StyledTamanhoInput } from "./style";
import { Text1, Title1 } from "../../styles/Typography";


export const FormRegister = () => {

  const {register, handleSubmit, reset, formState:{errors}} = useForm<TRegisterValues>({ 
    resolver:
    zodResolver(SchemaRegister)
  })

  
  const { navigate, notifySucess, notifyError} = useContext(ContextApi)

  const submit :SubmitHandler<TRegisterValues> = async (formData) =>{
    try{
      await api.post("/users", formData)
        notifySucess("Cadastro Realizado com sucesso!")
        setTimeout(() => {
          navigate("/login")
        }, 1500)
      }catch (error){
      notifyError("Erro ao cadastrar")
    }
    reset()
  }

  return (
    <StyledForm onSubmit={handleSubmit(submit)}>  
      <StyledDivTitle>
        <Title1>Cadastro</Title1>
        <StyledButtonVoltar>
          <img src={seta} alt="Imagem de seta mostrando o return"/>
          <CustomLink links="voltar" to="/">Voltar</CustomLink>
        </StyledButtonVoltar>
      </StyledDivTitle>
      <StyledDivText>
        <Text1>Preencha os campos para cadastrar</Text1>
      </StyledDivText>
      <StyledInputs>
        <StyledTamanhoInput>
          <Input
            type="text"
            placeholder="Nome"
            {...register("name")} 
            error={errors.name}
         />
        </StyledTamanhoInput>
        <StyledTamanhoInput>
          <Input
            type="email"
            placeholder="Email"
            {...register("email")}
            error={errors.email} 
          />
        </StyledTamanhoInput>
        <StyledTamanhoInput>
          <Input
            type="password"
            placeholder="Senha"
            {...register("password")} 
            error={errors.password}
          />
        </StyledTamanhoInput>
        <StyledTamanhoInput>
          <Input
            type="password"
            placeholder="Confirmar senha"
            {...register("confirm")}
            error={errors.confirm} 
          />  
        </StyledTamanhoInput>
      </StyledInputs>
      <StyledButtonCadastro>
        <AvarageButton/>
      </StyledButtonCadastro>
      <ToastContainer />
    </StyledForm>
  );
};