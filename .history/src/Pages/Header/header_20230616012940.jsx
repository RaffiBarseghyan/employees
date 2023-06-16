import { Link } from "react-router-dom";
import style from "./header.module.scss";

function Header() {
  return (
    <>
      <nav className="navbar navbar-expand bg-body-tertiary">
        <div className="container-fluid">
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 d-flex justify-content-center">
              <li className="nav-item">
                <Link
                  className={`nav-link navbar-brand active ${style.linkStyle}`}
                  to="/employees"
                >
                  Employees
                </Link>
              </li>
              <li className="nav-item">
                <Link
                
                  className={`nav-link navbar-brand ${style.linkStyle}`}
                  to="/tasks"
                >
                  Tasks
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
