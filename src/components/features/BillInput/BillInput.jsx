import Label from '../../common/Label/Label';
import Span from '../../common/Span/Span';
import Input from '../../common/Input/Input';


export default function BillInput({ bill, setBill }) {
  return (
    <div className='mb-4 d-flex align-items-center'>
      <Label>Bill: </Label>
      <Span>$</Span>
      <Input value={bill} onChange={(e) => setBill(e.target.value)} />
    </div>
  );
}
