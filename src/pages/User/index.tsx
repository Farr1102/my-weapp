import Taro from '@tarojs/taro';
import { View, Text } from '@tarojs/components';
import { AtAvatar, AtList, AtListItem } from 'taro-ui';
import CSSMoudle from './index.module.less';

const User = () => {

  return (
    <View>
      <View className={CSSMoudle.userInfo}>
        <AtAvatar size="large" circle text="User" />
        <Text className={CSSMoudle.userName}>Farr</Text>
      </View>
      <View>
        <AtList>
          <AtListItem title="个人信息" arrow="right" />
          <AtListItem title="关于" arrow="right" />
        </AtList>
      </View>
    </View>
  )
};

export default User;