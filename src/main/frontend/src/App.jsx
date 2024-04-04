import React, { useEffect, useState } from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';

function App() {
  const [data, setData] = useState('');
  const [users, setUsers] = useState([]);


  useEffect(() => {
    axios.get('/rp/react/data')
      .then(res => {
        console.log(res.data);
        setData(res.data);
      })
      .catch(err => { console.log(err); });
  }, []);

  useEffect(() => {
    axios.get('/rp/react/json')
      .then(res => setUsers(res.data))
      .catch(err => { console.log(err); });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <table border={3}>
          <thead>
            <tr>
              <th>아이디</th><th>이름</th><th>이메일</th>
            </tr>
          </thead>
          <tbody>
            {users.map(user => (
              <tr key={user.uid}>
                <td>{user.uid}</td>
                <td>{user.uname}</td>
                <td>{user.email}</td>                
              </tr>
            ))}
          </tbody>
        </table>
        <h3>
          받아온 값 : {data ? data : '받아오기를 실패했습니다.'}
        </h3>
      </header>
    </div>
  );
}

export default App;
