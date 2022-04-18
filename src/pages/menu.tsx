import React from 'react';
import FigureWithImages from '~/components/molecules/FigureWithImages';

const Page: React.FC = () => (
  <>
    <FigureWithImages
      images={[
        {
          alt: 'チラシ',
          src: '/images/menu/chirashi.png',
          width: 620,
          height: 874,
        },
        {
          alt: 'ランチメニュー 1',
          src: '/images/menu/lunch1.png',
          width: 1239,
          height: 1754,
        },
        {
          alt: 'ランチメニュー 2',
          src: '/images/menu/lunch2.jpg',
          width: 1652,
          height: 2338,
        },
        {
          alt: 'ランチメニュー 3',
          src: '/images/menu/lunch3.jpg',
          width: 1652,
          height: 2338,
        },
        {
          alt: 'ランチメニュー 4',
          src: '/images/menu/lunch4.jpg',
          width: 1652,
          height: 2338,
        },
        {
          alt: 'ランチメニュー 5',
          src: '/images/menu/lunch5.jpg',
          width: 1652,
          height: 2338,
        },
        {
          alt: 'ランチメニュー 6',
          src: '/images/menu/lunch6.jpg',
          width: 1652,
          height: 2338,
        },
        {
          alt: 'ドリンクメニュー',
          src: '/images/menu/drink.png',
          width: 1125,
          height: 1625,
        },
        {
          alt: '単品メニュー 1',
          src: '/images/menu/tanpin0.png',
          width: 1239,
          height: 1754,
        },
        {
          alt: '単品メニュー 2',
          src: '/images/menu/tanpin1.png',
          width: 1239,
          height: 1754,
        },
        {
          alt: '単品メニュー 3',
          src: '/images/menu/tanpin2.png',
          width: 1239,
          height: 1754,
        },
        {
          alt: 'コースメニュー',
          src: '/images/menu/course1.png',
          width: 1239,
          height: 1754,
        },
        {
          alt: 'GOOD TIMES HAGI 萩池々茶屋!!',
          src: '/images/menu/last.png',
          width: 1239,
          height: 1754,
        },
      ]}
    />
  </>
);
Page.displayName = 'Page';

export default Page;
