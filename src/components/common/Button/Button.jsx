export default function Button({ children, onClick }) {
  return (
    <button onClick={onClick} className='bg-primary rounded text-white btn'>
      {children}
    </button>
  );
}
