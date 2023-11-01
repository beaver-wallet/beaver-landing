import { useContext } from "react";
import { OnMobileContext } from "./Responsive";
import { Footer } from "./Footer";

export function CoreFrame({ children }: any) {
  const onMobile = useContext(OnMobileContext);

  const betaWarning = (
    <div
      style={{
        backgroundColor: "#FF0000",
        color: "white",
        padding: 8,
        fontSize: 20,
      }}
    >
      Beaver is currently in Beta. You can help to
      get it to production. Info:{" "}
      <a
        href="https://docs.paybeaver.xyz/untitled/funding-request"
        style={{ color: "white" }}
      >
        here.
      </a>
    </div>
  );

  const mobileHeader = (
    <div>
      {betaWarning}
      <h1
        style={{
          textAlign: "center",
        }}
      >
        Beaver Crypto Subscriptions
      </h1>
      <a
        href="https://docs.paybeaver.xyz/"
        style={{
          display: "block",
          fontSize: 18,
          textAlign: "right",
        }}
      >
        Documentation
      </a>
    </div>
  );

  const desktopHeader = (
    <div>
      {betaWarning}
      <header
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div />
        <h1
          style={{
            textAlign: "center",
          }}
        >
          Beaver Crypto Subscriptions
        </h1>
        <a
          href="https://docs.paybeaver.xyz/"
          style={{
            fontSize: 18,
            marginLeft: 48,
          }}
        >
          Documentation
        </a>
      </header>
    </div>
  );

  return (
    <div
      style={{
        paddingLeft: onMobile ? 4 : 200,
        paddingRight: onMobile ? 4 : 200,
      }}
    >
      {onMobile ? mobileHeader : desktopHeader}
      {children}
      <Footer />
    </div>
  );
}
