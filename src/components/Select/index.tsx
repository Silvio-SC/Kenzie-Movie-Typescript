import { ForwardedRef, SelectHTMLAttributes, forwardRef } from "react";
import { DivSelectStyle, StyledSelect } from "./styles"
import { Paragraph } from "../../styles/Typography";

interface ISelect extends SelectHTMLAttributes<HTMLSelectElement>{
    error: any;
}

export const Select = forwardRef(({error, ...rest}: ISelect, ref: ForwardedRef<HTMLSelectElement>) => {
    
    return(
        <DivSelectStyle>
            <StyledSelect ref={ref} {...rest}>
                <option value="" hidden>Selecionar uma nota</option>
                <option value="0">0</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
            </StyledSelect>
            <Paragraph>{error ? error.message : null}</Paragraph>
        </DivSelectStyle>
    )
})
