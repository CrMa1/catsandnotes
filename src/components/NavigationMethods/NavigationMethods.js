import { navigationRef } from "../../../App";

export const navigationPush = (screenName) => {
  if (navigationRef.isReady()) {
    navigationRef.navigate(screenName)
  }
}