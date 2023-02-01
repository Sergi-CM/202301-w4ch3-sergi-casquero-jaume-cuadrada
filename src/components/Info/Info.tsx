interface InfoProps {
  message: string;
}

const Info = ({ message }: InfoProps): JSX.Element => {
  return <span className="message">{message}</span>;
};

export default Info;
