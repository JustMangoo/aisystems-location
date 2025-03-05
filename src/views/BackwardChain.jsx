import { useState } from "react";
import rio from "../assets/rio.avif";
import styles from "./BackwardChain.module.css";
import replayIcon from "../assets/replay_icon.svg";

export default function BackwardChain() {
  // Knowledge base
  const [facts, setFacts] = useState({
    being_in_the_city: null,
    cultural_cities: null,
    visiting_museums: null,
    going_to_festivals: null
  });

  // Reset function
  const resetFacts = () => {
    setFacts(initialFacts);
  };

  // User Interface (UI)
  const askQuestion = (fact) => {
    return (
      <div key={fact}>
        <p className={styles.question}>Do you prefer {fact.replaceAll("_", " ")}?</p>
        <button className={styles.button} onClick={() => setFacts({ ...facts, [fact]: "Yes" })}>
          Yes
        </button>
        <button  className={styles.button} onClick={() => setFacts({ ...facts, [fact]: "No" })}>No</button>
      </div>
    );
  };

  // Inference engine
  const backwardChain = (goal) => {
    let conclusions = [];

    if (goal === "Rio_De_Janeiro") { 
      if (facts.being_in_the_city === null) {
        return askQuestion("being_in_the_city");
      }
      conclusions.push(`being_in_the_city: ${facts.being_in_the_city}`);

      if (facts.cultural_cities === null && facts.being_in_the_city === "Yes") {
        return askQuestion("cultural_cities");
      }
      conclusions.push(`cultural_cities: ${facts.cultural_cities}`);

      if (facts.visiting_museums === null && facts.being_in_the_city === "Yes" && facts.cultural_cities === "Yes") {
        return askQuestion("visiting_museums");
      }
      conclusions.push(`visiting_museums: ${facts.visiting_museums}`);

      if (facts. going_to_festivals === null && facts.being_in_the_city === "Yes" && facts.cultural_cities === "Yes" && facts.visiting_museums === "No") {
        return askQuestion("going_to_festivals");
      }
      conclusions.push(`going_to_festivals: ${facts. going_to_festivals}`);
     
      if (facts.being_in_the_city == "Yes" && facts.cultural_cities === "Yes" && facts.visiting_museums === "No" && facts. going_to_festivals === "Yes") {
        return (
          <div>
            <p className={styles.conclusion_yes}>It may be a good fit</p>
            <p>Based on the facts:</p>
            <ul>
              {conclusions.map((fact, index) =>
                fact.includes("null") ? null : <li key={index}>{fact}</li>
              )}
            </ul>
          </div>
        );
      }
    }

    // If criteria is not met, show this
    return (
      <div>
        <p className={styles.conclusion_no}>It may not be a good vacation spot for you.</p>
        <p className={styles.text}>Based on the facts:</p>
        <ul>
          {conclusions.map((fact, index) =>
            fact.includes("null") ? null : <li key={index}>{fact}</li>
          )}
        </ul>
      </div>
    );
  };

  // This is the "diagnosis" that can be confirmed:
  const goal = "Rio_De_Janeiro";

  return (
    <div className={styles.container}>
      <h1 className={styles.headerOne}>Is Rio De Janeiro a good place <br /> for your vacation?</h1>
      <button
        className={styles.resetButton}
        onClick={resetFacts}
        style={{ marginTop: "20px" }}
      ><img src={replayIcon} alt="replay button" /> </button>
      {backwardChain(goal)}
      <img
        src={rio}
        alt="image"
        className={styles.image}
      />
    </div>
  );
}
