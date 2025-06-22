import { Col, Container, Row } from 'react-bootstrap';
import Button from '../../common/Button/Button';
import Title from '../../common/Title/Title';

export default function Home() {
  return (
    <Container className='bg-white p-4 mt-4 rounded shadow'>
      <Title>All tables</Title>
      <Row className='align-items-center justify-content-between border-bottom py-3'>
        <Col xs={8} className='d-flex algin-items-center gap-5'>
          <h4 className='mb-0'>Table 1</h4>
          <p className='mb-0'>Status: Reserved</p>
        </Col>
        <Col xs='auto'>
          <Button>Show more</Button>
        </Col>
      </Row>
    </Container>
  );
}
