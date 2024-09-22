import { HeaderContainer } from "./styles";
import { Timer, Scroll } from "phosphor-react";

import IgniteLogo from "../../assets/Ignitelogo.svg";
import { NavLink } from "react-router-dom";

export function Header(){
  return(
    <HeaderContainer>
      <img src={IgniteLogo} alt=""/>
      <nav>
        <NavLink to="/" title="timer">
          <Timer size={24} />
        </NavLink>
        <NavLink to="/history" title="histórico">
          <Scroll size={24} />
        </NavLink>
      </nav>
    </HeaderContainer>
  )
}