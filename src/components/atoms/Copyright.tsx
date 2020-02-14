import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import classNames from 'classnames';
import React from 'react';

export interface DOMProps {
  className?: string;
}

export interface Props {
  className?: Parameters<typeof classNames>[number];
}

export const DOM: React.FC<DOMProps> = ({ className }) => (
  <Typography className={className} role="contentinfo">
    Copyright © 2011 daigoryoeimaru Co.,Ltd. All rights reserved.
    <wbr />
    Original designed by Mattsun.
  </Typography>
);
DOM.displayName = 'CopyrightDOM';

const useStyles = makeStyles({ root: { fontSize: '100%' } });

const Copyright: React.FC<Props> = ({ className }) => {
  const { root } = useStyles();
  return <DOM className={classNames(root, className)} />;
};
Copyright.displayName = 'Copyright';

export default Copyright;
