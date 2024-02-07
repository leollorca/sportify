import Link from "next/link";
import Image from "next/image";

import logo from "../../../public/logo.svg";

import './style.sass'

const Header = () => {
  return (
    <header>
      <nav>
        <ul className="links">
          <li>
            <Link href="/">
              <Image src={logo} alt="logo" />
            </Link>
          </li>
          <li>
            <Link href="/">Accueil</Link>
          </li>
          <li>
            <Link href="/*">Profil</Link>
          </li>
          <li>
            <Link href="/*">Réglages</Link>
          </li>
          <li>
            <Link href="/*">Communauté</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
