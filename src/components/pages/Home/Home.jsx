import { Col, Container, Row } from 'react-bootstrap';
import Title from '../../common/Title/Title';
import { useEffect, useState } from 'react';
import List from '../../List/List';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3131/tables')
      .then((res) => res.json())
      .then((res) => {
        setData(res);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <p>Ładowanie...</p>;
  }

  return (
    <Container className='bg-white p-4 mt-4 rounded shadow'>
      <Title>All tables</Title>
      <List data={data} />
    </Container>
  );
}
