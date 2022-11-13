import {FC} from "react";
import logo from '../../assets/logo.png'
import s from './Header.module.css'
import phone from '../../assets/phoneIcon.png'

export const Header: FC = () => {
  return (
    <div className={s.wrapper}>
      <div className={s.content}>
        <ul className={s.list}>
          <li>
            <a href="/">
              <img src={logo} alt="logo"/>
            </a></li>
          <li>
            <a className={s.phone} href="tel: +7 (495) 495-49-54">+7 (495) 495-49-54</a>
            <a className={s.phoneMobile} href="tel: +7 (495) 495-49-54"><img src={phone}
                                                                       alt={'phone'}
                                                                       className={s.icon}/></a>
          </li>
        </ul>
      </div>
    </div>
  );
};
