import "./Bottle.css";

const bottleImgSrc = "/Bottle.png";

const Bottle = () => {
  const state = {
    spinning: true,
    rotationAngle: 0,
  };

  return (
    <img
      src={bottleImgSrc}
      alt="Bottle"
      className={`bootle ${state.spinning ? "spinning" : ""}`}
      style={{ transform: `rotate(${state.rotationAngle}deg)` }}
    />
  );
};

export default Bottle;
