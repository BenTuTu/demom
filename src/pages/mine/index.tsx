import { PropsWithChildren } from "react";
import { View, Text } from "@tarojs/components";
import { observer } from "mobx-react";

import "./index.scss";
import { useStore } from "src/store";

function Mine(props: PropsWithChildren) {
  const {
    counterStore: { counter },
  } = useStore();
  return (
    <View className="mine">
      <Text>mine</Text>
    </View>
  );
}

export default observer(Mine);
