import { WaitlistForm } from "./WaitlistForm";
import { PrimaryColor } from "./constants";

export function JoinWaitlist() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        marginBottom: 40,
      }}
    >
      <WaitlistForm />
      <div>
        <h1>Join the waitlist!</h1>
        <p
          style={{ fontSize: 20, maxWidth: 400 }}
        >
          We invite people from the waitlist to
          try out the wallet every week!
        </p>
      </div>
    </div>
  );
}
