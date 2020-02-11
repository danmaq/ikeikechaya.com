import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import Article from '~/components/atoms/Article';
import TextLink from '~/components/atoms/TextLink';
import ArticleWithImage from '~/components/molecules/ArticleWithImage';

const useStyles = makeStyles({ image: { height: 'auto', width: '96%' } });

const Page: React.FC = () => {
  const { image } = useStyles();
  return (
    <>
      <ArticleWithImage
        align="right"
        boxes={[{ height: '37%', width: '42%' }]}
        image="images/about/cont01.jpg"
      >
        <Article>
          魚は鮮度が命。萩池々茶屋は萩の漁師が経営していますので、水揚げされたばかりの新鮮な魚介類を、ベストのタイミングでお客さまへお出しすることができます。当店を経営しております
          <TextLink href="http://www.daigoryoeimaru.co.jp/">
            第五良栄丸
          </TextLink>
          は、松方弘樹さんが 325kg の大きなマグロを釣り上げた事でも有名な、
          <TextLink href="http://www.city.hagi.lg.jp/portal/bunrui/detail.html?lif_id=28050">
            萩クロマグロトーナメント
          </TextLink>
          の開催されている漁場で漁をしております。その漁場で獲れた新鮮な魚介類（当店では太平洋に負けない日本海マグロも扱っています）をふんだんに使い、洗練されたシェフが萩の味を創ります。
        </Article>
      </ArticleWithImage>
      <ArticleWithImage
        align="left"
        boxes={[{ height: '26%', width: '42%' }]}
        image="images/about/cont03.jpg"
      >
        <Article>
          窓からは昼夜で景色の違う明神池を眺望できます。明神池は国の天然記念物に指定されており、池ではありますが、鯛やエイ、スズキやフグ、ボラ等の海の魚達が泳いでいる神秘的な池です。近くには宮島の厳島神社を勧請した、
          <TextLink href="http://www.itukushimajinjya.com/">
            越ヶ浜厳島神社
          </TextLink>
          があり、参拝もできます。窓からの景色と自慢の料理を、是非一度お楽しみください。
        </Article>
      </ArticleWithImage>
      <ArticleWithImage
        align="left"
        boxes={[
          {
            children: (
              <img
                alt=""
                className={image}
                src="images/about/cont04_img.png"
                height={159}
                width={280}
              />
            ),
            height: '0%',
            width: '42%'
          }
        ]}
        image="images/about/cont04.png"
      >
        <Article>
          萩池々茶屋は夜も営業しています。ディナータイムにご来店頂く為にはご予約が必要となりますが、コースだけでなく、アラカルト（単品）でもお席をご予約頂く事ができ、居酒屋のようにお楽しみ頂く事が可能です。アラカルトのみをご希望される方は、当日のご予約でも受け付けております。魚介類が苦手な方はお肉のご用意もしておりますし、お子様にはお座敷をご用意し低価格でお料理をご提供致します。金沢、都市圏で修行し、洗練された腕を持つシェフが山口県萩市の食材だけを使用して、和食創作
          漁師料理コース、を提供します。また、他にも様々なアラカルト・ドリンクメニューをご用意しておりますので、
          <TextLink href="/menu">メニューページ</TextLink>
          をご覧の上、お気軽にご予約ください。お車でご来店されるお客様には無料駐車場、またノンアルコールビールをご用意しています。また、お酒を飲まれるお客様には代行のタクシーにご連絡も致しますので、お申し付けください。
        </Article>
      </ArticleWithImage>
    </>
  );
};
Page.displayName = 'Page';
export default Page;
