import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../App.css';

function App() {
    const [form, setForm] = useState({ uid: '', uname: '' });

    //form 상태 업데이트, 사용자 입력정보 최신 반영
    const handleChange = (event) => {
        const { name, value } = event.target;
        setForm({ ...form, [name]: value });
        //폼을 제출하면 => handleSubmit으로 호출
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        //URLSearchParams를 사용하여 서버로 전송하기 위한 준비
        const params = new URLSearchParams();
        params.append('uid', form.uid);
        params.append('uname', form.uname);
        console.log(params);

        //axios.post를 사용하여 이 데이터를 서버의 '/rp/react/form' 경로로 전송
        axios
            .post('/rp/react/form', params)
            .then(res => { console.log(res); });

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
