import styles from './index.less';
import { BasicLayout } from './layout/BasicLayout';
import React from 'react';
import { Inspector } from 'react-dev-inspector';

const InspectorWrapper =
  process.env.NODE_ENV === 'development' ? Inspector : React.Fragment;

export default function IndexPage() {
  return (
    <InspectorWrapper>
      <BasicLayout style={{ width: '100vw', height: '100vh' }}></BasicLayout>
    </InspectorWrapper>
  );
}
