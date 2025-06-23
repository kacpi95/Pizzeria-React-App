export default function Input({ value, onChange }) {
  return (
    <input
      min='0'
      max='10'
      type='number'
      className='form-control-sm w-auto'
      value={value}
      onChange={onChange}
    />
  );
}
