import React, {FC} from 'react';
import s from './Describe.module.css'

type ContentType = {
  src: string,
  title: string,
  subtitle: string
}

type DescribeType = {
  topContent: ContentType,
  bottomContent: ContentType
}

export const Describe: FC<DescribeType> = ({topContent, bottomContent}) => {
  return (
    <>
      <h1 className={s.title}>ut aliquip ex ea commodo consequat</h1>
      <div className={s.wrapper}>
        <div className={s.contentTop}>
          <img className={s.imageTop} src={topContent.src}
               alt="about"/>
          <div className={s.description}>
            <h2 className={s.descriptionTitle}>{topContent.title}</h2>
            <p className={s.about}>{topContent.subtitle}</p>
          </div>
        </div>
        <div className={s.contentBottom}>
          <div className={s.description}>
            <h2 className={s.descriptionTitle}>{bottomContent.title}</h2>
            <p className={s.about}>{bottomContent.subtitle}</p>
          </div>
          <img className={s.imageBottom} src={bottomContent.src}
               alt="about"/>
        </div>
      </div>
    </>
  );
};
