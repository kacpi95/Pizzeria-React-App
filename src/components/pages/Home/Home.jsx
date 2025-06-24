import { Container } from 'react-bootstrap';
import Title from '../../common/Title/Title';
import { useEffect, useState } from 'react';
import List from '../../features/List/List';
import { useDispatch, useSelector } from 'react-redux';
import { setTables } from '../../../redux/tablesRedux';
import { useNavigate } from 'react-router-dom';
import Button from '../../common/Button/Button';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();
  const tables = useSelector((state) => state.tables);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('http://localhost:3131/tables')
      .then((res) => res.json())
      .then((tables) => {
        dispatch(setTables(tables));
        setIsLoading(false);
      });
  }, [dispatch]);

  function handleShowAddTable(e) {
    e.preventDefault();
    navigate(`/addTable`);
  }

  if (isLoading) {
    return <p>Ładowanie...</p>;
  }

  return (
    <Container className='bg-white p-4 mt-4 rounded shadow'>
      <Title>All tables</Title>
      <List data={tables} />
      <Button onClick={handleShowAddTable}>Add Table</Button>
    </Container>
  );
}
