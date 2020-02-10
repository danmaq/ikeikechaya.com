import { makeStyles } from '@material-ui/core';
import classNames from 'classnames';
import hash from 'object-hash';
import React from 'react';

type UseImageAttributes = Pick<
  React.ImgHTMLAttributes<HTMLImageElement>,
  'alt' | 'height' | 'src' | 'width'
>;

interface ImagesType {
  images?: UseImageAttributes[];
}

export type DOMProps = ImagesType &
  Pick<React.HTMLAttributes<HTMLElement>, 'className'>;

export interface Props extends ImagesType {
  className?: Parameters<typeof classNames>[number];
}

export const DOM: React.FC<DOMProps> = ({ children, className, images }) => (
  <figure className={className}>
    {children && <figcaption>{children}</figcaption>}
    {images?.map(imgProps => (
      <img
        key={hash(imgProps)}
        alt={imgProps.alt || ''}
        src={imgProps.src}
        width={imgProps.width}
        height={imgProps.height}
      />
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
