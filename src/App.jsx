import { useState } from "react";
import "./index.css";

const episodes = [
  {
    id: 1,
    title: "The Silent Caller",
    description: "A detective is haunted by a series of strange phone calls.",
    episodeNum: 1,
  },
  {
    id: 2,
    title: "Whispers in the Night",
    description: "A supernatural presence terrorizes a small town.",
    episodeNum: 2,
  },
  {
    id: 3,
    title: "Into the Abyss",
    description: "The team investigates a series of mysterious disappearances.",
    episodeNum: 3,
  },
  {
    id: 4,
    title: "The Vanishing Point",
    description:
      "Time itself seems to be unraveling as the case takes a dark turn.",
    episodeNum: 4,
  },
  {
    id: 5,
    title: "Shadows of the Past",
    description:
      "A detective/s past resurfaces as a familiar face becomes a prime suspect.",
    episodeNum: 5,
  },
  {
    id: 6,
    title: "The Last Betrayal",
    description: "A detective is haunted by a series of strange phone calls.",
    episodeNum: 6,
  },
  {
    id: 7,
    title: "Echoes of Fear",
    description:
      "The team uncovers a sinister conspiracy that goes to the highest levels.",
    episodeNum: 7,
  },
  {
    id: 8,
    title: "The Final Hour",
    description:
      "The detective races aganist time to stop the mastermind and save a life.",
    episodeNum: 8,
  },
];

export default function App() {
  const [selectedEpisode, setSelectedEpisode] = useState(episodes[4]);

  return (
    <div className="container">
      <h1 className="title">Dark Echoes</h1>

      <div className="content">
        <div className="episode-list">
          <h2>Episodes</h2>
          <ul>
            {episodes.map((ep) => (
              <li
                key={ep.id}
                className={ep.id === selectedEpisode.id ? "active" : ""}
                onClick={() => setSelectedEpisode(ep)}
              >
                {ep.title}
              </li>
            ))}
          </ul>
        </div>

        <div className="episode-detail">
          <h2>Episode {selectedEpisode.episodeNum}</h2>
          <h3>{selectedEpisode.title}</h3>
          <p>{selectedEpisode.description}</p>
          <button>Watch Now</button>
        </div>
      </div>
    </div>
  );
}
