import { Container } from 'react-bootstrap';
import Button from '../../common/Button/Button';
import Input from '../../common/Input/Input';
import Label from '../../common/Label/Label';
import Span from '../../common/Span/Span';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getTables, updateTable } from '../../../redux/tablesRedux';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

export default function Table() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const table = useSelector((state) => getTables(state, id));

  const [status, setStatus] = useState('');
  const [people, setPeople] = useState('');
  const [maxPeople, setMaxPeople] = useState('');
  const [bill, setBill] = useState('');

  function handleChangeData(e) {
    e.preventDefault();

    fetch(`http://localhost:3131/tables/${table.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        status,
        peopleAmount: people,
        maxPeopleAmount: maxPeople,
        bill,
      }),
    })
      .then((res) => res.json())
      .then((updatedTable) => {
        dispatch(updateTable(updatedTable));
        navigate('/');
      })
      .catch((err) => {
        console.error('Błąd podczas aktualizacji:', err);
      });
  }

  useEffect(() => {
    if (table) {
      setStatus(table.status);
      setPeople(table.peopleAmount);
      setMaxPeople(table.maxPeopleAmount);
      setBill(table.bill);
    }
  }, [table]);
  return (
    <Container className='bg-white p-4 mt-4 rounded shadow'>
      <h1 className='mb-4'>Table {table.id}</h1>
      <form onSubmit={handleChangeData}>
        <div className='mb-4 d-flex align-items-center'>
          <Label>Status: </Label>
          <select
            id='status'
            className='form-select w-auto'
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          >
            <option value='Busy'>Busy</option>
            <option value='Free'>Free</option>
            <option value='Cleaning'>Cleaning</option>
          </select>
        </div>
        <div className='d-flex mb-4'>
          <Label>People: </Label>
          <div className='d-flex align-items-center gap-2'>
            <Input value={people} onChange={(e) => setPeople(e.target.value)} />
            <Span>/</Span>
            <Input
              value={maxPeople}
              onChange={(e) => setMaxPeople(e.target.value)}
            />
          </div>
        </div>
        <div className='mb-4 d-flex align-items-center'>
          <Label>Bill: </Label>
          <Span>$</Span>
          <Input value={bill} onChange={(e) => setBill(e.target.value)} />
        </div>
        <div className='mt-4'>
          <Button>Update</Button>
        </div>
      </form>
    </Container>
  );
}
