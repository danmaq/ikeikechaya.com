import React from 'react';
import { Head } from 'react-static';
import useStaging from './useStaging';

export interface Props {
  author?: string;
  description?: string;
  keywords?: React.ReactText[];
  title?: React.ReactText;
}

export interface DomProps extends Props {
  staging?: boolean;
}

export const DOM: React.FC<DomProps> = ({
  author,
  description,
  keywords,
  staging,
  title
}) => (
  <Head>
    <meta httpEquiv="x-ua-compatible" content="ie=Edge" />
    <title>{title}</title>
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1, maximum-scale=5, shrink-to-fit=no, viewport-fit=cover"
    />
    {author && <meta name="author" content={author} />}
    {description && <meta name="description" content={description} />}
    {keywords?.length && <meta name="keywords" content={keywords.join(',')} />}
    {staging && <meta name="robots" content="noindex,nofollow,noarchive" />}
  </Head>
);
DOM.displayName = 'InnerHead';

const Container: React.FC = () => (
  <DOM
    author="Shuhei Nomura (@danmaq)"
    description="萩池々茶屋は、萩越ヶ浜の漁師 第五良栄丸が経営するレストランです。 魚介類を産地から都心部に直送する前に、漁船より直接水揚げするため、鮮度の良い海産物が召し上がれます。 萩池々茶屋は、明神池が眺望できるお店です。萩の地域活性化に貢献することを企業理念としております。"
    keywords={[
      '萩池々茶屋',
      '池々茶屋',
      '幻の魚',
      '幻の貝',
      '萩の梅貝',
      '萩いけいけ',
      '萩のバイ貝',
      '萩',
      'ランチ',
      'ディナー',
      '食事',
      '梅貝',
      '明神池',
      '越ケ浜',
      '笠山'
    ]}
    staging={useStaging()}
    title="萩池々茶屋"
  />
);
Container.displayName = 'Head';

export default Container;
