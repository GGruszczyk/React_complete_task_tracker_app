import React from "react";
import Avatar from "react-avatar";
import "./Team.css"; // Importa  archivo CSS

const Team = () => {
  const fakeDeveloperNames = [
    {
      name: "GGruszczyk",
      githubUrl: "https://github.com/GGruszczyk",
      avatarUrl: "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png",
    },
  ];

  return (
    <div>
      <h2>The developer who worked on the Tasks Tracker App:</h2>
      <ul>
        {fakeDeveloperNames.map((developer, index) => (
          <li key={index}>
            <a href={developer.githubUrl}>
              <Avatar src={developer.avatarUrl} round="50px" size="50" /> {/* Tamaño y estilo del avatar */}
              <span className="developer-name">{developer.name}</span> {/* Aplica la clase de estilo al nombre */}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Team;
