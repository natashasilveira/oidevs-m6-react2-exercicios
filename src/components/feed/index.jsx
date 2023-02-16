import { useEffect, useState } from 'react'
import { fetcher } from '../../services'
import * as S from './styles'
import { Text } from '../../ui/text'
import { Loading } from '../../ui/loading'

export const Feed = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const makeRequest = async () => {
      setIsLoading(true);
      try {
        const response = await fetcher('photos');
        setTimeout(() => {
          setItems(response);
        }, 2000);
        
      } catch (error) {
        console.log(`Deu Ruim: ${error}`);
        setHasError(true)
      } finally {
        setTimeout(() => {
          setIsLoading(false);
        }, 2000);
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
      {isLoading && <Loading></Loading>}
      {hasError && <Text>Deu Ruim Demais!</Text>}
      {items.map(item =>
        <S.Item key={item.id}>
          <S.Image src={item.urls.small} />
        </S.Item>
      )}
    </S.Wrapper>
  )
};