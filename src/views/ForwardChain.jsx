import { useState } from "react";
import leaf from "../assets/insects.jpeg";
import style from "./forwardChain.module.css";

export default function ForwardChain() {
  // Knowledge base
  const [facts, setFacts] = useState({
    legs: null,
    shell: null,
    two_folded_shell: null,
    several_parts: null,
    more_then6_legs: null,
    more_then8_legs: null,
    body_oval: null,
  });

  // User Interface (UI)
  const askQuestion = (fact) => {
    return (
      <div key={fact}>
        <p>Does the insect have {fact.replace("_", " ")}?</p>
        <button onClick={() => setFacts({ ...facts, [fact]: "Yes" })}>
          Yes
        </button>
        <button onClick={() => setFacts({ ...facts, [fact]: "No" })}>No</button>
      </div>
    );
  };

  // Inference engine
  const forwardChain = () => {
    if (facts.legs === null) {
      return askQuestion("legs");
    }

    if (facts.shell === null && facts.legs === "No") {
      return askQuestion("shell");
    }

    if (
      facts.two_folded_shell === null &&
      facts.legs === "No" &&
      facts.shell === "Yes"
    ) {
      return askQuestion("two_folded_shell");
    }

    if (
      facts.several_parts === null &&
      facts.legs === "No" &&
      facts.shell === "No"
    ) {
      return askQuestion("several_parts");
    }

    if (facts.more_then6_legs === null && facts.legs === "Yes") {
      return askQuestion("more_then6_legs");
    }

    if (
      facts.more_then8_legs === null &&
      facts.legs === "Yes" &&
      facts.more_then6_legs === "Yes"
    ) {
      return askQuestion("more_then8_legs");
    }

    if (
      facts.body_oval === null &&
      facts.legs === "Yes" &&
      facts.more_then6_legs === "Yes" &&
      facts.more_then8_legs === "Yes"
    ) {
      return askQuestion("body_oval");
    }

    let result = "";
    let conclusion = "Based on the facts: ";

    if (
      facts.legs === "Yes" &&
      facts.more_then6_legs === "Yes" &&
      facts.more_then8_legs === "Yes" &&
      facts.body_oval === "Yes"
    ) {
      result = "The insect is a Crustaceans";
      conclusion += "more then 8 legs and oval body.";
    } else if (
      facts.legs === "Yes" &&
      facts.more_then6_legs === "Yes" &&
      facts.more_then8_legs === "Yes"
    ) {
      result = "The insect is a Centipedes";
      conclusion += "more then 8 legs and not an oval body.";
    } else if (facts.legs === "Yes" && facts.more_then6_legs === "Yes") {
      result = "The insect is a Arachnids";
      conclusion += "more then 6 legs and less then 8 legs.";
    } else if (facts.legs === "Yes") {
      result = "The insect is a Insect";
      conclusion += "It has less then 6 legs.";
    } else if (
      facts.legs === "No" &&
      facts.shell === "Yes" &&
      facts.two_folded_shell === "Yes"
    ) {
      result = "The insect is a Molluscs";
      conclusion += "It has shell and two folded shell.";
    } else if (facts.legs === "No" && facts.shell === "Yes") {
      result = "The insect is a Snail";
      conclusion += "It has shell.";
    } else if (
      facts.legs === "No" &&
      facts.shell === "No" &&
      facts.several_parts === "Yes"
    ) {
      result = "The insect is a Worm";
      conclusion += "It has several parts.";
    } else {
      result = "The insect is a Slug";
      conclusion += "It has no legs.";
    }

    return (
      <div>
        <p>{result}</p>
        <p>{conclusion}</p>
      </div>
    );
  };

  return (
    <div>
      <h1 className={style.headerOne}>Forward Chaining: Insect Recogniser</h1>
      {forwardChain()}
      <img
        src={leaf}
        alt="image"
        style={{ marginTop: "25px", width: "250px" }}
      />
    </div>
  );
}
