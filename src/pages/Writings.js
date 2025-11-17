import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Writings.css';

const writingsList = [
  {
    title: 'Safe, Resource‑Efficient RL for Networked IoT Systems',
    slug: 'safe-resource-efficient-rl-iot',
    description:
      'Design patterns, algorithms, and deployment guidance for safe, low-resource RL on networked IoT devices.',
  },
  {
    title: 'Reinforcement Learning: Insights from David Silver',
    slug: 'reinforcement-learning-david-silver',
    description:
      'A summary and reflection on David Silver’s foundational lectures on reinforcement learning.',
  },
];

const Writings = () => {
  return (
    <div className="writings-list-container">
      <h1>Writings</h1>
      <div className="writings-list">
        {writingsList.map((writing) => (
          <Link
            to={`/writings/${writing.slug}`}
            className="writing-card"
            key={writing.slug}
          >
            <h2>{writing.title}</h2>
            <p>{writing.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Writings;
