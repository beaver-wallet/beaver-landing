import { useContext } from "react";
import { FeatureHighlight } from "./FeatureHightlight";
import {
  GasStationIcon,
  LockIcon,
  LoopIcon,
  MoodHappyIcon,
} from "./icons";
import { OnMobileContext } from "./Responsive";

export function Highlights() {
  const onMobile = useContext(OnMobileContext);

  const highlight1 = (
    <FeatureHighlight
      icon={MoodHappyIcon}
      text="There is no seed phrases. Log in with Google or other social account."
    />
  );

  const highlight2 = (
    <FeatureHighlight
      icon={GasStationIcon}
      text="You can pay blockchain fee in any token such as USDT."
    />
  );

  const highlight3 = (
    <FeatureHighlight
      icon={LoopIcon}
      text="Use Beaver to pay for your subscriptions and send money periodically."
    />
  );

  const highlight4 = (
    <FeatureHighlight
      icon={LockIcon}
      text="It's secure. Your funds are in your full self custody."
    />
  );

  let highlights;
  if (onMobile) {
    highlights = (
      <div style={{ marginBottom: 40 }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: 40,
          }}
        >
          {highlight1}
          {highlight2}
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          {highlight3}
          {highlight4}
        </div>
      </div>
    );
  } else {
    highlights = (
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: 40,
        }}
      >
        {highlight1}
        {highlight2}
        {highlight3}
        {highlight4}
      </div>
    );
  }

  return highlights;
}
