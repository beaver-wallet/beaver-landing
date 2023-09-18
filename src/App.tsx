import { useContext } from "react";
import { FeatureDescriptions } from "./FeatureDescriptions";
import { Highlights } from "./Highlights";
import { JoinWaitlist } from "./JoinWaitlist";
import { TopPanel } from "./TopPanel";
import "./index.css";
import { OnMobileContext } from "./Responsive";
import { Footer } from "./Footer";

function App() {
  const onMobile = useContext(OnMobileContext);

  return (
    <div
      style={{
        paddingLeft: onMobile ? 4 : 200,
        paddingRight: onMobile ? 4 : 200,
      }}
    >
      <header>
        <h1 style={{ textAlign: "center" }}>
          Beaver Wallet
        </h1>
      </header>
      <div>
        <TopPanel />
        <p
          style={{
            fontWeight: "bolder",
            fontSize: onMobile ? 16 : 32,
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
    </div>
  );
}

export default App;
