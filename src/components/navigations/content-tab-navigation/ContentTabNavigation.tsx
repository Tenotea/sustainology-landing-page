import type { ContentTabNavigationProps } from "./ContentTabNavigation.types";

export default function ContentTabNavigation(props: ContentTabNavigationProps) {
  return (
    <div>
      {props.options.map((option) => (
        <button
          key={option.id}
          className={`rounded-xl py-2 px-3 text-sm text-app-primary-green ${
            props.value === option.id ? "bg-[#394454]" : "bg-transparent"
          }`}
          onClick={() => props.onTabChange(option.id)}
        >
          {option.name}
        </button>
      ))}
    </div>
  );
}
