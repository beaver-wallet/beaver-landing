import { PrimaryColor } from "./constants";
import { ReactNode } from "react";

export function FeatureHighlight(props: {
  icon: ReactNode;
  text: string;
}) {
  return (
    <div
      style={{
        borderColor: PrimaryColor,
        borderWidth: 4,
        borderStyle: "solid",
        borderRadius: 10,
        padding: 10,
        paddingBottom: 0,
        marginLeft: 16,
        marginRight: 16,
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: 10,
        }}
      >
        {props.icon}
      </div>
      <p style={{ fontSize: 20 }}>{props.text}</p>
    </div>
  );
}
