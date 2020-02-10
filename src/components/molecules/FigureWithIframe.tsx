import { makeStyles, Theme } from '@material-ui/core';
import classNames from 'classnames';
import React from 'react';

export type DOMProps = Pick<React.HTMLAttributes<HTMLElement>, 'className'> &
  UseIframeAttributes;

export interface Props extends UseIframeAttributes {
  className?: Parameters<typeof classNames>[number];
}

interface StylesProps {
  heightRatio: number;
}

type TagAttr = React.IframeHTMLAttributes<HTMLIFrameElement>;

interface UseIframeAttributes extends Pick<TagAttr, 'src' | 'title'> {
  height: number;
  width: number;
}

export const DOM: React.FC<DOMProps> = ({
  className,
  height,
  src,
  title,
  width
}) => (
  <figure className={className}>
    <iframe
      frameBorder={0}
      src={src}
      title={title}
      width={width}
      height={height}
    />
  </figure>
);
DOM.displayName = 'FigureWithIframeDOM';

const useStyles = makeStyles<Theme, StylesProps>({
  root: ({ heightRatio }) => ({
    marginLeft: 0,
    marginRight: 0,
    position: 'relative',
    width: '100%',
    height: 0,
    paddingBottom: `${heightRatio * 100}%`,
    '& > iframe': {
      position: 'absolute',
      width: '100%',
      height: '100%',
      left: 0,
      top: 0
    }
  })
});

const FigureWithIframe: React.FC<Props> = ({
  className,
  height,
  src,
  title,
  width
}) => {
  const { root } = useStyles({ heightRatio: height / width });
  return (
    <DOM
      className={classNames(root, className)}
      src={src}
      title={title}
      height={height}
      width={width}
    />
  );
};
FigureWithIframe.displayName = 'FigureWithIframe';

export default FigureWithIframe;
