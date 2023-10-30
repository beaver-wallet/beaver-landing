import { useContext } from "react";
import { OnMobileContext } from "./Responsive";

export function Footer() {
  const onMobile = useContext(OnMobileContext);

  return (
    <footer
      style={{
        height: 250,
        textAlign: "right",
        paddingTop: 32,
        marginTop: 64,
      }}
    >
      <a
        href="https://twitter.com/paybeaver"
        style={{
          display: "block",
          fontSize: onMobile ? 16 : 20,
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
          fontSize: onMobile ? 16 : 20,
          color: "#acacac",
          marginBottom: 10,
        }}
      >
        Discord
      </a>
      <a
        href="https://github.com/pay-beaver"
        style={{
          display: "block",
          fontSize: onMobile ? 16 : 20,
          marginBottom: 10,
          color: "#acacac",
        }}
      >
        Github
      </a>
      <p
        style={{
          fontSize: onMobile ? 16 : 20,
          color: "#acacac",
          margin: 0,
        }}
      >
        contact@paybeaver.xyz
      </p>
    </footer>
  );
}
