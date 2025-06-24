import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateTable } from '../../redux/tablesRedux';
import { useNavigate } from 'react-router-dom';

export default function useTableForm(table) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [status, setStatus] = useState('');
  const [people, setPeople] = useState('');
  const [maxPeople, setMaxPeople] = useState('');
  const [bill, setBill] = useState('');

  useEffect(() => {
    if (table && table.id) {
      setStatus(table.status);
      setPeople(table.peopleAmount);
      setMaxPeople(table.maxPeopleAmount);
      setBill(table.bill);
    }
  }, [table]);

  useEffect(() => {
    const peopleNumber = parseInt(people);
    const maxPeopleNumber = parseInt(maxPeople);

    if (peopleNumber > maxPeopleNumber) {
      setPeople(maxPeopleNumber);
    }
  }, [people, maxPeople]);

  function handleChangeData(e) {
    e.preventDefault();
    const payload = {
      status,
      peopleAmount: people,
      maxPeopleAmount: maxPeople,
      bill: bill,
    };

    if (status !== 'Busy') {
      payload.bill = '0';
    }
    if (status === 'Free' || status === 'Cleaning') {
      payload.peopleAmount = '0';
    }

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

  return {
    status,
    setStatus,
    people,
    setPeople,
    maxPeople,
    setMaxPeople,
    bill,
    setBill,
    handleChangeData,
  };
}
