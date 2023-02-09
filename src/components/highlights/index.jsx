import * as S from './styles';
import { Avatar } from '../avatar';
import React from "react";

const highLightList = [
  {
    image: 'https://via.placeholder.com/90',
    text: 'Parceiros'
  },
  {
    image: 'https://via.placeholder.com/90',
    text: 'Desafios'
  },
  {
    image: 'https://via.placeholder.com/90',
    text: 'Comunidade'
  },
  {
    image: 'https://via.placeholder.com/90',
    text: 'Faculdade'
  },
  {
    image: 'https://via.placeholder.com/90',
    text: 'Modelo Educacional'
  }
]

const extractTextStrings = (item) => {
  if (!item.text) return "NONE";
  return item.text;
};

export const removeInvalidValues = (item) => {
  if (item === "NONE") {
    return false;
  } else {
    return true;
  }
};

export const HighLights = () => {
  const normalizeData = (data) =>
    data.map(extractTextStrings).filter(removeInvalidValues);

  React.useEffect(() => {
    const meuArray = normalizeData(highLightList);
    // console.log(meuArray);
  }, []);

  return (
    <S.Wrapper>
      {highLightList.map((highlight, index) => (
        <S.HighLightItem key={index}>
        <Avatar size='small' imagePath={highlight.image} />
        <S.HighLightText>{highlight.text}</S.HighLightText>
      </S.HighLightItem>
      ))}
    </S.Wrapper>
  );
}