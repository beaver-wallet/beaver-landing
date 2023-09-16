import { FeatureHighlight } from "./FeatureHightlight";
import {
  GasStationIcon,
  LockIcon,
  LoopIcon,
  MoodHappyIcon,
} from "./icons";

export function Highlights() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        marginBottom: 40,
      }}
    >
      <FeatureHighlight
        icon={<MoodHappyIcon />}
        text="No seed phrases. Log in with Google or other social account."
      />
      <FeatureHighlight
        icon={<GasStationIcon />}
        text="You can pay blockchain fee in any token such as USDT."
      />
      <FeatureHighlight
        icon={<LoopIcon />}
        text="Use Beaver to pay for your subscriptions and send money periodically."
      />
      <FeatureHighlight
        icon={<LockIcon />}
        text="It's secure. Your funds are in your full self custody."
      />
    </div>
  );
}
