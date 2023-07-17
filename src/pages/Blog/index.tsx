import { useRouter } from "@tarojs/taro";

const Blog = (props) => {
  const router = useRouter();
  const { params } = router
  console.log(params)
  return (
    <>Blog -》 {params.id}</>
  )
};

export default Blog;