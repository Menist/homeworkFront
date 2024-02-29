import styled from "styled-components";
import img from '../img/Rectangle.png'

type ImageStyledProps = {
    src: string;
    alt: string
};
export const CardsImage = styled.img.attrs<ImageStyledProps>(() => ({
    alt: "Alternative Text",
    src: img,
}))`
  width: 100%;
  text-align: center;
  border-radius: 15px;
  padding-bottom: 20px;
`;
