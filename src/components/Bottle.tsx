import "./Bottle.css";

const bottleImgSrc: string = "/Bottle.png";

interface BottleProps {
  spinning: boolean;
  rotationAngle: number;
}

const Bottle: React.FC<BottleProps> = ({ spinning, rotationAngle }) => {
  return (
    <img
      src={bottleImgSrc}
      alt="Bottle"
      className={`bootle ${spinning ? "spinning" : ""}`}
      style={{ transform: `rotate(${rotationAngle}deg)` }}
    />
  );
};

export default Bottle;
