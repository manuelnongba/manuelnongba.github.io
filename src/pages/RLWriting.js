import React from 'react';
import '../styles/Writings.css';

const RLWriting = () => (
  <div className="writing-page-container">
    <article className="writing-article">
      <h1>Reinforcement Learning: Insights from David Silver</h1>

      <section className="introduction">
        <p>
          Reinforcement Learning (RL) represents a fundamental shift in how we
          approach machine learning. Through David Silver's groundbreaking
          lectures, we explore how agents learn to make decisions through
          environmental interaction, forming the backbone of modern AI systems
          like AlphaGo and autonomous robots.
        </p>
      </section>

      <section className="core-concepts">
        <h2>Core Components of RL</h2>
        <div className="concept-diagram">
          <div className="rl-diagram">
            <div className="rl-agent">
              <h4>Agent</h4>
            </div>
            <div className="rl-environment">
              <h4>Environment</h4>
            </div>
            <div className="rl-arrows">
              <div className="rl-arrow rl-action">
                <span className="arrow">→</span>
                <span className="label">Action (At)</span>
              </div>
              <div className="rl-arrow rl-state">
                <span className="arrow">←</span>
                <span className="label">State (St+1)</span>
              </div>
              <div className="rl-arrow rl-reward">
                <span className="arrow">←</span>
                <span className="label">Reward (Rt+1)</span>
              </div>
            </div>
          </div>
          <p className="diagram-caption">
            The RL Loop: Agent-Environment Interaction
          </p>
        </div>
        <p>The RL framework consists of several key components:</p>
        <ul>
          <li>
            <strong>Agent:</strong> The learner and decision maker
          </li>
          <li>
            <strong>Environment:</strong> The world the agent interacts with
          </li>
          <li>
            <strong>
              State (S<sub>t</sub>):
            </strong>{' '}
            Current situation of the agent
          </li>
          <li>
            <strong>
              Action (A<sub>t</sub>):
            </strong>{' '}
            Possible moves the agent can make
          </li>
          <li>
            <strong>
              Reward (R<sub>t</sub>):
            </strong>{' '}
            Feedback signal indicating action's success
          </li>
        </ul>
      </section>

      <section className="mdp-section">
        <h2>Markov Decision Processes (MDPs)</h2>
        <p>
          Silver emphasizes MDPs as the mathematical framework for RL. An MDP is
          defined by the tuple (S, A, P, R, γ):
        </p>
        <div className="math-block">
          V<sup>π</sup>(s) = E<sub>π</sub>[R<sub>t+1</sub> + γR<sub>t+2</sub> +
          γ²R<sub>t+3</sub> + ... | S<sub>t</sub> = s]
        </div>
        <p>
          Where V<sup>π</sup>(s) is the value function under policy π, and γ is
          the discount factor balancing immediate versus future rewards.
        </p>
      </section>

      <section className="key-algorithms">
        <h2>Key Learning Algorithms</h2>
        <div className="algorithm-box">
          <h3>1. Dynamic Programming</h3>
          <p>
            Used when we have a perfect model of the environment. It uses the
            Bellman equation to iteratively compute value functions:
          </p>
          <div className="math-block">
            V(s) = max<sub>a</sub>[R(s,a) + γΣP(s'|s,a)V(s')]
          </div>
        </div>

        <div className="algorithm-box">
          <h3>2. Monte Carlo Methods</h3>
          <p>
            Learn from complete episodes of experience without requiring prior
            knowledge of environment dynamics. Particularly effective for
            episodic tasks.
          </p>
        </div>

        <div className="algorithm-box">
          <h3>3. Temporal Difference (TD) Learning</h3>
          <p>
            Combines ideas from DP and Monte Carlo, learning from incomplete
            episodes using bootstrapping:
          </p>
          <div className="math-block">
            V(S<sub>t</sub>) ← V(S<sub>t</sub>) + α[R<sub>t+1</sub> + γV(S
            <sub>t+1</sub>) - V(S<sub>t</sub>)]
          </div>
        </div>
      </section>

      <section className="applications">
        <h2>Real-World Applications</h2>
        <p>Silver's insights have led to remarkable applications:</p>
        <ul>
          <li>
            <strong>Game Playing:</strong> AlphaGo's victory over Lee Sedol
            demonstrated RL's potential in complex strategic domains
          </li>
          <li>
            <strong>Robotics:</strong> Learning motor control and manipulation
            tasks through trial and error
          </li>
          <li>
            <strong>Resource Management:</strong> Optimizing data center cooling
            and energy usage
          </li>
          <li>
            <strong>Autonomous Systems:</strong> Self-driving vehicles and drone
            navigation
          </li>
        </ul>
      </section>

      <section className="challenges-future">
        <h2>Challenges and Future Directions</h2>
        <p>
          Despite its successes, Silver highlights several ongoing challenges in
          RL:
        </p>
        <ul>
          <li>Sample efficiency in complex environments</li>
          <li>Exploration in sparse reward settings</li>
          <li>Transfer learning between different tasks</li>
          <li>Safe exploration in real-world applications</li>
        </ul>
      </section>
    </article>
  </div>
);

export default RLWriting;
