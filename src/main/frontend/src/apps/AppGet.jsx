import React, { useEffect, useState } from 'react';
import axios from 'axios';
import logo from './logo.svg';
import '../App.css';

function App() {
  const [data, setData] = useState('');
  const [user, setUser] = useState({});

  //페이지가 로딩 될 때
  useEffect(() => {
    axios.get('/rp/react/data')   //get 요청 보내기
      .then(res => {    //응답으로 받은 데이터(res.data)를 setData를 사용. data상태에 저장
        console.log(res);
        setData(res.data);
      })
      // 실패시 에러
      .catch(err => {console.log(err);});
  }, []);


  useEffect(() => {
    axios.get('/rp/react/json')   //위와 동일
      .then(res => setUser(res.data))
      .catch(err => console.log(err));
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h3>
          받아온 값: {data ? data : '받아오지 못했어요.'}
        </h3>
        <h3>
          사용자 정보: uid={user.uid}, uname={user.uname}
        </h3>
      </header>
    </div>
  );
}

export default App;