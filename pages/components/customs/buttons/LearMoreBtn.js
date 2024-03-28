import {styled} from 'styled-components';

const ButtonStyled = styled.div`

    button {
        background-color: hsl(0, 0%, 95%);
        border-radius:42px;
        font-size:17px;
        width: 60%;
        height: 40px;
        text-decoration:none;
        border: 0;
        color: ${(props) => props.color ? props.color : 'auto'};
    }
`;
const LearnMoreBtn = (props) => {
    return (
        <ButtonStyled color={props.color}>
            <button>Learn More</button>
        </ButtonStyled>
    );
}
export default LearnMoreBtn;