import React from 'react';
import './Sidebar.css';
import CloseButton from '../components/CloseButton';
import { Link } from 'react-router-dom';
import yeezyoff from '../img/60off.webp';

const Sidebar = React.memo(({ handleSidebar }) => {
  return (
    <section className="sidebar">
      <CloseButton onClick={handleSidebar} />
      <ul>
        <li onClick={handleSidebar}>
          <Link to="/" >Home</Link>
        </li>
        <li>
          <Link to="/Journal/1" >Journal</Link>
        </li>
        <li>
          Favorite
        </li>
        <li>
          Sale
        </li>
        <li>
          Shop
        </li>
      </ul>
      <div className="yeezy-nav">
        <img src={yeezyoff} alt="60% off" />
      </div>
    </section>
  );
});

export default Sidebar;
