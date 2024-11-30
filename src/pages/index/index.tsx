import { Component, PropsWithChildren } from "react";
import { View, Button, Text } from "@tarojs/components";
import { observer, inject } from "mobx-react";
import { AtTabBar } from "taro-ui";
import Taro from "@tarojs/taro";

import "./index.scss";

type PageStateProps = {
  store: {
    counterStore: {
      counter: number;
      curTab: number;
      increment: Function;
      decrement: Function;
      incrementAsync: Function;
      changeTab(tab: number): void;
    };
  };
};

@inject("store")
@observer
class Index extends Component<PropsWithChildren<PageStateProps>> {
  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  increment = () => {
    const { counterStore } = this.props.store;
    counterStore.increment();
  };

  decrement = () => {
    const { counterStore } = this.props.store;
    counterStore.decrement();
  };

  incrementAsync = () => {
    const { counterStore } = this.props.store;
    counterStore.incrementAsync();
  };

  onTabClick = (index: number) => {
    this.props.store.counterStore.changeTab(index);
    // Taro.navigateTo({
    //   url: 'mine?a=333'
    // })
  };

  render() {
    const {
      counterStore: { counter, curTab },
    } = this.props.store;
    return (
      <View className="index">
        <Button onClick={this.increment}>+</Button>
        <Button onClick={this.decrement}>-</Button>
        <Button onClick={this.incrementAsync}>Add Async</Button>
        <Text>{counter}</Text>
        <AtTabBar
          fixed
          tabList={[
            { title: "首页", iconType: "filter" },
            { title: "我的", iconType: "user" },
          ]}
          onClick={this.onTabClick}
          current={curTab}
        />
      </View>
    );
  }
}

export default Index;
