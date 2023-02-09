import styled from "styled-components"

// export const Wrapper = styled.div`
//   overflow: hidden;
//   width: 150px;
//   height: 150px;
//   border-radius: 50%;
//   border: 1px solid gray;
//   ${(props) => (props.size === 'small' ? 'width: 90px; height: 90px' : '')}
// `;

export const Wrapper = styled.div(props => {
  return {
    overflow: 'hidden',
    borderRadius: '50%',
    ...props.size === 'small' ? smallSize : defaultSize
  }
});

const defaultSize = {
  width: '150px',
  height: '150px'
};

const smallSize = {
  width: '90px',
  height: '90px'
};


export const Image = styled.img``;