import { Text } from '@tarojs/components';
import Taro from '@tarojs/taro';
import CSSMoudle from './index.module.less';

const Home = () => {
  const blogPosts = [
    { id: 1, title: '博客文章1', content: '这是博客文章1的内容。', url: 'src/FileJson/jsTypeTest.md'},
    { id: 2, title: '博客文章2', content: '这是博客文章2的内容。' },
    { id: 3, title: '博客文章3', content: '这是博客文章3的内容。' }
    // 添加更多的博客文章数据
  ]
  const navigateToBlog = (post) => {
    Taro.navigateTo({
      url: `/pages/Blog/index?id=${post.id}&url=${post.url}`,
    });
  };

  const navigateToPublish = () => {
    Taro.navigateTo({
      url: '/pages/publish/publish',
      
    });
  };
  return (
    <div className={CSSMoudle["home-page"]}>
      <div className={CSSMoudle["blog-list"]}>
        {blogPosts.map(post => (
          <div key={post.id} className={CSSMoudle["blog-item"]} onClick={() => navigateToBlog(post)}>
            <Text className={CSSMoudle["blog-title"]}>{post.title}</Text>
            <Text className={CSSMoudle["blog-content"]}>{post.content}</Text>
          </div>
        ))}
      </div>
      <div className={CSSMoudle["navigation"]}>
        <Text className={CSSMoudle["publish-link"]} onClick={navigateToPublish}>发布博客</Text>
        {/* 添加更多的导航链接 */}
      </div>
    </div>
  )
};

export default Home;