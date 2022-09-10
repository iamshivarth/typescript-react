import React from 'react';
import Button from '../Button/Button';

interface ErrorProps {
  setError: (error: boolean) => void;
  errorMsg: string;
}

const ErrorModal: React.FunctionComponent<ErrorProps> = ({
  setError,
  errorMsg,
}): JSX.Element => {
  return (
    <section>
      <p>{errorMsg}</p>
      <Button
        height="30px"
        width="auto"
        bg="#41cd"
        color="#fff"
        onClick={() => setError(false)}
      >
        Close
      </Button>
    </section>
  );
};

export default ErrorModal;
