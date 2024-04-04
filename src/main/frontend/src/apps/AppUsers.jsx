import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../App.css';

function App() {
    const [users, setUsers] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        axios.get('/rp/react/users')
            .then(res => {
                console.log(res.data);
                setUsers(res.data);
                setIsLoading(false);
            })
            .catch(err => { console.log(err); });
    }, []);
    return (
        <div>
            <h1>사용자 목록</h1>
            <h3>{isLoading ? '로딩중...' : ''}</h3>
            <table border={1}>
                <tr>
                    <th>uid</th><th>uname</th><th>이메일</th>
                </tr>
                {
                    users.map(user => (
                        <tr key={user.uid}>
                            <td>{user.uid}</td>
                            <td>{user.uname}</td>
                            <td>{user.email}</td>

                        </tr>
                    ))
                }
            </table>
        </div>
    );
}

export default App;