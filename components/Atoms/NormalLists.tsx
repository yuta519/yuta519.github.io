import React from "react";
import { Emoji } from "emoji-mart";
import "emoji-mart/css/emoji-mart.css";

interface Line {
  emoji: string;
  description: string;
}

interface Props {
  readonly title: string;
  readonly lines: Line[];
}

const NormalLists: React.FC<Props> = ({ title, lines }: Props) => (
  <div className="p-4">
    <p className="font-mono font-bold sm:text-base md:text-xl">{title}</p>
    <hr className="my-2" />
    <ul key={title} className="list-disc">
      {lines.map((line: Line) => (
        <li key={line.description} className="list-none">
          <div className="inline-flex py-1">
            <Emoji emoji={line.emoji} size={20} />
            <div className="md:text-base sm:text-xs">
              &nbsp;{line.description}
            </div>
          </div>
        </li>
      ))}
    </ul>
  </div>
);

export default NormalLists;
