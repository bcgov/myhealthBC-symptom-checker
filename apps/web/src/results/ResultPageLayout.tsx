import React, { PropsWithChildren, ReactNode } from 'react';
import { Button } from '../components/Button';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

type ResultPageLayoutTypes = PropsWithChildren<ReactNode> & {
  image: string;
  imageBg: string;
  imageAlt: string;
  title: string;
  titleColor: string;
};

export const ResultPageLayout = (props: ResultPageLayoutTypes) => {
  const { image, imageBg, imageAlt, title, titleColor, children } = props;

  const { t } = useTranslation();
  const navigate = useNavigate();
  const restart = () => {
    navigate('/');
  };

  return (
    <div className='flex flex-col justify-center items-center m-auto'>
      <div className={`my-5 border rounded-full ${imageBg}`}>
        <img src={image} height={110} width={110} alt={imageAlt} />
      </div>
      <h1 className={`text-3xl font-bold ${titleColor}`}>{title}</h1>
      <hr className='w-full border-2 border-bcYellowPrimary my-7' />
      <div className='w-full'>{children}</div>
    </div>
  );
};
