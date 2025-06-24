import { Container } from 'react-bootstrap';
import Button from '../../common/Button/Button';
import { getTables } from '../../../redux/tablesRedux';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import TableStatusSelect from '../../features/TableStatusSelect/TableStatusSelect';
import PeopleInput from '../../features/PeopleInput/PeopleInput';
import BillInput from '../../features/BillInput/BillInput';
import useTableForm from '../../hooks/useTableForm';

export default function Table() {
  const { id } = useParams();
  const table = useSelector((state) => getTables(state, id));

  const {
    status,
    setStatus,
    people,
    setPeople,
    maxPeople,
    setMaxPeople,
    bill,
    setBill,
    handleChangeData,
  } = useTableForm(table);

  return (
    <Container className='bg-white p-4 mt-4 rounded shadow'>
      <h1 className='mb-4'>Table {table.id}</h1>
      <form onSubmit={handleChangeData}>
        <TableStatusSelect
          status={status}
          onChange={(e) => setStatus(e.target.value)}
        />
        <PeopleInput
          people={people}
          setPeople={setPeople}
          maxPeople={maxPeople}
          setMaxPeople={setMaxPeople}
        />
        {status === 'Busy' && <BillInput bill={bill} setBill={setBill} />}
        <div className='mt-4'>
          <Button>Update</Button>
        </div>
      </form>
    </Container>
  );
}
