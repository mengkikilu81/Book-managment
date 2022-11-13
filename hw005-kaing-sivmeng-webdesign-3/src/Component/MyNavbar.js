const MyNavbar = () => {
    return (
        <div className="container">
        <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 ">
          <a href="/" className="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none">
          <span className="fs-4">Simple header</span>
          </a>
    
          <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
            <li><a href="#" className="nav-link px-2 link-secondary">Home</a></li>
            <li><a href="#" className="nav-link px-2 link-dark">Enroll</a></li>
            <li><a href="#" className="nav-link px-2 link-dark">Course</a></li>
            <li><a href="#" className="nav-link px-2 link-dark">IT News</a></li>
            <li><a href="#" className="nav-link px-2 link-dark">Job Opportunity</a></li>
            <li><a href="#" className="nav-link px-2 link-dark">About Us</a></li>
          </ul>
    
          <div className="col-md-3 text-end ">
          </div>
        </header>
      </div>
    )
}
export default MyNavbar