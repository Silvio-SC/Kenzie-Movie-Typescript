import { styled } from 'styled-components';

export const AssessmentContainer = styled.div`
  width: 30%;
  max-width: 415px;
  min-width: 250px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 10px;
  margin-top: 50px;
`

export const AssessmentTitle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  > div {
    display: flex;
    align-items: flex-end;
  }
`

export const Circle = styled.h2`
  background: var(--color-yellow);
  padding: 15px 30px;
  border-radius: 50%;
  color: var(--color-white);
  font-family: Poppins;
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`

export const DescriptionAssessment = styled.p`
  color: var(--color-white);
  font-family: Inter;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 36px;
  padding: 0 50px;
  text-align: center;
`

export const ProfileAssessment = styled.h1`
  color: var(--color-white);
  font-family: Poppins;
  font-size: 26px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
` 

