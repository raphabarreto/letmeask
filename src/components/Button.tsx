import { useState } from 'react';

type ButtonProps = {
  title?: string;
};

export function Button({ title }: ButtonProps) {
  const [counter, setCounter] = useState(0);

  function increment() {
    setCounter(counter + 1);
  }

  return (
    <button onClick={increment}>
      {title || 'Default'} - {`Valor - ${counter}`}
    </button>
  );
}
