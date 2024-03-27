import React, { useState } from 'react';

function LearnabilityInterface() {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`You entered: ${inputValue}`);
    setInputValue('');
  };

  return (
    <div>
      <h1>Welcome to our learnability testing interface!</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="inputField">
          Please enter some text and click submit:
          <input
            type="text"
            id="inputField"
            value={inputValue}
            onChange={handleChange}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default LearnabilityInterface;