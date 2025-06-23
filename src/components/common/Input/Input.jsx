export default function Input({ value, onChange }) {
  return (
    <input
      type='number'
      className='form-control-sm w-auto'
      value={value}
      onChange={onChange}
    />
  );
}
