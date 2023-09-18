import { hydrate, render } from "react-dom";
import App from "./App";
import ResponsiveSection from "./Responsive";

const rootElement =
  document.getElementById("root");
if (rootElement!.hasChildNodes()) {
  hydrate(
    <ResponsiveSection>
      <App />
    </ResponsiveSection>,
    rootElement
  );
} else {
  render(
    <ResponsiveSection>
      <App />
    </ResponsiveSection>,
    rootElement
  );
}
