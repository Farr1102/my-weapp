import { marked } from 'marked'
import hljs from "highlight.js";
import { useEffect, useState } from 'react';

const useMdToHtml = (mdURl: string) => {
  const [mdFile, setMdFile] = useState<any>();
  const getMd = async () => {
    return await fetch(mdURl).then((response) => response.text()).then((text) => {
      console.log(text)
      setMdFile(text)
    })
  }
  useEffect(() => {
    getMd();
    marked.setOptions({
      renderer: new marked.Renderer(),
      highlight: function (code) {
        return hljs.highlightAuto(code).value;
      },
      gfm: true, // 允许 Git Hub标准的markdown.
      pedantic: false, // 不纠正原始模型任何的不良行为和错误（默认为false）
      sanitize: false, // 对输出进行过滤（清理），将忽略任何已经输入的html代码（标签）
      // tables: true, // 允许支持表格语法（该选项要求 gfm 为true）
      breaks: false, // 允许回车换行（该选项要求 gfm 为true）
      smartLists: true, // 使用比原生markdown更时髦的列表
      smartypants: false, // 使用更为时髦的标点
    })
  }, [mdFile])

  return marked(mdFile)
}

export default useMdToHtml;