import { useState } from "react";
import rio from "../assets/rio.avif";

export default function BackwardChain() {
  // Knowledge base
  const [facts, setFacts] = useState({
    being_in_the_city: null,
    cultural_cities: null,
    visiting_museums: null,
    going_to_festivals: null
  });

  // User Interface (UI)
  const askQuestion = (fact) => {
    return (
      <div key={fact}>
        <p>Do you prefer {fact.replaceAll("_", " ")}?</p>
        <button onClick={() => setFacts({ ...facts, [fact]: "Yes" })}>
          Yes
        </button>
        <button onClick={() => setFacts({ ...facts, [fact]: "No" })}>No</button>
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
            <p>CONCLUSION: It may be a good fit</p>
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
        <p>CONCLUSION: It may not be a good vacation spot for you.</p>
        <p>Based on the facts:</p>
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
    <div>
      <h1>Is Rio De Janeiro a good place for your vacation?</h1>
      {backwardChain(goal)}
      <img
        src={rio}
        alt="image"
        style={{ marginTop: "25px", width: "250px" }}
      />
    </div>
  );
}
