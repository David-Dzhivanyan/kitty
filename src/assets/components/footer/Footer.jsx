import React from 'react';
import cls from './footer.module.scss';
import { Button } from 'react-bootstrap';
const Footer = () => {
  return (
    <div className={cls.root}>
      <Button>Отправить</Button>
    </div>
  );
};

export default Footer;
