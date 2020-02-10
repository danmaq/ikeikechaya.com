import {
  Grid,
  GridSize,
  Link,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  makeStyles
} from '@material-ui/core';
import classNames from 'classnames';
import partition from 'lodash.partition';
import hash from 'object-hash';
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
  items?: Item[];
}

export interface Props {
  className?: Parameters<typeof classNames>[number];
  cols?: number;
  items?: Item[];
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
      {splitted.map(item => (
        <Grid key={hash(item)} item xs={width}>
          {DOM({ iconClassName, items: item })}
        </Grid>
      ))}
    </Grid>
  );
};
LinkList.displayName = 'LinkList';

export default LinkList;
