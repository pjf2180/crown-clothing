import styled from 'styled-components';

export const SpinnerOverlay = styled.div`
  ${getSpinnerOverlayStyles}
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SpinnerContainer = styled.div`
  display: inline-block;
  ${getSpinnerStyles}
  border: 3px solid rgba(195, 195, 195, 0.6);
  border-radius: 50%;
  border-top-color: #636767;
  animation: spin 1s ease-in-out infinite;
  -webkit-animation: spin 1s ease-in-out infinite;
  @keyframes spin {
    to {
      -webkit-transform: rotate(360deg);
    }
  }
  @-webkit-keyframes spin {
    to {
      -webkit-transform: rotate(360deg);
    }
  }
`;

const fitContentStyles = 'height: 30px; width: 30px; '

function getSpinnerOverlayStyles(props) {
  return props.fitOnContainer ? fitContentStyles : `height: 60vh; width: 100%;`;
}
function getSpinnerStyles(props) {
  const val = props.fitOnContainer ? fitContentStyles : `height: 50px; width: 50px;`;
  return val;
}
