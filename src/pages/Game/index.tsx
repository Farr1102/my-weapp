import { AtButton } from 'taro-ui'
import { View } from '@tarojs/components'
import Taro from '@tarojs/taro';


const Game = () => {

  const navigateTo2048 = () => {
    Taro.navigateTo({
      url: '/pages/Game/Game2048/index'
    });
  };

  return (
    <>
      Game: 
      <View>2048：<AtButton type="primary" onClick={navigateTo2048}>进入</AtButton></View>
    </>
  )
}

export default Game;