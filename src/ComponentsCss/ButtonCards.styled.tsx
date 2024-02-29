import styled, {css} from "styled-components";

type borderRadiusPropsType = {
    borderRadius?: string
    backgroundColor?: string
    primary?: boolean
    secondary?: boolean
    color?: string
}
export const CardsButton = styled.button<borderRadiusPropsType>`
  padding: 8px 30px;
  border-radius: ${props => props.borderRadius || '5px'};
  cursor: pointer;
  font-weight: 700;

  &:hover {
    color: #4E71FE;
    background-color: transparent;
    border: 2px solid #4E71FE;
  }
  //primary
  ${props => props.primary && css<borderRadiusPropsType>`
    background-color: ${props => props.backgroundColor || '#4E71FE'};
    border: 2px solid transparent;
    color: ${props => props.color || '#FFFFFFFF'};
  `} 
          //secondary
  ${props => props.secondary && css<borderRadiusPropsType>`
    border: 2px solid #4E71FE;
    background-color: transparent;
    color: #4E71FE;

    &:hover {
      background-color: #4E71FE;
      color: #ffff;
    }
    
  `}
  @media screen and (max-width: 270px) {
  width: 100%;
}
`
