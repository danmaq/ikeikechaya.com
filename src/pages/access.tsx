import Link from '@material-ui/core/Link';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import React from 'react';
import Article from '~/components/atoms/Article';
import TextLink from '~/components/atoms/TextLink';
import ArticleWithHeading from '~/components/molecules/ArticleWithHeading';
import ArticleWithImage from '~/components/molecules/ArticleWithImage';
import FigureWithIframe from '~/components/molecules/FigureWithIframe';
import FigureWithImages from '~/components/molecules/FigureWithImages';

const Page: React.FC = () => {
  const googleMaps = (
    <TextLink
      color="textPrimary"
      href="https://www.google.co.jp/maps/place/萩池々茶屋/@34.448272,131.409517,17z/data=!3m1!4b1!4m2!3m1!1s0x3544ae5b10853a01:0xe2abeb44d2beb2a4"
    >
      萩池々茶屋 Google マップ
    </TextLink>
  );
  return (
    <>
      <ArticleWithImage image="/images/access/cont01.png">
        <Article>
          萩池々茶屋の
          <strong>夜のお食事は、ご予約の必要</strong>
          がございます。（ランチタイムのご予約は必要ありません。）社内行事の飲み会や法事、お誕生日会等、ご都合・ご予算に合わせたお料理をご提供いたします。
          また、お料理の好みや行事の雰囲気等、ご要望がありましたらお気軽にお申し付けください。
          下記電話番号よりご予約頂けます。お気軽にお電話ください。
        </Article>
      </ArticleWithImage>
      <ArticleWithHeading heading="コースのご予約">
        <Article>
          3200円〜の熟練シェフの和食創作料理コースをご用意しております。
        </Article>
        <Article>
          コース料理は、萩池々茶屋の真髄を味わう特別な漁師料理創作コースとなります。
          前菜のソース、下地作成からメニュー全ての細部に渡って、選りすぐりの食材を使います。
          料理品のバリエーションも増えますので、アラカルトよりもシェフの味をご堪能いただけます。
        </Article>
      </ArticleWithHeading>
      <ArticleWithHeading heading="コース以外のご予約">
        <Article>
          夜のご予約はコースだけでなくアラカルト（単品）のみのご予約でも受け付けております。
          おつまみ一品から居酒屋のようにお楽しみください。
          アラカルトのみのご予約の場合は、当日のお電話でもご予約頂けます。
          お気軽にご予約ください。
        </Article>
      </ArticleWithHeading>
      <ArticleWithHeading heading="ランチのご予約">
        <Article>
          当店ではランチのご予約も受付ておりますが、当店は観光地に立地するため、観光シーズン中はランチ予約はできない場合がございます。
          予め、ご容赦くださいます様宜しくお願いいたします。
        </Article>
      </ArticleWithHeading>
      <ArticleWithImage image="/images/access/cont02.png">
        <Article>
          <Link href="tel:0838-21-7111">
            0838-21-7111 (スマフォでクリック)
            ご予約はこちらの電話番号にお電話ください！
          </Link>
        </Article>
      </ArticleWithImage>
      <ArticleWithHeading heading="営業時間">
        <List dense disablePadding>
          <ListItem>
            <ListItemText primary="11:00 〜 18:00" />
          </ListItem>
          <ListItem>
            <ListItemText primary="18:00 〜 21:00" secondary="（要予約）" />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="火曜定休日"
              secondary="※火曜日が祝日の場合は水曜日がお休みとなります。"
            />
          </ListItem>
        </List>
      </ArticleWithHeading>
      <ArticleWithHeading heading="座席・駐車場">
        <List dense disablePadding>
          <ListItem>
            <ListItemText
              primary="総座席数 (座敷・テーブル席): 37 席"
              secondary="座敷: 20 席"
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="無料駐車場: 6 台"
              secondary="うち大型車対応: 2 台"
            />
            <ListItemText primary="※無料駐車場のマップが最下部にあります。" />
          </ListItem>
          <ListItem>
            <ListItemText primary="有料駐車場: 5 台" />
          </ListItem>
        </List>
      </ArticleWithHeading>
      <ArticleWithHeading heading="所在地">
        <List dense disablePadding>
          <ListItem>
            <ListItemText
              primary="山口県萩市大字椿東6450の1 明神池入り口"
              secondary="道に迷われたり、お店の場所が分からない場合は、お気軽にお電話ください。"
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary={googleMaps}
              secondary="※無料駐車場のマップが最下部にあります。"
            />
          </ListItem>
        </List>
        <FigureWithImages
          images={[
            {
              alt: 'マップ',
              src: '/images/access/map.jpg',
              width: 600,
              height: 539
            }
          ]}
        />
        <FigureWithImages
          images={[
            {
              alt: '駐車場',
              src: '/images/access/park.jpg',
              width: 3840,
              height: 2160
            },
            {
              alt: '道順 1',
              src: '/images/access/route1.png',
              width: 720,
              height: 540
            },
            {
              alt: '道順 2',
              src: '/images/access/route2.png',
              width: 720,
              height: 540
            }
          ]}
        >
          萩池々茶屋では、越ケ浜漁港裏に大型バス駐車場、無料駐車場をご用意しておます。
        </FigureWithImages>
      </ArticleWithHeading>
      <FigureWithIframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d822.541711925724!2d131.4097443!3d34.4479123!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3544ae5b19ae5327%3A0xacca2ac72881a715!2z44CSNzU4LTAwMTEg5bGx5Y-j55yM6JCp5biC5qS_5p2x77yW77yU77yV77yV!5e0!3m2!1sja!2sjp!4v1432636905841"
        title="Google Maps"
        width={600}
        height={350}
      />
    </>
  );
};
Page.displayName = 'Page';

export default Page;
