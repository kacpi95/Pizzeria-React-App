import Label from '../../common/Label/Label';

export default function TableStatusSelect({ status, onChange }) {
  return (
    <div className='mb-4 d-flex align-items-center'>
      <Label>Status: </Label>
      <select
        id='status'
        className='form-select w-auto'
        value={status}
        onChange={onChange}
      >
        <option value='Busy'>Busy</option>
        <option value='Free'>Free</option>
        <option value='Cleaning'>Cleaning</option>
      </select>
    </div>
  );
}
