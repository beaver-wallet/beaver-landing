import { useContext } from "react";
import { WaitlistForm } from "./WaitlistForm";
import { OnMobileContext } from "./Responsive";

export function JoinWaitlist() {
  const onMobile = useContext(OnMobileContext);

  const mobileLayout = (
    <div
      style={{
        marginTop: 40,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginBottom: 16,
        }}
      >
        <h1 style={{ margin: 0 }}>
          Join the waitlist!
        </h1>
        <p style={{ fontSize: 16 }}>
          We invite people from the waitlist to
          try out the wallet every week!
        </p>
      </div>
      <WaitlistForm />
    </div>
  );

  const desktopLayout = (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        marginTop: 80,
        marginBottom: 60,
      }}
    >
      <WaitlistForm />
      <div>
        <h1>Join the waitlist!</h1>
        <p
          style={{ fontSize: 20, maxWidth: 200 }}
        >
          We invite people from the waitlist to
          try out the wallet every week!
        </p>
      </div>
    </div>
  );

  return onMobile ? mobileLayout : desktopLayout;
}
