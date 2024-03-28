import MainStyled from '@/pages/components/main/Main.styles'
import Column1 from '@/pages/components/columns/column1/Column1'
import Column2 from '@/pages/components/columns/column2/Column2'
import Column3 from '@/pages/components/columns/column3/Column3'

const Main = () => {
    return (
        <MainStyled>
            <Column1 />
            <Column2 />
            <Column3 />
        </MainStyled>
    );
}
 
export default Main;