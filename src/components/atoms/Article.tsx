import type { DefaultComponentProps } from '@material-ui/core/OverridableComponent';
import { makeStyles } from '@material-ui/core/styles';
import type { TypographyTypeMap } from '@material-ui/core/Typography';
import Typography from '@material-ui/core/Typography';
import classNames from 'classnames';
import React from 'react';

export interface Props
  extends Omit<DefaultComponentProps<TypographyTypeMap>, 'className'> {
  className?: Parameters<typeof classNames>[number];
}

const useStyles = makeStyles({
  root: {
    letterSpacing: '0.05rem',
    lineHeight: '190%',
    paddingBottom: '1rem',
    textAlign: 'left',
  },
});

const Article: React.FC<Props> = ({ children, className, ...rest }) => {
  const { root } = useStyles();
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <Typography className={classNames(root, className)} {...rest}>
      {children}
    </Typography>
  );
};
Article.displayName = 'Article';

export default Article;
