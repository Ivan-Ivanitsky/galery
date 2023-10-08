import "./CardsWrapper.css";

const CardWrapper = ({ children }) => {
  return (
    <div className="container">
      <div className="gallery__wrapper">{children}</div>;
    </div>
  );
};

export default CardWrapper;
