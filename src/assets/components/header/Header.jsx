import React from 'react';
import { Container, Navbar, NavLink } from 'react-bootstrap';
import cls from './header.module.scss';

const Header = () => {
  return (
    <div className={cls.root}>
      <Container>
        <Navbar>
          <NavLink>Какая-то ссылка</NavLink>
          <NavLink>Какая-то ссылка</NavLink>
          <NavLink>Какая-то ссылка</NavLink>
          <NavLink>Какая-то ссылка</NavLink>
        </Navbar>
      </Container>
    </div>
  );
};

export default Header;
