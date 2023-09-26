import { useContext } from "react";
import { CoreFrame } from "./CoreFrame";
import { RoadmapStep } from "./RoadmapStep";
import { PrimaryColor } from "./constants";
import { OnMobileContext } from "./Responsive";

export function Roadmap() {
  const onMobile = useContext(OnMobileContext);

  return (
    <CoreFrame>
      <p
        style={{
          color: PrimaryColor,
          padding: 16,
          fontSize: onMobile ? 18 : 32,
          fontWeight: "bolder",
        }}
      >
        Beaver roadmap
      </p>
      <RoadmapStep
        title="Connect to dapps"
        description="Allow to connect to dapps with Beaver through WalletConnect"
        date="27.09.2023"
      />
      <RoadmapStep
        title="Gas in ERC20 tokens"
        description="Allow to pay gas (blockchain fee) in any ERC20 token such as USDT, USDC, DAI, EURS, etc."
        date="29.09.2023"
      />
      <RoadmapStep
        title="New testnet chains"
        description="Support ethereum sepolia, polygon mumbai, optimism goerli, arbitrum goerli"
        date="01.09.2023"
      />
      <RoadmapStep
        title="Allow to combine security options"
        description="For example set up Google + Twitter + Github and then require at least of these 3 to log in"
        date="03.10.2023"
      />
      <RoadmapStep
        title="Solve pop-ups block in Safari"
        description="Currently safari blocks the login pop-up. Need to solve this."
        date="04.10.2023"
      />
      <RoadmapStep
        title="Interface for subscriptions"
        description="Define a common interface for wallets and apps to talk to each other about subscriptions through WalletConnect."
        date="05.10.2023"
      />
      <RoadmapStep
        title="Subscriptions pop-up"
        description="Make the pop up for apps to prompt users for a crypto subscription"
        date="07.10.2023"
        lastStep
      />
      <div style={{ height: "100px" }} />
    </CoreFrame>
  );
}
