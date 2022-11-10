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
    <form className="form" onSubmit={submitHandler}>
      <div className="underContainer">
        <div className="form">
          <h5 className="nameInputText">Введите ваше имя</h5>
          <input name="name" className="inputName" placeholder="Name" aria-label="Username" aria-describedby="basic-addon1" />
          <button type="submit" className="goToTest">Перейти к тестированию</button>
        </div>
      </div>
    </form>
  );
}
