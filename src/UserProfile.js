import React from 'react';

function UserProfile({ user }) {
  return (
    <div>
      <h2>User Profile</h2>
      {user ? (
        <div>
          <p>First Name: {user.firstName}</p>
          <p>Last Name: {user.lastName}</p>
          <p>Date_of_Birth: {user.dob}</p>
          <p>Phone_Number: {user.phoneNsumber}</p>
          <p>Email: {user.email}</p>
        </div>
      ) : (
        <p>No user selected.</p>
      )}
    </div>
  );
}

export default UserProfile;
