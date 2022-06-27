import Image from "next/image";
import Link from "next/link";

interface Props {
  readonly img: string;
  readonly cardName: string;
  readonly cardLink: string;
  readonly cardDescription: string;
  readonly tags: string[];
}

const Card: React.FC<Props> = ({
  img,
  cardName,
  cardLink,
  cardDescription,
  tags,
}: Props) => {
  return (
    <Link key={cardName} href={cardLink}>
      <div className="flex-1 m-2 max-w-xs rounded overflow-hidden shadow-lg cursor-pointer">
        <Image
          src={img}
          alt="Picture of the author"
          layout="responsive"
          width={500}
          height={280}
          priority
        />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{cardName}</div>
          <p className="text-gray-700 text-base">{cardDescription}</p>
        </div>
        <div className="px-6 pt-4 pb-2">
          {tags.map((tag) => {
            return (
              <span
                key={tag}
                className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
              >
                #{tag}
              </span>
            );
          })}
        </div>
      </div>
    </Link>
  );
};

export default Card;
