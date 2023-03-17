import { Icon } from "@iconify/react";
import Image from "next/image";
import useBlogPostsList from "./useBlogPostsList";

export default function BlogPostsList() {
  const { blogPosts } = useBlogPostsList();
  return (
    <div className="grid gap-5 sm:grid-cols-2 min-[1100px]:grid-cols-3">
      {blogPosts.map((post) => (
        <div
          key={post.id}
          className="bg-gradient-button p-[1.5px] shadow-sm shadow-[#37F2AD80]"
        >
          <div>
            <div className="relative h-[200px] w-full sm:h-[250px] md:h-[300px]">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover object-center"
              />
            </div>
            <div className="bg-app-background-green py-5 px-5">
              <div className="flex items-center gap-3">
                <Image
                  src={post.author.avatar}
                  alt={post.author.name}
                  className={
                    "h-[30px] w-[30px] rounded-full object-cover object-center"
                  }
                  width={40}
                  height={40}
                />
                <p className="text-sm text-app-primary-text">
                  {" "}
                  {post.author.name}{" "}
                </p>
              </div>
              <div className="mt-5 flex items-start justify-between gap-3 text-app-primary-text">
                <h6 className="text-xl font-semibold md:text-2xl">
                  {post.title}
                </h6>
                <Icon
                  icon={"material-symbols:arrow-outward-rounded"}
                  width={32}
                  className="flex-shrink-0"
                />
              </div>
              <div className="mt-3 flex items-center gap-3">
                <hr className="w-[40px] border-app-primary-text" />
                <span className="text-xs text-app-primary-text">
                  {post.category}
                </span>
              </div>
              <div className="mt-8 flex items-center gap-4 text-app-primary-text">
                <p className="flex items-center gap-1.5 text-xs">
                  <Icon icon={"ic:outline-remove-red-eye"} width={16} />
                  {post.views}
                </p>
                <p className="flex items-center gap-1.5 text-xs">
                  <Icon icon={"mdi:clock-time-five-outline"} width={16} />
                  {post.timeToRead}
                </p>
                <p className="flex items-center gap-1.5 text-xs">
                  <Icon
                    icon={"material-symbols:calendar-today-outline"}
                    width={16}
                  />
                  {post.publishedAt}
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
