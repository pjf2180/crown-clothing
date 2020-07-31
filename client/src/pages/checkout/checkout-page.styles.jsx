import styled from 'styled-components';

const CheckoutPageContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 50px auto 0;

    .checkout-header {
        width: 100%;
        padding: 10px 0;
        display: flex;
        justify-content: space-between;
        border-bottom: 1px solid darkgrey;
    
        .header-block {
          text-transform: capitalize;
          flex: 1;
          display: flex;
          justify-content: center;
          &:first-child{
            justify-content: flex-start;
          }
          &:last-child {
            justify-content: flex-end;
          }
        }
    }

    button{
        margin-left: auto;
    }

    .test-warning{
        color: red;
        text-align: center;
        margin-top: 40px;
        margin-bottom: 1rem;
    }
    .total {
        margin-top: 30px;
        margin-left: auto;
        font-size: 36px;
    }
`;

export default CheckoutPageContainer;