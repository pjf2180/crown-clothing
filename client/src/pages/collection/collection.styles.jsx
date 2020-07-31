import styled from 'styled-components'

export const CollectionPageContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;

    .title{
        font-size: 38px;
        margin: 0 auto 30px;
    }

    .items {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        grid-gap: 10px;
        width: 100%;
        & .collection-item {
          margin-bottom: 30px;
        }
        @media screen and (max-width: 575px){
          display: grid;
          grid-template-columns: 1fr 1fr;
        }
      }
`;