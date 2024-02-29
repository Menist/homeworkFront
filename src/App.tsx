import './App.css';
import styled from 'styled-components';
import {CardsImage} from "./ComponentsCss/Image.styled";
import React from "react";
import {CardsBody} from "./ComponentsCss/DivWrapCards.styled";
import {CardsHeader} from "./ComponentsCss/HeaderCards.styled";
import {CardsElement} from "./ComponentsCss/DivWrap.styled";
import {CardsButton} from "./ComponentsCss/ButtonCards.styled";
import {CardsText} from "./ComponentsCss/CardsText";


function App() {
    return (
        <div className="App">
            <WrapBody>
                <CardsBody>
                    <CardsImage/>
                    <CardsElement>
                        <CardsHeader>Headline</CardsHeader>
                        <CardsText>Faucibus. Faucibus. Sit sit sapien sit tempusrisu ut. Sit molestie ornare in
                            venen.</CardsText>
                        <CardsButton primary>See more
                        </CardsButton>
                        <CardsButton secondary>Save</CardsButton>
                    </CardsElement>
                </CardsBody>
            </WrapBody>
        </div>
    );
}

export default App;
const WrapBody = styled.div`
  font-family: 'Inter', sans-serif;
  height: 100vh;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  background-color: #dfe0e2;
  gap: 20px;
`
