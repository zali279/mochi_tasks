interface IconProps {
  name: string;
}

const Icon: React.FC<IconProps> = ({ name }) => {
  return (
    <img 
    className="icon-img"
    src={`images/icons8-${name}.svg`} alt={name} />
  );
}

export default Icon;