function Header() {
  return (
    <header className="site-header-container">
      <div className="site-header wrapper d-flex align-items-center flex-wrap">
        <div className="site-logo mr-4">
          <h1>Lifelike</h1>
        </div>

        <nav id="login-nav-item" className="site-header-buttons ml-auto">
          <a id="login-link" className="btn btn-outline-light">
            Sign in
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
