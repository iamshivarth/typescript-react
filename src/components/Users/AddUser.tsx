import React, { FunctionComponent, useState } from 'react';
import Button from '../Button/Button';
import ErrorModal from '../ErrorModal/ErrorModal';
import styles from './User.module.scss';

interface UserProps {
  name: string;
  age: string;
  users: Array<object>;
  setName: (name: string) => void;
  setAge: (age: string) => void;
  setUsers: (users: Array<object>) => void;
}

const AddUser: FunctionComponent<UserProps> = ({
  name,
  age,
  users,
  setName,
  setAge,
  setUsers,
}): JSX.Element => {
  const [error, setError] = useState<boolean>(false);
  const [errorMsg, setErrorMsg] = useState<string>('');

  return (
    <>
      {error && <ErrorModal setError={setError} errorMsg={errorMsg} />}
      <form
        aria-labelledby="Add User Form"
        className={styles.addUserContainer}
        onSubmit={(e) => {
          e.preventDefault();
          if (name.trim().length === 0 || age.trim().length === 0) {
            setError(true);
            setErrorMsg('Fields can not be empty!');
            return;
          }
          if (parseInt(age) < 1) {
            setError(true);
            setErrorMsg('Age can not be less than 1');
            return;
          }
          setUsers([
            ...users,
            {
              name,
              age,
            },
          ]);
          setName('');
          setAge('');
        }}
      >
        <fieldset className={styles.field}>
          <label className={styles.label} htmlFor="user-name">
            Name:{' '}
          </label>
          <input
            className={styles.input}
            type="text"
            name=""
            id="user-name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <label className={styles.label} htmlFor="user-age">
            Age:{' '}
          </label>
          <input
            className={styles.input}
            type="number"
            name=""
            id="user-age"
            value={age}
            onChange={(e) => setAge(e.target.value.toString())}
          />
          <Button
            {...(error === true && { disabled: true })}
            type="submit"
            height="30px"
            width="auto"
            bg="#41cd"
            color="#fff"
          >
            Add User
          </Button>
        </fieldset>
      </form>
    </>
  );
};

/* const User = ({ name, age }: UserProps): JSX.Element => {
  return (
    <div>
      User: {name}, {age} years old
    </div>
  );
}; */

export default AddUser;
