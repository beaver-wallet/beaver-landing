import { useContext } from "react";
import { OnMobileContext } from "./Responsive";

export function ContentBlock(props: {
  imageName: string;
  text: string;
  imagePosition: "left" | "right";
}) {
  const onMobile = useContext(OnMobileContext);

  const imgBlock = (
    <img
      alt="Block"
      src={`/${props.imageName}.png`}
      width={onMobile ? 200 : 300}
      style={{
        display: "inline",
      }}
    />
  );

  const textBlock = (
    <p
      style={{
        padding: 20,
        fontSize: onMobile ? 16 : 20,
      }}
    >
      {props.text}
    </p>
  );

  const mobileLayout = (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      {imgBlock}
      {textBlock}
    </div>
  );

  const desktopLayout = (
    <div
      style={{
        display: "flex",
        alignItems: "center",
      }}
    >
      {props.imagePosition === "left"
        ? [imgBlock, textBlock]
        : [textBlock, imgBlock]}
    </div>
  );

  return onMobile ? mobileLayout : desktopLayout;
}
