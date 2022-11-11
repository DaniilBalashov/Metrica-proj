import React from 'react';
import { Link } from 'react-router-dom';

export default function NavBar() {
  return (
    <nav className="navBar">
      <div className="container">
        <Link className="logo" to="/">ТЕРМИКА</Link>
      </div>
    </nav>
  );
}
