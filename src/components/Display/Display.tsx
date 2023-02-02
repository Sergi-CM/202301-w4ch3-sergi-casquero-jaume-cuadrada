interface InfoDisplay {
  className: string;
}

const Display = ({ className }: InfoDisplay): JSX.Element => {
  return (
    <span data-testid="1" className={className}>
      606334455
    </span>
  );
};

export default Display;
