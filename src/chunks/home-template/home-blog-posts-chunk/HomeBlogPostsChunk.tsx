import MaxWidthContainer from "~/components/containers/max-width-container/MaxWidthContainer";
import BlogPostsList from "~/components/lists/blog-posts-list/BlogPostsList";
import PaginationNavigation from "~/components/navigations/pagination-navigation/PaginationNavigation";

export default function HomeBlogPostsChunk() {
  return (
    <section className="mb-20">
      <MaxWidthContainer>
        <div className="flex items-center justify-between">
          <h1 className="mb-8 max-w-xl text-3xl font-semibold leading-snug text-white sm:text-4xl sm:leading-snug">
            Latest blog posts
          </h1>
        </div>
        <BlogPostsList />
        <div className="mt-5 flex justify-end">
          <PaginationNavigation />
        </div>
      </MaxWidthContainer>
    </section>
  );
}
