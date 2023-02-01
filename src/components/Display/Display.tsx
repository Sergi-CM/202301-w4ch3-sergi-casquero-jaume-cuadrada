interface InfoDisplay {
  className: string;
}

const Display = ({ className }: InfoDisplay): JSX.Element => {
  return <span className={className}>606334455</span>;
};

export default Display;
