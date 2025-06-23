import { Row, Col } from 'react-bootstrap';
import Button from '../common/Button/Button';

export default function Item({ id, status }) {
  return (
    <Row className='align-items-center justify-content-between border-bottom py-3'>
      <Col xs={8} className='d-flex align-items-center gap-5'>
        <h4 className='mb-0'>Table {id}</h4>
        <p className='mb-0 '>
          Status:<span className='fw-bold'> {status}</span>
        </p>
      </Col>
      <Col xs='auto'>
        <Button>Show more</Button>
      </Col>
    </Row>
  );
}
