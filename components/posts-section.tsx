import { LINKS } from "@/constants";
import Link from "next/link";
import PostCard from "./post-card";
import { Button } from "./ui/moving-border";
import { POSTS } from "@/data/posts";

const PostsSection = () => {
  return (
    <section className="mt-10 border-t py-6 px-2 sm:px-0">
      <div className="flex justify-between items-center">
      <Button
        borderRadius="1.75rem"
        className="bg-white text-lg dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800"
      >
        Recent Posts
      </Button>
        <Link target="_blank" href={`${LINKS["BLOG"].href}`}>
          <p className="text-[16px] text-[#00A8CC]">View All</p>
        </Link>
      </div>
      <div className="flex flex-col sm:flex-row gap-4 justify-between items-center mt-10">
        {
          POSTS.map((post) => (
            <PostCard 
              key={post.id}
              title={post.title}
              description={post.description}
              tags={post.tags}
              date={post.date}
              link={post.link}
            />
          ))
        }
      </div>
    </section>
  )
}

export default PostsSection;