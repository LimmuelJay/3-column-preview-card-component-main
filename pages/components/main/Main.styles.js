import {styled} from 'styled-components';

const MainStyled = styled.div`
    display: flex;
    width: 80%;
    justify-content: center;
    padding: 20px;

    @media (max-width: 920px) {
        flex-direction: column;
        width: 50%;
    }

    @media (max-width: 620px) {
        width: 70%;
    }

    @media (max-width: 425px) {
        width: 100%;
    }
`;
export default MainStyled;