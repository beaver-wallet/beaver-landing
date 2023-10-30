import { FeatureDescriptions } from "./FeatureDescriptions";
import { Highlights } from "./Highlights";
import { JoinNewspaper } from "./JoinWaitlist";
import { CoreFrame } from "./CoreFrame";
import { useContext } from "react";
import { OnMobileContext } from "./Responsive";
import { MoodHappyIcon } from "./icons";

export function Landing() {
  const onMobile = useContext(OnMobileContext);

  return (
    <CoreFrame>
      <Highlights />
      <p
        style={{
          fontSize: onMobile ? 20 : 24,
          paddingLeft: 16,
        }}
      >
        🚀Start using Beaver today by following{" "}
        <a href="https://paybeaver.gitbook.io/untitled/setup-guide">
          our easy setup guide.
        </a>
      </p>
      <FeatureDescriptions />
      <p
        style={{
          fontSize: onMobile ? 20 : 24,
          paddingLeft: 16,
        }}
      >
        🚀Start using Beaver today by following{" "}
        <a href="https://paybeaver.gitbook.io/untitled/setup-guide">
          our easy setup guide.
        </a>
      </p>
    </CoreFrame>
  );
}
