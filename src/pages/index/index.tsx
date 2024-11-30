import { View, Swiper, SwiperItem, Image } from "@tarojs/components";
import { observer } from "mobx-react";
import Header from "src/components/header";

import styles from "./index.module.scss";

const IMG_LIST = [
  "https://file.moyublog.com/free_wallpapers_files/or1u0vej1pi.jpg",
  "https://img3.huamaocdn.com/upload/bizhi/images/1000w680h/2020/07/202106111334376577.jpg",
  "https://file.moyublog.com/free_wallpapers_files/4dkkznup3kj.jpg",
];

function Index(props) {
  return (
    <View className={styles.container}>
      <Header title="首页" />

      <Swiper
        className={styles.swipperWrapper}
        // indicatorColor="#999"
        // indicatorActiveColor="#333"
        indicatorDots={false}
        vertical={false}
        circular
        autoplay
      >
        {IMG_LIST.map((img, idx) => (
          <SwiperItem key={idx} className={styles.swipperItem}>
            <Image className={styles.img} src={img} />
          </SwiperItem>
        ))}
      </Swiper>
    </View>
  );
}

export default observer(Index);
