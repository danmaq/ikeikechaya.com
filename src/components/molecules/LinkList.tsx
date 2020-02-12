import Grid, { GridSize } from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { makeStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import partition from 'lodash.partition';
import React from 'react';

export interface Item {
  caption?: string;
  detail?: string;
  href?: string;
  icon?: string;
  height?: number;
  width?: number;
}

export interface DOMProps {
  iconClassName?: string;
  items?: readonly Item[];
}

export interface Props {
  className?: Parameters<typeof classNames>[number];
  cols?: number;
  items?: readonly Item[];
}

export const DOM: React.FC<DOMProps> = ({ iconClassName, items }) => (
  <List>
    {items?.map(item => (
      <ListItem
        component={Link}
        key={item.caption}
        button
        href={item.href}
        rel="noopener noreferrer"
        target="_blank"
      >
        {!!item.icon && (
          <ListItemIcon className={iconClassName}>
            <img
              alt=""
              src={item.icon}
              width={item.width}
              height={item.height}
            />
          </ListItemIcon>
        )}
        <ListItemText primary={item.caption} secondary={item.detail} />
      </ListItem>
    ))}
  </List>
);
DOM.displayName = 'LinkListDOM';

const useStyles = makeStyles({
  icon: {
    width: '5rem',
    height: '5rem',
    '& > img': { width: '100%', height: 'auto' }
  }
});

const getListAndWidth = ({
  cols = 2,
  items
}: Pick<Props, 'cols' | 'items'>) => {
  const splitted = partition(
    items?.map<[Item, number]>((item, index) => [item, index]) ?? [],
    ([, i]) => i % cols === 0
  ).map(item => item.map(([v]) => v));
  const width = Math.max(Math.floor(12 / cols), 1) as GridSize;
  return { splitted, width };
};

const LinkList: React.FC<Props> = ({ className, ...rest }) => {
  const { icon: iconClassName } = useStyles();
  const { splitted, width } = getListAndWidth(rest);
  return (
    <Grid className={classNames(className)} container>
      {splitted.map((item, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <Grid key={index} item xs={width}>
          {DOM({ iconClassName, items: item })}
        </Grid>
      ))}
    </Grid>
  );
};
LinkList.displayName = 'LinkList';

export default LinkList;
