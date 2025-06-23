import { Row, Col } from 'react-bootstrap';
import Button from '../common/Button/Button';
import { useNavigate } from 'react-router-dom';

export default function Item({ id, status }) {
  const navigate = useNavigate();

  function handleShowTable(e) {
    e.preventDefault();
    navigate(`/table/${id}`);
  }
  return (
    <Row className='align-items-center justify-content-between border-bottom py-3'>
      <Col xs={8} className='d-flex align-items-center gap-5'>
        <h4 className='mb-0'>Table {id}</h4>
        <p className='mb-0 '>
          Status:<span className='fw-bold'> {status}</span>
        </p>
      </Col>
      <Col xs='auto'>
        <Button onClick={handleShowTable}>Show more</Button>
      </Col>
    </Row>
  );
}
