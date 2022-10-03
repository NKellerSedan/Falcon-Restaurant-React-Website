import { NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav>
      <ul id='dashboard'>
        <li id='sections'>
          <h3><NavLink to='/faq'>FAQ</NavLink></h3>
        </li>
        <li id='sections'>
          <h3><NavLink to='/subscribe'>Subscribe to our Newsletter</NavLink></h3>
        </li>
      </ul>
    </nav>
  );
};
export default Navigation;
