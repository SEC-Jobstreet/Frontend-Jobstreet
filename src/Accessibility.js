import React from 'react';

function AccessibleInterface() {
  return (
    <div>
      <header>
        <h1>Welcome to our accessible interface!</h1>
        <img src="logo.png" alt="Company Logo" />
      </header>
      <main>
        <form>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" />
          
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" />
          
          <button type="submit">Submit</button>
        </form>
      </main>
    </div>
  );
}

export default AccessibleInterface;