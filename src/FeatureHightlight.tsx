import { OnMobileContext } from "./Responsive";
import { PrimaryColor } from "./constants";
import { ReactNode, useContext } from "react";

export function FeatureHighlight(props: {
  icon: any;
  text: string;
}) {
  const onMobile = useContext(OnMobileContext);

  return (
    <div
      style={{
        borderColor: PrimaryColor,
        borderWidth: onMobile ? 2 : 4,
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
        {<props.icon size={onMobile ? 32 : 48} />}
      </div>
      <p style={{ fontSize: onMobile ? 16 : 20 }}>
        {props.text}
      </p>
    </div>
  );
}
