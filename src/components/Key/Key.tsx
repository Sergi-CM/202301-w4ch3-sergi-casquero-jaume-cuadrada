interface KeyProps {
  number: string;
}

const Key = ({ number }: KeyProps): JSX.Element => {
  return (
    <li>
      <button>{number}</button>
    </li>
  );
};

export default Key;
