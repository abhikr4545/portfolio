"use client";

import Link from "next/link";
import { BackgroundGradient } from "./ui/background-gradient";

const PostCard = ({
  title,
  description,
  date,
  tags,
  link
}: {
  title: string,
  date: string,
  description: string,
  tags: string[],
  link: string
}) => {
  return (
    <div>
      <BackgroundGradient className="rounded-[22px] h-[200px] sm:h-[250px] max-w-sm p-2 pb-5 sm:pb-0 sm:p-8 bg-white dark:bg-zinc-900">
        <Link href={link} target="_blank">
          <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
            {title}
          </p>
        </Link>
        <p className="text-sm text-neutral-600 dark:text-neutral-400">
          {description}
        </p>
        <button className="rounded-full pl-4 pr-1 py-1 text-white flex items-center space-x-1 bg-black mt-4 text-xs font-bold dark:bg-zinc-800">
          <span>{date}</span>
          {tags.map((tag, index) => (
            <span key={index} className="bg-zinc-700 rounded-full text-[0.6rem] px-2 py-0 text-white">
              {tag}
            </span>
          ))}
        </button>
      </BackgroundGradient>
    </div>
  )
}

export default PostCard;