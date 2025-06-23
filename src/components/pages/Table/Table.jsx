import { Container } from 'react-bootstrap';
import Button from '../../common/Button/Button';
import Input from '../../common/Input/Input';
import Label from '../../common/Label/Label';
import Span from '../../common/Span/Span';

export default function Table() {
  return (
    <Container className='bg-white p-4 mt-4 rounded shadow'>
      <h1 className='mb-4'>Table 1</h1>
      <form>
        <div className='mb-4 d-flex align-items-center'>
          <Label>Status: </Label>
          <select id='status' className='form-select w-auto'>
            <option value='Busy'>Busy</option>
            <option value='Free'>Free</option>
            <option value='Cleaning'>Cleaning</option>
          </select>
        </div>
        <div className='d-flex mb-4'>
          <Label>People: </Label>
          <div className='d-flex align-items-center gap-2'>
            <Input />
            <Span>/</Span>
            <Input />
          </div>
        </div>
        <div className='mb-4 d-flex align-items-center'>
          <Label>Bill: </Label>
          <Span>$</Span>
          <Input />
        </div>
        <div className='mt-4'>
          <Button>Update</Button>
        </div>
      </form>
    </Container>
  );
}
