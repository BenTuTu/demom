import counterStore from "./counter";

export const store = {
  counterStore,
};

export const useStore = () => useContext(MobXProviderContext) as typeof store;
import { MobXProviderContext } from 'mobx-react'
import { useContext } from 'react'
