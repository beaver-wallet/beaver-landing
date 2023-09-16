import { FeatureDescriptions } from "./FeatureDescriptions";
import { Highlights } from "./Highlights";
import { JoinWaitlist } from "./JoinWaitlist";
import { TopPanel } from "./TopPanel";
import "./index.css";

function App() {
  return (
    <div>
      <header>
        <h1 style={{ textAlign: "center" }}>
          Beaver Wallet
        </h1>
      </header>
      <div>
        <TopPanel />
        <h1>
          You should choose Beaver Wallet because:
        </h1>
        <Highlights />
      </div>
      <FeatureDescriptions />
      <JoinWaitlist />
      <footer
        style={{
          height: 250,
          textAlign: "right",
          paddingTop: 32,
        }}
      >
        <a
          href="https://github.com/beaver-wallet"
          style={{
            display: "block",
            fontSize: 20,
            marginBottom: 10,
            color: "#acacac",
          }}
        >
          Github
        </a>
        <a
          href="https://twitter.com/walletbeaver"
          style={{
            display: "block",
            fontSize: 20,
            color: "#acacac",
            marginBottom: 10,
          }}
        >
          Twitter
        </a>
        <a
          href="https://discord.gg/WCKcRkXdSW"
          style={{
            display: "block",
            fontSize: 20,
            color: "#acacac",
          }}
        >
          Discord
        </a>
        <p
          style={{
            fontSize: 20,
            color: "#acacac",
          }}
        >
          contact@ethbeaver.xyz
        </p>
      </footer>
    </div>
  );
}

export default App;
