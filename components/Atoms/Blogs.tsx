import React from 'react';
import Link from 'next/link'
import 'emoji-mart/css/emoji-mart.css';

interface Article {
  title: string,
  url: string,
}

interface Props {
  readonly title: string,
  readonly articles: Article[],
}

const Blogs: React.FC<Props> = ({
  title,
  articles,
}: Props) => (
  <div className="blogs">
    <Link href="/blogs">
      <h3 className="font-mono text-base font-bold pt-10 pb-3">{title}</h3>
    </Link>
    <hr className="my-2" />
    <ul className="list-disc">
      {articles.map((article: Article) =>
        <li key={article.title} className="list-none text-sm py-2">
          <Link href={article.url}>
            {article.title}
          </Link>
        </li>
      )}
    </ul>
  </div>
)

export default Blogs