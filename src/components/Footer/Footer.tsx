import React, {FC} from 'react';
import s from './Footer.module.css'

export const Footer: FC = () => {
  return (
    <div className={s.wrapper}>
      <p className={s.title}> © TEST, 1022–2022</p>
    </div>
  );
};

