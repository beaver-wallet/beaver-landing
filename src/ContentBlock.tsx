export function ContentBlock(props: {
  imageName: string;
  text: string;
  imagePosition: "left" | "right";
}) {
  const imgBlock = (
    <img
      alt="Block"
      src={`/${props.imageName}.png`}
      width={300}
      style={{
        display: "inline",
      }}
    />
  );

  const textBlock = (
    <p
      style={{
        padding: 20,
        fontSize: 20,
      }}
    >
      {props.text}
    </p>
  );

  return (
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
}
