export default defineAppConfig({
  pages: ["pages/index/index", "pages/mine/index"],

  window: {
    backgroundTextStyle: "light",
    navigationBarBackgroundColor: "#fff",
    navigationBarTitleText: "WeChat",
    navigationBarTextStyle: "black",
  },
  tabBar: {
    backgroundColor: '#fff',
    color: '#000',
    selectedColor: '#254',

    list: [
      {
        pagePath: 'pages/index/index',
        text: '首页',
        // iconPath: '/assets/images/tab3.png',
        // selectedIconPath: '/assets/images/home-active.png',
      },
      {
        pagePath: 'pages/mine/index',
        text: '个人中心',
        // iconPath: '/assets/images/tab1.png',
        // selectedIconPath: '/assets/images/tab4-4.png',
      },
    ],
  },
});
