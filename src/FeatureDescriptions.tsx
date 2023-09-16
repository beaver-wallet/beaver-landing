import { ContentBlock } from "./ContentBlock";

export function FeatureDescriptions() {
  return (
    <div>
      <ContentBlock
        imageName="seed-phrase-crossed"
        imagePosition="left"
        text="No more seed phrases! Beaver Wallet allows
        you to log in with a social account like
        google while keeping funds at your
        full self custody!"
      />
      <ContentBlock
        imageName="gas-station-with-tokens"
        imagePosition="right"
        text="With Beaver Wallet you don't need ETH to pay the blockchain fee (also known as gas fee). You can use any token like USDT or USDC."
      />
      <ContentBlock
        imageName="usd-repeat"
        imagePosition="left"
        text="Seamlessly pay for you favorite subscriptions with Beaver Wallet and send periodic payments to your family & friends."
      />
      <ContentBlock
        imageName="transparent-wallet"
        imagePosition="right"
        text="Beaver is fully transparent. It is built on the industry standard for transparent and secure wallets called ERC-4337. Beaver's source code is fully open source."
      />
      <ContentBlock
        imageName="lock-image"
        imagePosition="left"
        text="Beaver is fully self-custodial. This means that nobody, including us, has access to or control over your funds."
      />
    </div>
  );
}
