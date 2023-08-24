import { useRouter } from "@tarojs/taro";
import { useEffect, useRef } from "react";
import useMdToHtml from "../hooks/useMdToHtml";

const Blog = (props) => {
  const router = useRouter();
  const { params } = router
  const mdToHtml = useMdToHtml(params.url as string);
  const ref = useRef(null)
  useEffect(() => {
    console.log(mdToHtml)
  }, [])
  return (
    <div ref={ref}>Blog -》 {params.id}</div>
  )
};

export default Blog;