import { ForwardedRef, InputHTMLAttributes, forwardRef } from "react"
import { DivInputStyle, InputStyle } from "./styles"
import { Paragraph } from "../../styles/Typography";

interface IInput extends InputHTMLAttributes<HTMLInputElement>{
    error: any;
}

export const Input = forwardRef(({error, ...rest}: IInput, ref: ForwardedRef<HTMLInputElement>) => {
    
    return(
        <DivInputStyle>
            <InputStyle ref={ref} {...rest} />
            <Paragraph>{error ? error.message : null}</Paragraph>
        </DivInputStyle>
    )
})


