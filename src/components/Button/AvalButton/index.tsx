import { StylesAvalButton } from "./styles"
import { ButtonHTMLAttributes, ForwardedRef, forwardRef } from "react"

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement>{

}

export const AvalButton = forwardRef(({...rest}: IButton, ref: ForwardedRef<HTMLButtonElement>) => {
    return(
        <StylesAvalButton ref={ref} {...rest} >
            Avaliar
        </StylesAvalButton>
    )
})


