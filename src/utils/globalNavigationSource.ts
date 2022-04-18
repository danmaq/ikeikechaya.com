import React from 'react';

export type NavigationType = [string, React.ReactNode];

const commonData: readonly NavigationType[] = [
  ['/', 'ホーム'],
  ['/about/', 'お店について'],
  ['https://note.com/daigoryoeimaru/n/n095038a01bc0?magazine_key=m3f803a3f69c4', 'メニュー'],
  ['/access/', 'ご予約・アクセス']
];

export const headerData: readonly NavigationType[] = commonData;

export const headerData2: readonly NavigationType[] = [
  ['https://note.com/daigoryoeimaru/m/m5b942908d95b', '水産加工場'],
  ['https://note.com/daigoryoeimaru/n/n11849a192b6d', '船員宿']
];

export const footerData: readonly NavigationType[] = commonData;
