import React, { FC } from 'react';
import {
  FlatList,
  ListRenderItemInfo,
  StyleProp,
  useWindowDimensions,
  ViewStyle,
} from 'react-native';
import WalletsListItem from './WalletsListItem';
import { Wallet } from '../types';

interface Props {
  style?: StyleProp<ViewStyle>;
  wallets: Wallet[];
}

const WalletsList: FC<Props> = (props) => {
  const { style, wallets } = props;
  const { width } = useWindowDimensions();

  const renderItem = (info: ListRenderItemInfo<Wallet>) => {
    const { item } = info;
    return <WalletsListItem style={{ width }} wallet={item} />;
  };

  return (
    <FlatList
      style={style}
      pagingEnabled
      horizontal
      showsHorizontalScrollIndicator={false}
      renderItem={renderItem}
      data={wallets}
      keyExtractor={(item) => item.id.toString()}
    />
  );
};

export default WalletsList;
