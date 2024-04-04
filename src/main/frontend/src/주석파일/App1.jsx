//오전시간 app.jsx 파일

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';

function App() {
  // 서버가 내려주는 데이터를 받기  
  const[data, setData] = useState('');
  const[user, setUser]= useState({});

  //컴포넌트가 처음 렌더링할 때, 실행될 코드 정의
  useEffect(() => {
    axios.get('/rp/react/data')       
      .then(res => {
        console.log(res.data);  //응답데이터 확인
        setData(res.data);    //실제 데이터를 상태로 설정
      })       
      .catch(err => {console.log(err);});   //오류 처리 => err을 콘솔에 출력
  }, []);   

  useEffect(() => {
      axios.get('/rp/react/json')
        .then(res => setUser(res.data))
        .catch(err => {console.log(err);});
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h3>
          {/* 데이터를 받아오면 data, 아니면 문자열 표기 */}
          받아온 값 : {data ? data : '받아오기를 실패했습니다.'} 
        </h3>
        <h3>
          사용자 정보: uid={user.uid}, uname={user.uname}
        </h3>
      </header>
    </div>
  );
}

export default App;
