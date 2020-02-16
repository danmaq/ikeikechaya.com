import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import classNames from 'classnames';

export interface DOMProps {
  className?: string;
  onClick?: React.ReactEventHandler<HTMLButtonElement>;
  onHover?: React.ReactEventHandler<HTMLButtonElement>;
  onLeave?: React.ReactEventHandler<HTMLButtonElement>;
  src?: string;
}

export interface Props {
  action?: string | (() => void);
  className?: Parameters<typeof classNames>[number];
  dark?: boolean;
}

export const DOM: React.FC<DOMProps> = ({
  className,
  onClick,
  onHover,
  onLeave,
  src
}) => (
  <IconButton
    className={className}
    onClick={onClick}
    onFocus={onHover}
    onBlur={onLeave}
    onMouseOver={onHover}
    onMouseOut={onLeave}
    size="small"
    type="button"
  >
    <img alt="梅貝" src={src} width={60} height={60} />
  </IconButton>
);
DOM.displayName = 'ConchDOM';

const useStyles = makeStyles({
  image: {
    '& img': {
      width: '80%',
      height: 'auto',
      transitionProperty: 'rotate',
      transitionDuration: '0.5s'
    }
  },
  rotate: {
    '& img': {
      transform: 'rotate(-15deg)',
      transitionProperty: 'rotate',
      transitionDuration: '0.5s'
    }
  }
});

const useOnClick = (action: Props['action']) =>
  React.useCallback(() => {
    if (typeof action === 'string') {
      const newWindow = window.open();
      if (newWindow) {
        newWindow.location.href = action;
      }
    } else if (action) {
      action();
    }
  }, [action]);

const Conch: React.FC<Props> = ({ action, className, dark }) => {
  const { image, rotate } = useStyles();
  const [hovered, setHovered] = React.useState(false);
  return (
    <DOM
      className={classNames(image, { [rotate]: hovered }, className)}
      onClick={useOnClick(action)}
      onHover={React.useCallback(() => setHovered(true), [])}
      onLeave={React.useCallback(() => setHovered(false), [])}
      src={`/images/header/conch${dark ? '_dark' : ''}.png`}
    />
  );
};
Conch.displayName = 'Conch';

export default Conch;
