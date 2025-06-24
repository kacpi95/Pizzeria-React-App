import Label from '../../common/Label/Label';
import Input from '../../common/Input/Input';
import Span from '../../common/Span/Span';

export default function PeopleInput({
  people,
  setPeople,
  maxPeople,
  setMaxPeople,
}) {
  return (
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
  );
}
