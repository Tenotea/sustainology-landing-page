export default function useBaseButton() {
  const outlinedClassList = [
    "border",
    "border-app-primary-green",
    "text-app-primary-green",
    "rounded-full",
  ];
  const gradientClassList = [
    "rounded-md",
    "text-app-primary-text",
    "bg-app-background-green",
    "bg-gradient-button",
  ];
  return {
    outlinedClassList: outlinedClassList.join(" "),
    gradientClassList: gradientClassList.join(" "),
  };
}
