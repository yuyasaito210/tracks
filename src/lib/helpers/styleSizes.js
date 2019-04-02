import { Dimensions } from "react-native"

const width = Dimensions.get("window").width

function getDeviceSize() {
  if (width <= 320) return "small"
  if (width > 320 && width < 768) return "medium"
  if (width >= 768 && width < 1024) return "large"
  if (width >= 1024) return "x-large"
  return "small"
}
export function getSize(small, medium, large, xLarge) {
  switch (getDeviceSize()) {
    case "small":
      return small
    case "medium":
      return medium
    case "large":
      return large
    case "x-large":
      return xLarge
    default:
      return small
  }
}
