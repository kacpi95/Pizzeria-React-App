import { Container } from 'react-bootstrap';
import Button from '../../common/Button/Button';
import { useDispatch } from 'react-redux';
import shortid from 'shortid';
import { addTables } from '../../../redux/tablesRedux';
import { useNavigate } from 'react-router-dom';

export default function AddTable() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  function handleAddTable(e) {
    e.preventDefault();
    const newTable = {
      id: shortid(),
      status: 'Free',
      peopleAmount: '0',
      maxPeopleAmount: '10',
      bill: '0',
    };
    dispatch(addTables(newTable));
    navigate('/');
  }
  return (
    <Container className='bg-white p-4 mt-4 rounded shadow'>
      <Button onClick={handleAddTable}>Add new table</Button>
    </Container>
  );
}
