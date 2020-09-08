import styled from 'styled-components'

const CollectionItemContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: 350px;
    align-items: center;
    position: relative;
    justify-content: center;
    width: 100%;

    .image {
      width: 100%;
      height: 95%;
      background-size: cover;
      background-position: center;
      margin-bottom: 5px;
    }

    .custom-button {
        width: 80%;
        opacity: 0.7;
        position: absolute;
        top: 255px;
        display: none;

        @media screen and (max-width: 575px){
            display:block;
            opacity: 0.9;
            padding: 0;
            min-width: 20vw;
        }
    }
    
    &:hover {
      .image {
        opacity: 0.8;
      }
      .custom-button {
        opacity: 0.85;
        display: flex;
      }
      @media screen and (max-width: 575px){
        .image {
          opacity: unset;
        }
        .custom-button {
          opacity: unset;
        }
      }
    }
  
    .collection-footer {
      width: 100%;
      height: 5%;
      display: flex;
      justify-content: space-between;
      font-size: 18px;
      padding: 0 5px;
      .name {
        margin-bottom: 15px;
      }
      .price {
        width: 10%;
      }
    }
`;

export default CollectionItemContainer