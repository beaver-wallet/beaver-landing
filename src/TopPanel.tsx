import { useContext } from "react";
import { WaitlistForm } from "./WaitlistForm";
import { OnMobileContext } from "./Responsive";

export function TopPanel() {
  const onMobile = useContext(OnMobileContext);

  const mobileLayout = (
    <div style={{ marginBottom: 40 }}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img
          src="/beaver-logo-colorified.png"
          alt="Beaver Logo"
          width="80px"
        />
        <div>
          <p
            style={{
              fontSize: onMobile ? 16 : 20,
              marginBottom: 12,
              paddingLeft: 8,
            }}
          >
            Join the waitlist
          </p>
          <WaitlistForm />
        </div>
      </div>
    </div>
  );

  const desktopLayout = (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        marginBottom: 100,
      }}
    >
      <div>
        <p
          style={{
            fontSize: 20,
            marginBottom: 12,
            paddingLeft: 8,
          }}
        >
          Join the waitlist
        </p>
        <WaitlistForm />
      </div>
      <img
        src="/beaver-logo-colorified.png"
        alt="Beaver Logo"
        width="100px"
        style={{ marginLeft: 32 }}
      />
    </div>
  );

  return onMobile ? mobileLayout : desktopLayout;
}
