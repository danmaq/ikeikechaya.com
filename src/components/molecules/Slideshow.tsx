import { makeStyles, Theme } from '@material-ui/core';
import classNames from 'classnames';
import React from 'react';

export interface DOMProps {
  className?: string;
}

interface LengthProps {
  length: number;
}

export interface Props {
  className?: Parameters<typeof classNames>[number];
  srcs?: string[];
  width: number;
  height: number;
}

interface StylesProps extends LengthProps {
  heightRatio: number;
  index: number;
}

export const DOM: React.FC<DOMProps> = ({ className, children }) => (
  <figure className={className}>{children}</figure>
);
DOM.displayName = 'SlideshowDOM';

const useStyles = makeStyles<Theme, StylesProps>({
  image: {
    opacity: '1 !important',
    transitionProperty: 'opacity',
    transitionDuration: '4s'
  },
  imageFadeOut: {
    opacity: '0.5 !important',
    transitionProperty: 'opacity',
    transitionDuration: '4s'
  },
  root: ({ heightRatio }) => ({
    marginLeft: 0,
    marginRight: 0,
    position: 'relative',
    width: '100%',
    height: 0,
    paddingBottom: `${heightRatio * 100}%`,
    '& > img': {
      opacity: 0,
      position: 'absolute',
      width: '100%',
      height: '100%',
      left: 0,
      top: 0
    }
  })
});

const useLoopIndex = (length: number) => {
  const [index, setIndex] = React.useState(0);
  const [first, setFirst] = React.useState(true);
  React.useEffect(() => {
    const interval = setInterval(() => {
      if (first) {
        setFirst(false);
      } else {
        setIndex(i => (i + 1) % length);
      }
    }, 5000);
    return () => clearInterval(interval);
  }, [length, first]);
  return { first, index };
};

const Slideshow: React.FC<Props> = ({ className, srcs, width, height }) => {
  const concreted = srcs?.length ? srcs : [''];
  const { index } = useLoopIndex(concreted.length);
  const { image, imageFadeOut, root } = useStyles({
    heightRatio: height / width,
    index,
    length: concreted.length ?? 1
  });
  return (
    <DOM className={classNames(root, className)}>
      {concreted.map((src, i) => (
        <img
          key={src}
          alt=""
          className={classNames({
            [image]: i === index,
            [imageFadeOut]: i === index - 1
          })}
          src={src}
          width={width}
          height={height}
        />
      ))}
    </DOM>
  );
};
Slideshow.displayName = 'Slideshow';

export default Slideshow;
