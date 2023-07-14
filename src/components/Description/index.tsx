import Stars from "../../assets/Star.svg"
import { Movie } from "../../providers"
import { Paragraph, Title1 } from "../../styles/Typography"
import { StyledTag } from "../Tag/styles"
import { CategoryContainer } from "./styled"

interface DescriptionProps {
  movie: Movie | undefined
}

export const Description = ({movie}: DescriptionProps) => {
  return (
    <CategoryContainer>
      <div>
        <StyledTag>{movie ? movie.type : null}</StyledTag>
        <Paragraph>{movie ? movie.duration : null}min</Paragraph>
      </div>
      <div>
        <Title1>{movie ? movie.name : null}</Title1>
        <div>
          <img src={Stars} alt="" />
          <Paragraph>5.0</Paragraph>
        </div>
      </div>
    </CategoryContainer>
  )
}