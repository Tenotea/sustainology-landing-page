export default function PaginationNavigation() {
  return (
    <div className="rounded border-2 border-[#45566F] bg-[#394454] font-medium text-[#B7BEC7]">
      <button className="rounded-l-sm border-r-2 border-[#45566F] py-2 px-3 text-xs">
        Previous
      </button>
      <button className="border-r-2 border-[#45566F] py-2 px-3 text-xs">
        1
      </button>
      <button className="border-r-2 border-[#45566F] bg-[#45566F] py-2 px-3 text-xs text-app-primary-green">
        2
      </button>
      <button className="border-r-2 border-[#45566F] py-2 px-3 text-xs">
        3
      </button>
      <button className="rounded-r-sm py-2 px-3 text-xs">Next</button>
    </div>
  );
}
