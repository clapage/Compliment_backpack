import { useState } from 'react';
import { Link } from 'react-router-dom';

const AppNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <h1>
        <Link to="/">Compliment Backpack</Link>
      </h1>
      <div className="navbar-links">
        <button className="navbar-toggle" onClick={handleToggle}>
          {isOpen ? 'Close' : 'Open'}
        </button>
        {isOpen && (
          <div className="navbar-menu">
            <Link to="/signup">Sign Up</Link>
            <Link to="/login">Login</Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default AppNavbar;
