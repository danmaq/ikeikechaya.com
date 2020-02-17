import Hidden from '@material-ui/core/Hidden';
import React from 'react';
import Article from '~/components/atoms/Article';
import TextLink from '~/components/atoms/TextLink';
import ArticleWithImage from '~/components/molecules/ArticleWithImage';
import LinkList, { Item } from '~/components/molecules/LinkList';
import Slideshow from '~/components/molecules/Slideshow';

const srcs = Array.from(
  { length: 9 },
  (__, i) => `/images/home/slideshow${`${i}`.padStart(2, '0')}.jpg`
);

const source: Item[] = [
  {
    caption: '萩・椿まつり',
    detail:
      '当店は萩・椿まつりを応援しています。店舗に椿マークを愛用しています。',
    href: 'http://www.hagishi.com/search/detail.php?d=900047',
    icon: '/images/home/link_tsubaki.png',
    width: 81,
    height: 81
  },
  {
    caption: '明神池提携ホテル',
    detail: '当店は萩観光ホテルと提携しています。',
    href: 'http://www.hagikan.com/',
    icon: '/images/home/link_hotel.jpg',
    width: 200,
    height: 159
  }
];

const Page: React.FC = () => (
  <>
    <Slideshow srcs={srcs} width={680} height={250} />
    <ArticleWithImage
      align="right"
      boxes={[
        { height: '16%', width: '43%' },
        { height: '17%', width: '36%' }
      ]}
      image="/images/home/copy_back.jpg"
    >
      <Article>
        地元漁師から直接買い付けた物や、萩港に水揚げされたばかりの新鮮な魚介類を使用し、洗練された料理人が、和食・洋食・各種会席をご用意しています。
        ランチタイム、ディナータイム、日替わりのデザートをご用意したカフェタイムで、それぞれの違いもお楽しみ頂けます。
        是非一度、新鮮な魚介類とシェフの料理を味わって頂ければ幸いです。
        お気軽にご予約・お問い合わせください。
        <TextLink href="/access/">ご予約はこちらから</TextLink>
        。
        <wbr />
        また、当店を経営しております“第五良栄丸”は、山口県萩市越ヶ浜明神池にある2010年度梅貝水揚高日本一の漁船網元です。
        東京築地、金沢、名古屋、北陸富山、新潟、秋田、大阪、広島、下関、福岡などの卸市場と取引をしております。
        確かな品質・味をお約束いたします。
      </Article>
    </ArticleWithImage>
    <Hidden only="xs">
      <LinkList cols={2} items={source} />
    </Hidden>
    <Hidden smUp>
      <LinkList cols={1} items={source} />
    </Hidden>
  </>
);
Page.displayName = 'Page';

export default Page;
