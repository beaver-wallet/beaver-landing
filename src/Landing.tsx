import { FeatureDescriptions } from "./FeatureDescriptions";
import { Highlights } from "./Highlights";
import { CoreFrame } from "./CoreFrame";
import { useContext } from "react";
import { OnMobileContext } from "./Responsive";

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
        🚀Start using Beaver today by checking out{" "}
        <a href="https://docs.paybeaver.xyz/">
          our documentation.
        </a>
      </p>
      <FeatureDescriptions />
      <p
        style={{
          fontSize: onMobile ? 20 : 24,
          paddingLeft: 16,
        }}
      >
        🚀Start using Beaver today by checking out{" "}
        <a href="https://docs.paybeaver.xyz/">
          our documentation.
        </a>
      </p>
    </CoreFrame>
  );
}
