import styled from 'styled-components'
import {Link} from 'react-router-dom'
import {smWidth} from '../../global-styles'

export const HeaderContainer = styled.div`
    height: 70px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 25px 0;
    @media screen and (max-width: ${smWidth}){
        padding: 0px;
        margin: 7.5px;
    }
`;
export const LogoContainer = styled(Link)`
    height: 100%;
    width: 70px;
    display: flex;
    justify-content: center;
    align-items: center;
    @media screen and (max-width: ${smWidth}){
        width: 45px;
        padding: 0px;
        
    }
`;

export const OptionsContainer = styled.div`
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`;
export const OptionLink = styled(Link)`
    padding: 10px 15px;
    cursor: pointer;
`;