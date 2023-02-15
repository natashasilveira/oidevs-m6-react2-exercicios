import { useEffect, useState } from 'react'
import { fetcher } from '../services'
import * as S from './styles'
import { Text } from '../../ui/text'

export const Feed = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const makeRequest = async () => {
      try {
        setIsLoading(true);
        const response = await fetcher('photos');
        setTimeout(() => {
          setIsLoading(false);
          setItems(response);
        }, 2000);
      } catch (error) {
        console.log(`Deu Ruim: ${error}`);
      }
    }

    makeRequest();
  }, []);

  // useEffect(() => {
  //   const makeRequest = async () => {
  //     const response = await fetcher('photos');
  //     setItems(response);
  //     console.log(items)    
  //   };

  //   makeRequest();
  // }, []);

  return (
    <S.Wrapper>
      {isLoading && <Text>Carregando...</Text>}
      {items.map(item =>
        <S.Item key={item.id}>
          <S.Image src={item.urls.small} />
        </S.Item>
      )}
    </S.Wrapper>
  )
};