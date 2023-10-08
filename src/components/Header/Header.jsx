import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="logo">
            <img src="gallery.jpg" alt="logo" />
          </div>
          <p>
            Эта галерея создана с душой <span>&#9829;</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Header;
