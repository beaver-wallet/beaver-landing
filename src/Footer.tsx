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
      }}
    >
      <a
        href="https://twitter.com/beaver_wallet"
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
        href="https://github.com/beaver-wallet"
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
        contact@ethbeaver.xyz
      </p>
    </footer>
  );
}
