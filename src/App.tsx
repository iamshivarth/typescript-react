import React, { useState } from 'react';
import AppStyles from './App.module.scss';
import Card from './components/Card/Card';
import AddUser from './components/Users/AddUser';

function App() {
  const [name, setName] = useState<string>('');
  const [age, setAge] = useState<string>('');
  const [users, setUsers] = useState<Array<any>>([]);

  console.log('Users: ', users);

  return (
    <div className={AppStyles.App}>
      <AddUser
        name={name}
        age={age}
        users={users}
        setName={setName}
        setAge={setAge}
        setUsers={setUsers}
      />
      {users && users.map((user, idx) => <Card key={idx} user={user} />)}
    </div>
  );
}

export default App;
