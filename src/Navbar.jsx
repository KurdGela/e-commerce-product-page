const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <ul className="navbar-items">
          <img src="../project-files/assets/logo.svg" />
          <li>collections</li>
          <li>men</li>
          <li>women</li>
          <li>about</li>
          <li>contact</li>
        </ul>
        <div className="cart-pfp">
          <img src="../project-files/assets/icon-cart.svg" className="cart" />
          <img src="../project-files/assets/image-avatar.png" className="pfp" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
