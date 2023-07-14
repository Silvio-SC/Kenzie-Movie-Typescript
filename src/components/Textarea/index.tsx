import { ForwardedRef, TextareaHTMLAttributes, forwardRef } from "react";
import { DivTextStyle, StyleTex } from "./Style"
import { Paragraph } from "../../styles/Typography";

interface IText extends TextareaHTMLAttributes<HTMLTextAreaElement>{
    error: any;
}

export const Text = forwardRef(({error, ...rest}: IText, ref: ForwardedRef<HTMLTextAreaElement>) => {
        
    return(
        <DivTextStyle>
            <StyleTex {...rest} cols={30} rows={300} ref={ref} ></StyleTex>
            <Paragraph>{error ? error.message : null}</Paragraph>
        </DivTextStyle>
    )
})