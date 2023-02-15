import styled from "styled-components"

export const Wrapper = styled.div`
  /* background-color: red; */
  max-width: 970px;
  padding: 30px 40px 0;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
`;

export const Item = styled.div`
  /* background-color: blue; */
  width: 290px;
  height: 290px;
  margin-bottom: 28px;
  cursor: pointer;
`;

export const Image = styled.img`
  width: 100%;
  height: 293px;
  object-fit: cover;
`;  