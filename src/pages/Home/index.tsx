import { View, Text } from '@tarojs/components';
import Taro from '@tarojs/taro';
import CSSMoudle from './index.module.less';

const Home = () => {
  const blogPosts = [
    { id: 1, title: '博客文章1', content: '这是博客文章1的内容。' },
    { id: 2, title: '博客文章2', content: '这是博客文章2的内容。' },
    { id: 3, title: '博客文章3', content: '这是博客文章3的内容。' }
    // 添加更多的博客文章数据
  ]
  const navigateToBlog = (postId) => {
    Taro.navigateTo({
      url: `/pages/blog/blog?id=${postId}`
    });
  };

  const navigateToPublish = () => {
    Taro.navigateTo({
      url: '/pages/publish/publish'
    });
  };
  return  (
    <View className={CSSMoudle["home-page"]}>
      <View className={CSSMoudle["blog-list"]}>
        {blogPosts.map(post => (
          <View key={post.id} className={CSSMoudle["blog-item"]} onClick={() => navigateToBlog(post.id)}>
            <Text className={CSSMoudle["blog-title"]}>{post.title}</Text>
            <Text className={CSSMoudle["blog-content"]}>{post.content}</Text>
          </View>
        ))}
      </View>
      <View className={CSSMoudle["navigation"]}>
        <Text className={CSSMoudle["publish-link"]} onClick={navigateToPublish}>发布博客</Text>
        {/* 添加更多的导航链接 */}
      </View>
    </View>
  )
};

export default Home;