import { useEffect } from "react";
import { useDidHide, useDidShow, getSystemInfo } from "@tarojs/taro";
import { MobXProviderContext } from "mobx-react";

import { store } from "./store";

import "./app.scss";

function App(props) {
  // 可以使用所有的 React Hooks
  useEffect(() => {
    getSystemInfo({
      success: (res) => {
        store.counterStore.setStatusBarHeight(res.statusBarHeight || 0);
      },
    });
  }, []);

  // 对应 onShow
  useDidShow(() => {});

  // 对应 onHide
  useDidHide(() => {});

  return (
    <MobXProviderContext.Provider value={store}>
      {props.children}
    </MobXProviderContext.Provider>
  );
}

export default App;
