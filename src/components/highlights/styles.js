import styled from "styled-components";
import { Text } from "../../ui/text";

export const Wrapper = styled.div`
  display: flex;
  margin: 40px 0;
  /* gap: 30px; */
  justify-content: space-evenly;
`;

export const HighLightItem = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  /* width: 100px; */
`;


export const HighLightText = styled(Text)`
  margin-top: 6px;
  width: 90px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;