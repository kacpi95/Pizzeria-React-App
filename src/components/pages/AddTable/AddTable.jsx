import { Container } from 'react-bootstrap';
import Button from '../../common/Button/Button';
import { useDispatch, useSelector } from 'react-redux';
import { addTables } from '../../../redux/tablesRedux';
import { useNavigate } from 'react-router-dom';

export default function AddTable() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const tables = useSelector((state) => state.tables);

  function handleAddTable(e) {
    e.preventDefault();

    const maxId = tables.reduce((max, table) => {
      const num = parseInt(table.id);
      return isNaN(num) ? max : Math.max(max, num);
    }, 0);
    const newTable = {
      id: String(maxId + 1),
      status: 'Free',
      peopleAmount: '0',
      maxPeopleAmount: '10',
      bill: '0',
    };

    fetch('http://localhost:3131/tables', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newTable),
    })
      .then((res) => res.json())
      .then((data) => {
        dispatch(addTables(data));
        navigate('/');
      })
      .catch((err) => {
        console.error('Błąd przy dodawaniu stołu:', err);
      });
  }
  return (
    <Container className='bg-white p-4 mt-4 rounded shadow'>
      <Button onClick={handleAddTable}>Add new table</Button>
    </Container>
  );
}
