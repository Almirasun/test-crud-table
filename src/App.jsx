import React, { useState } from 'react'
import './App.css';

const initialValues = {
  userName: '',
  userSurname: '',
  userSalary: ''
}

function App() {
  const [userData, setUserData] = useState(initialValues)
  const [users, setUsers] = useState([])
  console.log('userData: ', users);

  const handleSubmitUser = (e) => {
    e.preventDefault()

    if (isFilledFields) {
      setUsers((prevState) => [...prevState, userData])

      setUserData(initialValues)
    }

  }

  const isFilledFields = userData.userName && userData.userSurname && userData.userSalary

  return (
    <div className="wrapper">
      <div className='wrapper-content'>
        <div className='table-data'>
          <table>
            <th>#</th>
            <th>User Name</th>
            <th>User Surname</th>
            <th>User Salary</th>
            <th>Actions</th>

            <tbody>
              {users.map((user, index) => (
                <tr>
                  <td>{index + 1}</td>
                  <td>{user.userName}</td>
                  <td>{user.userSurname}</td>
                  <td>{user.userSalary}</td>
                  <td>
                    <div>
                      <button className='edit-action'>edit</button>
                      <button className='remove-action'>remove</button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div>
          <form onSubmit={handleSubmitUser}>
            <input placeholder='user name' onChange={(e) => setUserData((prevState) => ({
              ...prevState,
              userName: e.target.value
            }))}
              value={userData.userName}
            />
            <input placeholder='user surname' onChange={(e) => setUserData((prevState) => ({
              ...prevState,
              userSurname: e.target.value
            }))}
              value={userData.userSurname}
            />
            <input placeholder='user salary' onChange={(e) => setUserData((prevState) => ({
              ...prevState,
              userSalary: e.target.value
            }))}
              value={userData.userSalary}
            />
            <div className='buttons-wrapper'>
              <button type='reset'>Clean</button>
              <button type='submit' disabled={!isFilledFields}>Add</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
