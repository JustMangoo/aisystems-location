import { useState } from "react";
import style from "./ForwardChain.module.css";
import replayIcon from "../assets/replay_icon.svg";

export default function ForwardChain() {
  // Initial state for facts
  const initialFacts = {
    cityOrNature: null,
    naturePreference: null,
    wildlifeInterest: null,
    climatePreference: null,
    activityPreference: null,
    cityType: null,
    ancientArchitectureInterest: null,
    medievalAtmosphereInterest: null,
    castlesInterest: null,
    hotClimatePreference: null,
    starbucksFan: null,
    broadwayShowsInterest: null,
    artAndMuseumsInterest: null,
    festivalsInterest: null,
    foodSceneInterest: null,
  };

  // State for facts
  const [facts, setFacts] = useState(initialFacts);

  // Reset function
  const resetFacts = () => {
    setFacts(initialFacts);
  };

  // User Interface (UI) for multiple-choice questions
  const askQuestion = (fact, question, options) => {
    return (
      <div key={fact}>
        <p className={style.question}>{question}</p>
        {options.map((option) => (
          <button
            key={option}
            className={style.button}
            onClick={() => setFacts({ ...facts, [fact]: option })}
          >
            {option}
          </button>
        ))}
      </div>
    );
  };

  // Inference engine
  const forwardChain = () => {
    if (facts.cityOrNature === null) {
      return askQuestion(
        "cityOrNature",
        "Do you prefer being in the city or close to nature?",
        ["Nature", "City"]
      );
    }

    if (facts.cityOrNature === "Nature") {
      if (facts.naturePreference === null) {
        return askQuestion(
          "naturePreference",
          "Do you prefer mountains, oceans, or forests?",
          ["Mountains", "Oceans", "Forests"]
        );
      }

      if (facts.naturePreference === "Forests") {
        if (facts.wildlifeInterest === null) {
          return askQuestion(
            "wildlifeInterest",
            "Are you interested in wildlife and hiking?",
            ["Yes", "No"]
          );
        }

        if (facts.wildlifeInterest === "Yes") {
          return (
            <p className={style.destination}>
              Your ideal destination is the Amazon Rainforest.
            </p>
          );
        } else {
          return (
            <p className={style.destination}>
              Your ideal destination is Redwood National Park.
            </p>
          );
        }
      }

      if (facts.naturePreference === "Mountains") {
        if (facts.climatePreference === null) {
          return askQuestion(
            "climatePreference",
            "Do you prefer a warm or cold climate?",
            ["Warm", "Cold"]
          );
        }

        if (facts.climatePreference === "Warm") {
          return (
            <p className={style.destination}>
              Your ideal destination is Patagonia.
            </p>
          );
        } else {
          return (
            <p className={style.destination}>
              Your ideal destination is the Swiss Alps.
            </p>
          );
        }
      }

      if (facts.naturePreference === "Oceans") {
        if (facts.activityPreference === null) {
          return askQuestion(
            "activityPreference",
            "Do you prefer to relax or stay active?",
            ["Relax", "Active"]
          );
        }

        if (facts.activityPreference === "Relax") {
          return (
            <p className={style.destination}>
              Your ideal destination is Santorini.
            </p>
          );
        } else {
          return (
            <p className={style.destination}>
              Your ideal destination is Costa Rica.
            </p>
          );
        }
      }
    }

    if (facts.cityOrNature === "City") {
      if (facts.cityType === null) {
        return askQuestion(
          "cityType",
          "Do you like historical, modern, or cultural cities?",
          ["Historical", "Modern", "Cultural"]
        );
      }

      if (facts.cityType === "Historical") {
        if (facts.ancientArchitectureInterest === null) {
          return askQuestion(
            "ancientArchitectureInterest",
            "Are you interested in ancient architecture?",
            ["Yes", "No"]
          );
        }

        if (facts.ancientArchitectureInterest === "Yes") {
          return (
            <p className={style.destination}>Your ideal destination is Rome.</p>
          );
        } else {
          if (facts.medievalAtmosphereInterest === null) {
            return askQuestion(
              "medievalAtmosphereInterest",
              "Do you want a medieval atmosphere?",
              ["Yes", "No"]
            );
          }

          if (facts.medievalAtmosphereInterest === "Yes") {
            if (facts.castlesInterest === null) {
              return askQuestion(
                "castlesInterest",
                "Are you fascinated by castles?",
                ["Yes", "No"]
              );
            }

            if (facts.castlesInterest === "Yes") {
              return (
                <p className={style.destination}>
                  Your ideal destination is Edinburgh.
                </p>
              );
            } else {
              return (
                <p className={style.destination}>
                  Your ideal destination is Istanbul.
                </p>
              );
            }
          } else {
            return (
              <p className={style.destination}>
                Your ideal destination is Istanbul.
              </p>
            );
          }
        }
      }

      if (facts.cityType === "Modern") {
        if (facts.hotClimatePreference === null) {
          return askQuestion(
            "hotClimatePreference",
            "Do you like hot climates?",
            ["Yes", "No"]
          );
        }

        if (facts.hotClimatePreference === "Yes") {
          return (
            <p className={style.destination}>
              Your ideal destination is Dubai.
            </p>
          );
        } else {
          if (facts.starbucksFan === null) {
            return askQuestion("starbucksFan", "Are you a fan of Starbucks?", [
              "Yes",
              "No",
            ]);
          }

          if (facts.starbucksFan === "Yes") {
            return (
              <p className={style.destination}>
                Your ideal destination is Seattle.
              </p>
            );
          } else {
            if (facts.broadwayShowsInterest === null) {
              return askQuestion(
                "broadwayShowsInterest",
                "Do you like Broadway shows?",
                ["Yes", "No"]
              );
            }

            if (facts.broadwayShowsInterest === "Yes") {
              return (
                <p className={style.destination}>
                  Your ideal destination is New York.
                </p>
              );
            } else {
              return (
                <p className={style.destination}>
                  Your ideal destination is Vancouver.
                </p>
              );
            }
          }
        }
      }

      if (facts.cityType === "Cultural") {
        if (facts.artAndMuseumsInterest === null) {
          return askQuestion(
            "artAndMuseumsInterest",
            "Are you interested in art and museums?",
            ["Yes", "No"]
          );
        }

        if (facts.artAndMuseumsInterest === "Yes") {
          return (
            <p className={style.destination}>
              Your ideal destination is Paris.
            </p>
          );
        } else {
          if (facts.festivalsInterest === null) {
            return askQuestion(
              "festivalsInterest",
              "Would you like a city with festivals?",
              ["Yes", "No"]
            );
          }

          if (facts.festivalsInterest === "Yes") {
            return (
              <p className={style.destination}>
                Your ideal destination is Rio de Janeiro.
              </p>
            );
          } else {
            if (facts.foodSceneInterest === null) {
              return askQuestion(
                "foodSceneInterest",
                "Do you prefer a city known for its food scene?",
                ["Yes", "No"]
              );
            }

            if (facts.foodSceneInterest === "Yes") {
              return (
                <p className={style.destination}>
                  Your ideal destination is Barcelona.
                </p>
              );
            } else {
              return (
                <p className={style.destination}>
                  Your ideal destination is Kyoto.
                </p>
              );
            }
          }
        }
      }
    }

    return (
      <p className={style.destination}>
        No destination found based on your preferences.
      </p>
    );
  };

  return (
    <div className={style.container}>
      <h1 className={style.headerOne}>
        Forward Chaining: Destination Recommender
      </h1>
      {forwardChain()}
      {/* Reset button */}
      <button
        className={style.resetButton}
        onClick={resetFacts}
        style={{ marginTop: "20px" }}
      >
        <img src={replayIcon} alt="replay button" />
      </button>
    </div>
  );
}
