import { useContext } from "react";
import Stars from "../../assets/Star.svg"
import { Paragraph } from "../../styles/Typography"
import { AssessmentContainer, AssessmentTitle, Circle, DescriptionAssessment, ProfileAssessment } from "./styled"
import { ContextApi } from "../../providers";


export const Assessment = ({id, score, description}: {id:number; score:number; description:string;}) =>{
  
  const { usersList } = useContext(ContextApi)

  const descriptionMax = (description: string) => {
    if (description.length > 250) {
      const descriptionText = description.substring(0, 250).concat('...')
      return descriptionText
    } else {
      return description
    }
  }

  const name = (id: number) => {
    const filteredList = usersList?.filter((user) => user.id === id)
    return filteredList ? filteredList[0].name : null
  }

  const letter = (id: number) => {
    const filteredList = usersList?.filter((user) => user.id === id)
    return filteredList ? filteredList[0].name[0] : null
  }
  
  return(
      <AssessmentContainer> 
        <AssessmentTitle> 
          <Circle>{letter(id)}</Circle>  
          <div> 
            <img src={Stars} />
            <Paragraph>{(score/2).toFixed(1)}</Paragraph>
          </div>
        </AssessmentTitle>
        <DescriptionAssessment>{descriptionMax(description)}</DescriptionAssessment>
        <ProfileAssessment>{name(id)}</ProfileAssessment> 
      </AssessmentContainer>
    
  )
}