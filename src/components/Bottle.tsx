import "./Bottle.css";

const bottleImgSrc: string = "/Bottle.png";

interface BottleProps {
  rotationAngle: number;
}

const Bottle: React.FC<BottleProps> = ({ rotationAngle }) => {
  return (
    <img
      src={bottleImgSrc}
      alt="Bottle"
      className="bootle"
      style={{ transform: `rotate(${rotationAngle}deg)` }}
    />
  );
};

export default Bottle;
