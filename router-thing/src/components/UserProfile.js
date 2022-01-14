// src/components/UserProfile.js

import React from 'react';
import { Link } from 'react-router-dom';
function UserProfile(props) {
    return (
        <div>
          <h1>User Profile</h1>

          <nav><Link to="/">Home</Link> <Link to="/debits">Debits</Link> <Link to="/credit">Credits</Link></nav>
          
          <div>Username: {props.userName}</div>
          <div>Member Since: {props.memberSince}</div>
          
        </div>
    );
  }

export default UserProfile;