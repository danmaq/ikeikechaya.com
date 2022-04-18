import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import classNames from 'classnames';
import React from 'react';

export interface DOMProps {
  className?: string;
  heading?: React.ReactNode;
  headingClassName?: string;
  id?: string;
}

export interface Props extends Pick<DOMProps, 'heading' | 'id'> {
  className?: Parameters<typeof classNames>[number];
}

export const DOM: React.FC<DOMProps> = ({
  className,
  children,
  heading,
  headingClassName,
  id,
}) => (
  <section className={className} id={id}>
    {!!heading && (
      <Typography className={headingClassName} component="h2" variant="h6">
        {heading}
      </Typography>
    )}
    {children}
  </section>
);

const useStyles = makeStyles({
  heading: {
    color: 'rgb(232, 112, 159)',
    fontFamily: 'serif',
    fontWeight: 900,
  },
  root: { paddingBottom: '2rem' },
});

const ArticleWithHeading: React.FC<Props> = ({
  children,
  className,
  heading,
  id,
}) => {
  const { heading: headingClassName, root } = useStyles();
  return (
    <DOM
      className={classNames(root, className)}
      heading={heading}
      headingClassName={headingClassName}
      id={id}
    >
      {children}
    </DOM>
  );
};
ArticleWithHeading.displayName = 'ArticleWithHeading';

export default ArticleWithHeading;
