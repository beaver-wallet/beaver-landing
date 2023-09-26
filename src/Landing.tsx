import { useContext } from "react";
import { FeatureDescriptions } from "./FeatureDescriptions";
import { Highlights } from "./Highlights";
import { JoinWaitlist } from "./JoinWaitlist";
import { TopPanel } from "./TopPanel";
import { OnMobileContext } from "./Responsive";
import { Footer } from "./Footer";
import { CoreFrame } from "./CoreFrame";

export function Landing() {
  const onMobile = useContext(OnMobileContext);

  return (
    <CoreFrame>
      <div>
        <TopPanel />
        <p
          style={{
            fontWeight: "bolder",
            fontSize: onMobile ? 18 : 32,
            marginLeft: 32,
          }}
        >
          You should choose Beaver Wallet because:
        </p>
        <Highlights />
      </div>
      <FeatureDescriptions />
      <JoinWaitlist />
      <Footer />
    </CoreFrame>
  );
}
