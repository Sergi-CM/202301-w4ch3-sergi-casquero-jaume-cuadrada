interface KeyProps {
  content: string;
  className: string;
}

const Key = ({ content, className }: KeyProps): JSX.Element => {
  return (
    <li>
      <button className={className}>{content}</button>
    </li>
  );
};

export default Key;
