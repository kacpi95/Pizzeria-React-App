import { Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

export default function NavBar() {
  return (
    <div className='d-flex justify-content-between align-items-center px-4 py-3 mt-2 bg-primary text-white rounded'>
      <h3 className='m-0'>Waiter.App</h3>
      <Nav>
        <Nav.Link as={NavLink} to='/' className='text-white'>
          Home
        </Nav.Link>
      </Nav>
    </div>
  );
}
