import { styled } from "styled-components";

export const CategoryContainer = styled.div`
    width: 100%;
    /* max-width: 1200px; */
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    padding: 0 1rem;

    > div:first-child {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      max-width: 1200px;
    }
    > div:last-child {
      width: 100%;
      display: flex;
      justify-content: space-between;
      gap: 1rem;
      max-width: 1200px;
      > div{
        display: flex;
        align-items: center;
      }
  }
`

export const TextAvaliable = styled.h2`
  padding-top: 7px;
  color: var(--color-white);
`