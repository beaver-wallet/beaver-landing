import { PrimaryColor } from "./constants";

export function JoinWaitlist() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
      }}
    >
      <div
        style={{
          backgroundColor: "white",
          height: 50,
          borderRadius: 100,
        }}
      >
        <input
          type="text"
          placeholder="Email"
          style={{
            width: 200,
            borderWidth: 0,
            borderRadius: 100,
            marginLeft: 10,
            fontSize: 12,
          }}
        />
        <button
          style={{
            width: 80,
            height: 50,
            backgroundColor: PrimaryColor,
            borderWidth: 0,
            borderTopRightRadius: 100,
            borderBottomRightRadius: 100,
          }}
        >
          Join
        </button>
      </div>
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
