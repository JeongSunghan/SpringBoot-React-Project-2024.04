import React, { useState } from 'react';
import axios from 'axios';
import '../App.css';

function App() {
  const [form, setForm] = useState({uid:'', uname:''});
  const [file, setFile] = useState(null);

  // 사용자가 입력 필드에 데이터를 입력하면, 해당 데이터는 form 상태 객체에 업데이트
  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  }

  //  사용자가 파일을 선택하면, 해당 파일은 file 상태에 저장
  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    // 사용자가 입력한 데이터와 선택한 파일을 FormData 객체에 추가
    // // 객체를 포함하는 POST 요청을 서버로 보냄
    const formData = new FormData();
    formData.append('uid', form.uid);
    formData.append('uname', form.uname);
    formData.append('file', file);
    console.log(formData);
    
    //  multipart/form-data로 설정하여 파일과 텍스트 데이터를 함께 전송
    const axiosConfig = { headers: {"Content-Type": "multipart/form-data", } }    
    axios
      .post('/rp/react/multi', formData, axiosConfig)
      .then((res) => {console.log(res);});
  }
  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <label htmlFor='uid'>아이디:</label>
        <input type='text' id='uid' name='uid' value={form.uid} onChange={handleChange} /><br />
        <label htmlFor='name'>이름:</label>
        <input type='text' id='uname' name='uname' value={form.uname} onChange={handleChange} /><br />
        <label htmlFor='file'>파일:</label>
        <input type='file' id='file' name='file' onChange={handleFileChange} /><br />
        <button>확인</button>
      </form>
    </div>
  );
}

export default App;