import { View, Text } from '@tarojs/components';
import { observer } from 'mobx-react'
import { useStore } from 'src/store';

import st from './index.module.scss';

function Header(props: { title: string; }) {
  const {counterStore: { statusBarHeight }} = useStore();

  return (
    <View className={st.wrapper} style={{ paddingTop: statusBarHeight }}>
      <Text className={st.text}>{props.title || ''}</Text>
    </View>
  )
}

export default observer(Header);
