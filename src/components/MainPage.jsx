import React from 'react';

export default function MainPage() {
  const submitHandler = async (e) => {
    e.preventDefault();
    const response = await fetch('/api/v1/', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(Object.fromEntries(new FormData(e.target))),
    });
    if (response.ok) {
      window.location.href = '/test';
    }
  };
  return (
    <form onSubmit={submitHandler}>
      <div className="card" style={{ width: '18rem' }}>
        <div className="card-body">
          <h5 className="card-title">Name</h5>
          <input name="name" className="form-control" placeholder="Name" aria-label="Username" aria-describedby="basic-addon1" />
          <button type="submit" className="btn btn-secondary">K testu</button>
        </div>
      </div>
    </form>
  );
}
