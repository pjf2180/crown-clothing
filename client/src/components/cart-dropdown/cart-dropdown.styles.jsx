import styled from 'styled-components'
import { HEADER_HEIGHT } from '../header/header.styles'

const CartDropdownContainer = styled.div`
    position: absolute;
    width: 240px;
    height: 340px;
    display: flex;
    flex-direction: column;
    padding: 20px;
    border: 1px solid black;
    background-color: white;
    top: ${HEADER_HEIGHT};
    right: 10px;
    z-index: 5;

    .empty-message{
        text-align: center;
    }

    .cart-items {
        height: 240px;
        display: flex;
        flex-direction: column;
        overflow: scroll;
    }

    button {
        margin-top: auto;
    }
`;

export default CartDropdownContainer;

