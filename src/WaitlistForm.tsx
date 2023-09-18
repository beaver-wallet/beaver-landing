import { useContext, useState } from "react";
import { PrimaryColor } from "./constants";
import { OnMobileContext } from "./Responsive";

export function WaitlistForm() {
  const onMobile = useContext(OnMobileContext);
  const [buttonHovered, setButtonHovered] =
    useState(false);
  const [email, setEmail] = useState("");
  const [joined, setJoined] = useState(false);
  const [error, setError] = useState("");

  const onJoinClicked = () => {
    // Submit to the server
    // If successful, set joined to true
    (async () => {
      let response;
      try {
        response = await fetch(
          "https://abstract-wallet-backend.onrender.com/waitlist",
          {
            method: "POST",
            body: JSON.stringify({ email }),
            // Specify that it's a form
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
      } catch (e) {
        setError(
          `It's terribly sad, but an error occured while signing you up! Please try again or report it to us. ${e}`
        );
        return;
      }
      if (response.ok) setJoined(true);
      else {
        // Handle error
        const error = await response.text();
        setError(
          `It's terribly sad, but an error occured while signing you up! Please try again or report it to us. ${error}`
        );
      }
    })();
  };

  const errorComponent = (
    <p style={{ color: "red" }}>{error}</p>
  );

  const joinedComponent = (
    <p
      style={{
        color: PrimaryColor,
        fontSize: 20,
      }}
    >
      Awesome! See you soon!
    </p>
  );

  const formComponent = (
    <div
      style={{
        backgroundColor: "white",
        borderRadius: 100,
        width: "fit-content",
      }}
    >
      <input
        type="text"
        placeholder="Email"
        style={{
          width: onMobile ? 150 : 200,
          height: onMobile ? 20 : 30,
          borderWidth: 0,
          borderTopLeftRadius: 100,
          borderBottomLeftRadius: 100,
          marginLeft: 10,
          fontSize: 12,
        }}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button
        style={{
          width: 80,
          height: onMobile ? 30 : 50,
          backgroundColor: PrimaryColor,
          borderWidth: 0,
          borderTopRightRadius: 100,
          borderBottomRightRadius: 100,
          opacity: buttonHovered ? 0.75 : 1,
        }}
        onMouseOver={() => setButtonHovered(true)}
        onMouseOut={() => setButtonHovered(false)}
        onClick={onJoinClicked}
      >
        Join
      </button>
    </div>
  );

  if (joined) return joinedComponent;
  if (error) return errorComponent;

  return formComponent;
}
