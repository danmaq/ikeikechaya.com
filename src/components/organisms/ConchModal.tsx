import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import type { DrawerProps } from '@material-ui/core/Drawer';
import Drawer from '@material-ui/core/Drawer';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import Article from '~/components/atoms/Article';
import FigureWithImages from '~/components/molecules/FigureWithImages';

export interface DOMProps extends Pick<DrawerProps, 'className' | 'open'> {
  contentClassName?: string;
  imageClassName?: string;
  onClose?: () => void;
}

export type Props = Pick<DOMProps, 'onClose' | 'open'>;

export const DOM: React.FC<DOMProps> = ({
  className,
  contentClassName,
  imageClassName,
  onClose,
  open,
}) => (
  <Drawer
    anchor="top"
    aria-labelledby="transition-modal-title"
    aria-describedby="transition-modal-description"
    className={className}
    onClose={onClose}
    open={open}
  >
    <Container className={contentClassName} maxWidth="md">
      <FigureWithImages
        images={[
          {
            alt: '2010 年度 水揚高 日本一!!',
            src: '/images/modal/heading.png',
            width: 402,
            height: 45,
          },
        ]}
      />
      <Article>
        萩池々茶屋を経営しております“第五良栄丸”は、2010年度梅貝水揚高日本一の漁船網元です。
        梅貝のおいしさをより多くの方々に知っていただくために、日々様々な取り組みや企画に奮闘しております。
        萩池々茶屋でも梅貝を使った料理をご用意しておりますので、是非一度ご来店ください。
      </Article>
      <Grid container justify="center">
        <Grid item md={6}>
          <img
            alt="萩の梅貝"
            className={imageClassName}
            src="/images/modal/poster.jpg"
            width={400}
            height={281}
          />
        </Grid>
        <Grid item md={6}>
          <img
            alt="萩の梅貝"
            className={imageClassName}
            src="/images/modal/hukuro.jpg"
            width={400}
            height={264}
          />
        </Grid>
      </Grid>
      <Button
        variant="contained"
        color="primary"
        onClick={onClose}
        size="large"
      >
        閉じる
      </Button>
    </Container>
  </Drawer>
);
DOM.displayName = 'ConchModalDOM';

const useStyles = makeStyles({
  container: { textAlign: 'center', paddingBottom: '3rem' },
  image: { width: '100%', height: 'auto' },
  root: { '& > .MuiDrawer-paper': { backgroundColor: 'rgb(245, 246, 241)' } },
});

const ConchModal: React.FC<Props> = ({ onClose, open }) => {
  const { container, image, root } = useStyles();
  return (
    <DOM
      className={root}
      contentClassName={container}
      imageClassName={image}
      onClose={onClose}
      open={open}
    />
  );
};
ConchModal.displayName = 'ConchModal';

export default ConchModal;
