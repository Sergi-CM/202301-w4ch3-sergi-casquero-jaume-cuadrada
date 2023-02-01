interface ActionProps {
  href: string;
  className: string;
  text: string;
}

const Action = ({ href, className, text }: ActionProps) => {
  return (
    <a href={href} className={className}>
      {text}
    </a>
  );
};

export default Action;
