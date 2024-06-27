import React from 'react';
import cls from './running-line.module.scss';

const RunningLine = () => {
  return (
    <div className={cls.root}>
      <div className={cls.line}>
        <span>Произвольный текст</span>
        <span>Произвольный текст</span>
        <span>Произвольный текст</span>
        <span>Произвольный текст</span>
        <span>Произвольный текст</span>
        <span>Произвольный текст</span>
        <span>Произвольный текст</span>
        <span>Произвольный текст</span>
        <span>Произвольный текст</span>
        <span>Произвольный текст</span>
        <span>Произвольный текст</span>
      </div>
      <div className={cls.line}>
        <span>Произвольный текст</span>
        <span>Произвольный текст</span>
        <span>Произвольный текст</span>
        <span>Произвольный текст</span>
        <span>Произвольный текст</span>
        <span>Произвольный текст</span>
        <span>Произвольный текст</span>
        <span>Произвольный текст</span>
        <span>Произвольный текст</span>
        <span>Произвольный текст</span>
        <span>Произвольный текст</span>
      </div>
    </div>
  );
};

export default RunningLine;
