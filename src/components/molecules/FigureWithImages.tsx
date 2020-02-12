import { makeStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import React from 'react';

type UseImageAttributes = Pick<
  React.ImgHTMLAttributes<HTMLImageElement>,
  'alt' | 'height' | 'src' | 'width'
>;

interface ImagesType {
  images?: readonly UseImageAttributes[];
}

export type DOMProps = ImagesType &
  Pick<React.HTMLAttributes<HTMLElement>, 'className'>;

export interface Props extends ImagesType {
  className?: Parameters<typeof classNames>[number];
}

export const DOM: React.FC<DOMProps> = ({ children, className, images }) => (
  <figure className={className}>
    {children && <figcaption>{children}</figcaption>}
    {images?.map(({ alt = '', src, width, height }) => (
      <img key={src} alt={alt} src={src} width={width} height={height} />
    ))}
  </figure>
);
DOM.displayName = 'FigureWithImagesDOM';

const useStyles = makeStyles({
  root: {
    marginLeft: 0,
    marginRight: 0,
    '& > img': { height: 'auto', width: '100%' }
  }
});

const FigureWithImages: React.FC<Props> = ({ children, className, images }) => (
  <DOM className={classNames(useStyles().root, className)} images={images}>
    {children}
  </DOM>
);
FigureWithImages.displayName = 'FigureWithImages';

export default FigureWithImages;
