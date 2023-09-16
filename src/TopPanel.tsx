import { WaitlistForm } from "./WaitlistForm";

export function TopPanel() {
  return (
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
}
