import { useContext } from "react";
import { OnMobileContext } from "./Responsive";
import { Footer } from "./Footer";

export function CoreFrame({ children }: any) {
  const onMobile = useContext(OnMobileContext);

  const mobileHeader = (
    <div>
      <h1
        style={{
          textAlign: "center",
        }}
      >
        Beaver Wallet
      </h1>
      <div>
        <a
          href="/"
          style={{
            display: "block",
            color: "white",
            fontSize: 18,
            textAlign: "right",
          }}
        >
          Home
        </a>
        <a
          href="/roadmap"
          style={{
            display: "block",
            color: "white",
            fontSize: 18,
            textAlign: "right",
            marginTop: 12,
          }}
        >
          Roadmap
        </a>
      </div>
    </div>
  );

  const desktopHeader = (
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
        Beaver Wallet
      </h1>
      <div>
        <a
          href="/"
          style={{
            color: "white",
            fontSize: 18,
          }}
        >
          Home
        </a>
        <a
          href="/roadmap"
          style={{
            color: "white",
            fontSize: 18,
            marginLeft: 48,
          }}
        >
          Roadmap
        </a>
      </div>
    </header>
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
