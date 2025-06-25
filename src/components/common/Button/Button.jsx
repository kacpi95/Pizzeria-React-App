export default function Button({ children, onClick }) {
  return (
    <button onClick={onClick} className='me-1 bg-primary rounded text-white btn'>
      {children}
    </button>
  );
}
