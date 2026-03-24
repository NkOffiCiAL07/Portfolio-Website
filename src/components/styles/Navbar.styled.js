import styled from "styled-components";
import { Link as NavLink } from "react-scroll";

export const StyledNavbar = styled.nav`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 7.5625rem;
  padding: 0 5rem;
  transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
  z-index: 999;
  color: #fff;
  animation: navSlideDown 0.6s ease-out;

  @keyframes navSlideDown {
    from {
      opacity: 0;
      transform: translateY(-100%);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  &.sticky {
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    background-color: rgba(0, 0, 0, 0.95);
    backdrop-filter: blur(10px);
    height: 5.32875rem;
    z-index: 999;
    box-shadow: 0 2px 20px rgba(0, 0, 0, 0.3);
  }

  @media all and (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: 0 2.5rem;
  }
`;

export const NavLogo = styled.img`
  cursor: pointer;
  color: red;
  width: 3rem;
`;

export const NavMenuList = styled.ul`
  display: flex;
  list-style: none;
  gap: 1.5rem;
  flex: 1;
  margin-left: 8rem;

  @media all and (max-width: ${({ theme }) => theme.breakpoints.md}) {
    display: none;
  }
`;

export const NavList = styled.li``;

export const StyledNavLinks = styled(NavLink)`
  font-size: 0.75rem;
  letter-spacing: 0.09375rem;
  color: ${({ theme }) => theme.color.lightGray};
  transition: 0.3s ease;
  text-transform: uppercase;
  position: relative;
  font-weight: 500;
  cursor: pointer;

  &::after {
    content: "";
    position: absolute;
    bottom: -0.3rem;
    right: 0;
    left: 0;
    width: 0;
    transform: scaleX(1);
    height: 0.0625rem;
    background: ${({ theme }) => theme.backgroundColor.orange};
    transition: 0.3s ease-in-out;
  }

  &:hover::after {
    width: 100%;
  }

  &.active {
    color: ${({ theme }) => theme.color.light};
  }

  &.active::after {
    content: "";
    position: absolute;
    bottom: -0.3rem;
    right: 0;
    left: 0;
    width: 100%;
    transform: scaleX(1);
    height: 0.0625rem;
    background: ${({ theme }) => theme.backgroundColor.orange};
    transition: 0.3s ease-in-out;
  }
`;

export const StyledCTA = styled.a`
  font-size: 0.625rem;
  letter-spacing: 0.1875rem;
  font-weight: 500;
  color: #fff;
  text-transform: uppercase;
  padding: 0.8rem 1.5rem;
  background: ${({ theme }) => theme.backgroundColor.orange};
  transition: 0.3s ease;
  position: relative;
  overflow: hidden;
  z-index: 1;

  & span {
    display: flex;
    align-items: center;
    gap: 1rem;
    position: relative;
    z-index: 2;
  }

  & > span {
    overflow: hidden;
  }

  & > span > span {
    overflow: hidden;
  }

  &:hover > span > span {
    animation: MoveUpInitial 0.2s forwards, MoveUpEnd 0.2s forwards 0.2s;
  }

  @keyframes MoveUpInitial {
    to {
      transform: translate3d(0, -105%, 0);
    }
  }

  @keyframes MoveUpEnd {
    from {
      transform: translate3d(0, 100%, 0);
    }
    to {
      transform: translate3d(0, 0, 0);
    }
  }

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: ${({ theme }) => theme.backgroundColor.darkGray};
    transition: transform 0.3s cubic-bezier(0.7, 0, 0.2, 1);
    transform-origin: 100% 50%;
    transform: scaleX(0);
    z-index: -1;
  }

  &:hover::before {
    transform: scaleX(1);
    transform-origin: 0% 50%;
  }

  @media all and (max-width: ${({ theme }) => theme.breakpoints.md}) {
    display: none;
  }
`;

export const Menu = styled.div`
  cursor: pointer;
  display: none;

  @media all and (max-width: ${({ theme }) => theme.breakpoints.md}) {
    display: block;
  }
`;

export const Line = styled.div`
  height: 0.1125rem;
  width: ${(props) => props.width || "2rem"};
  background: ${({ theme }) => theme.color.light};
  margin: 0.28125rem 0;
  transition: 0.3s ease;
  margin-left: ${(props) => props.ml || "0"};
`;
