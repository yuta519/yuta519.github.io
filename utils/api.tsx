import axios from 'axios'
import { remark } from 'remark';
import html from 'remark-html';

interface Article {
  title: string,
  filename: string
  url: string,
}

export const getBlogDetail = (filename: string | string[], setState: (md: string) => void) => {
  axios.get("https://md-host-bucket.s3.us-east-2.amazonaws.com/" + filename + ".md")
    .then((response) => {
      return remark().use(html).process(response.data)
    }).then((result) => {
      setState(result.toString())
    })
}

export const getBlogList = (setState: (articles: Article[]) => void) => {
  let data = { title: "Why I use Notion!", filename: "Why_I_use_Notion!.md", url: "Why_I_use_Notion!" }
  let datas = [data]
  // axios.get(process.env.NEXT_PUBLIC_API_SERVER_IP + "/blogs")
  //   .then((response) => { setState(response.data) })
  setState(datas)
}
