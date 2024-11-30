import { useEffect } from "react";
import { useDidHide, useDidShow } from "@tarojs/taro";
import { Provider } from "mobx-react";

import counterStore from "./store/counter";

import "./app.scss";

const store = {
  counterStore,
};

function App(props) {
  // 可以使用所有的 React Hooks
  useEffect(() => {});

  // 对应 onShow
  useDidShow(() => {});

  // 对应 onHide
  useDidHide(() => {});

  // this.props.children 就是要渲染的页面
  return <Provider store={store}>{props.children}</Provider>;
}

export default App;
