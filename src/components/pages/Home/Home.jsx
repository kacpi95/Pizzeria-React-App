import { Container } from 'react-bootstrap';
import Title from '../../common/Title/Title';
import { useEffect, useState } from 'react';
import List from '../../features/List/List';
import { useDispatch, useSelector } from 'react-redux';
import { setTables } from '../../../redux/tablesRedux';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();
  const tables = useSelector((state) => state.tables);

  useEffect(() => {
    fetch('http://localhost:3131/tables')
      .then((res) => res.json())
      .then((tables) => {
        dispatch(setTables(tables));
        setIsLoading(false);
      });
  }, [dispatch]);

  if (isLoading) {
    return <p>Ładowanie...</p>;
  }

  return (
    <Container className='bg-white p-4 mt-4 rounded shadow'>
      <Title>All tables</Title>
      <List data={tables} />
    </Container>
  );
}
