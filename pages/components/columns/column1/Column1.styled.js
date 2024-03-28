import {styled}  from 'styled-components';

const Column1Styled = styled.div`
    display: flex;
    width: calc(100% / 3);
    min-height: 450px;
    flex-direction: column;
    background-color: hsl(31, 77%, 52%);
    border-radius: 5px 0 0 5px;
    padding: 30px;

    .column-head {
        height: 15%;
    }
    .column-body {
        height: 80%;
        display: flex;
        justify-content: space-between;
        flex-direction: column;
    }

    .column-details {
        min-height: 70%;

        h2 {
            color: hsl(0, 0%, 95%);
            font-family: "Lexend Deca", sans-serif;
            font-weight: 700;
            font-size: 2rem   
        }
        
        p {
            line-height: 1.4;
            font-family: "Big Shoulders Display", sans-serif;
            color: hsla(0, 0%, 100%, 0.75);
            font-weight: 400;
            width: 88%;
        }
    }
    
    @media (max-width: 920px) {
        width: 100%;
    }

`;

export default Column1Styled;