import { PrimaryColor } from "./constants";

export function TopWaitlist() {
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
          Join waitlist
        </p>
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
