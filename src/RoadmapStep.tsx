import { useContext } from "react";
import { PrimaryColor } from "./constants";
import { OnMobileContext } from "./Responsive";
import { SouthIcon } from "./icons";

export function RoadmapStep(props: {
  title: string;
  description?: string;
  date: string;
  lastStep?: boolean;
}) {
  const onMobile = useContext(OnMobileContext);

  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          borderColor: "rgba(255, 255, 255, 0.2)",
          borderWidth: onMobile ? 2 : 4,
          borderStyle: "solid",
          borderRadius: 64,
          padding: 32,
        }}
      >
        <p
          style={{ fontSize: onMobile ? 18 : 32 }}
        >
          {props.title}
        </p>
        {props.description && (
          <p
            style={{
              fontSize: onMobile ? 16 : 24,
            }}
          >
            {props.description}
          </p>
        )}
        <p
          style={{
            color: PrimaryColor,
            fontSize: onMobile ? 16 : 24,
          }}
        >
          {props.date}
        </p>
      </div>
      {!props.lastStep && (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            paddingTop: onMobile ? 24 : 48,
            paddingBottom: onMobile ? 24 : 48,
          }}
        >
          <SouthIcon size={onMobile ? 24 : 48} />
        </div>
      )}
    </div>
  );
}
