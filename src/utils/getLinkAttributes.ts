import React from 'react';

const attrs = new Map<
  boolean,
  Pick<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'rel' | 'target'>
>([
  [false, {}],
  [true, { rel: 'noopener noreferrer', target: '_blank' }]
]);

export default (href: string) => {
  const absolute = /^https?:\/\//.test(href);
  const { rel, target } = attrs.get(absolute) ?? {};
  return { absolute, rel, target };
};
