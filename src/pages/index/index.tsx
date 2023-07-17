import { useState } from 'react'
import { View, Text } from '@tarojs/components'

import { AtTabBar } from 'taro-ui'

import './index.less'
import Home from '@/pages/Home';
import User from '../User';

const  Index = () => {
  const [currentTabBar, setCurrentTabBar] = useState(1);
  const handleTabBarClick = (v) => {
    setCurrentTabBar(v)
  }
  return (
    <View className='index'>
      
      {currentTabBar === 0 && <Home />}
      {currentTabBar === 1 && <User />}
      <AtTabBar
        tabList={[
          { title: '首页', iconType: 'home' },
          { title: '我的', iconType: 'user' }
        ]}
        onClick={handleTabBarClick}
        current={currentTabBar}
      />
    </View>
  )
}

export default Index

