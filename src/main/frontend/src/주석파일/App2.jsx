import React, { useEffect, useState } from 'react';
import axios, { Axios } from 'axios';
import logo from './logo.svg';
import './App.css';

function App() {
  const [form, setForm] = useState({ uid: '', uname: '' })
  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  }

  const handleSubmit = (event) => {
    event.preventDefault();
  }



  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <label htmlFor='uid'>아이디:</label>
        <input type='text' id='uid' name='uid' value={form.uid} onChange={handleChange} /><br />
        <label htmlFor='uname'>이름:</label>
        <input type='text' id='uname' name='uname' value={form.uname} onChange={handleChange} /><br />
        <button onSubmit={handleSubmit}>확인</button>        
      </form>
      
    </div>
  );
}

export default App;
