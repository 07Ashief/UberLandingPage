import React, { useState } from 'react';

function LoginForm() {
  const [email, setEmail] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission here
  };

  return (
    <div>
      <form className="mb-6 d-flex justify-content-center" onSubmit={handleSubmit}>
        <div>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter phone number or email"
            style={{ width: '320px', margin: '10px', background: 'lightgray' }}
            value={email}
            onChange={handleEmailChange}
          />
        </div>
      </form>
      <div className="d-grid gap-2 d-md-block">
      <button className="btn btn-dark" type="submit" style={{ width: '320px', fontSize: '16px' }}>
  Continue
</button>

      </div>
    </div>
  );
}

export default LoginForm;
