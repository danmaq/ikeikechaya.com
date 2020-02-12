import Box from '@material-ui/core/Box';
import { makeStyles, Theme } from '@material-ui/core/styles';
import classNames from 'classnames';
import hash from 'object-hash';
import React from 'react';

export interface DOMProps {
  boxesClassName?: string;
  boxStyles?: readonly React.PropsWithChildren<React.CSSProperties>[];
  className?: string;
}

interface StylesProps {
  align?: 'left' | 'right';
  image: string;
}

export interface BoxItemType {
  width: number | string;
  height: number | string;
}

export interface Props extends StylesProps {
  boxes?: readonly React.PropsWithChildren<BoxItemType>[];
  className?: Parameters<typeof classNames>[number];
}

export const DOM: React.FC<DOMProps> = ({
  boxesClassName,
  boxStyles,
  className,
  children
}) => (
  <section className={className}>
    {boxStyles?.map(({ children: boxChildren, ...style }) => (
      <Box className={boxesClassName} key={hash(style)} style={style}>
        {boxChildren}
      </Box>
    ))}
    {children}
  </section>
);
DOM.displayName = 'ArticleWithImageDOM';

const useStyles = makeStyles<Theme, StylesProps>({
  placeholder: ({ align }) => ({ clear: 'both', float: align }),
  root: ({ image }) => ({
    backgroundImage: `url('${image}')`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: '100% auto',
    overflow: 'auto',
    paddingTop: '7%',
    paddingBottom: '2rem'
  })
});

const ArticleWithImage: React.FC<Props> = ({
  align,
  boxes,
  children,
  className,
  image
}) => {
  const { placeholder, root } = useStyles({ align, image });
  const boxStyles = boxes?.map<React.PropsWithChildren<React.CSSProperties>>(
    ({ children: boxChildren, height, width }) => ({
      children: boxChildren,
      paddingTop: height,
      width
    })
  );
  return (
    <DOM
      boxesClassName={placeholder}
      boxStyles={boxStyles}
      className={classNames(root, className)}
    >
      {children}
    </DOM>
  );
};
ArticleWithImage.displayName = 'ArticleWithImage';

export default ArticleWithImage;
