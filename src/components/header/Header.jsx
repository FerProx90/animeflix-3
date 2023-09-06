import "./styles.css";
// import "../../index.css";
import Button from "./../button/Button";
import useUser from "../../hooks/UseUser";
import { useLocation } from "react-router-dom";
import { routesHash } from "../../utils/utils-routes";
import { useEffect, useState } from "react";

function Header() {
  const { user } = useUser();
  const [isUserLogged, setIsUserLogged] = useState(false);

  useEffect(() => {
    if (!user) {
      setIsUserLogged(false);
    } else {
      setIsUserLogged(true);
    }
  }, [user]);

  const location = useLocation();

  const { headerButtons, headerStyle } = routesHash.find(
    ({ route }) => location.pathname === route
  );

  return (
    <header className={`container navbar-${headerStyle}`}>
      <nav className={`navbar`}>
        <img
          className="navbar_logo"
          src="https://fontmeme.com/permalink/230906/dc258570a53571d2cfa446d10ac0bcf2.png"
          alt="Logo"
        />
        <ul className="navbar_buttons">
          {headerButtons.map((butt, index) => {
            if (isUserLogged === butt.isLogged)
              return (
                <li key={index}>
                  <Button
                    text={butt.text}
                    linkRef={butt.location}
                    customButton={butt.customButton}
                  />
                </li>
              );
          })}
          <li>{user && <span className="navbar_user">{user}</span>}</li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
