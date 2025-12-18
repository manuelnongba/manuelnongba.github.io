import '../styles/Projects.css';
import React from 'react';

import Project from '../components/Project';

const Projects = () => {
  return (
    <>
      <div className="projects-header">
        <h1>Projects</h1>
      </div>
      <section className="projects">
        <Project
          title="V-Transcoder"
          desc="Designed and implemented a containerized microservices platform for video → MP3 conversion, speech-to-text
transcription and AI translation; implemented Gateway, Auth, Converter, Transcriber, Translator and Notification services."
          github="https://github.com/manuelnongba/v-transcoder"
          image="/assets/v-transcoder.svg"
          alt="V-Transcoder"
          tools={[
            'Python',
            'Docker',
            'PostgreSQL',
            'Kubernetes',
            'MongoDB',
            'RabbitMQ',
            'OpenAI',
          ]}
        />

        <Project
          title="ByteBridge"
          desc="A desktop collaborative code editor that enables real-time pair programming and collaborative coding sessions. Features include live cursor tracking and instant code synchronization"
          github="https://github.com/manuelnongba/bytebridge"
          image="/assets/bytebridge.png"
          alt="ByteBridge"
          tools={['Electron', 'TypeScript']}
        />

        <Project
          title="Pulse"
          desc="Built a telemetry ingestion API in Go plus Python agents that collect and push system metrics. Ingestion pipeline indexes
data in OpenSearch and is visualized through Kibana."
          github="https://github.com/manuelnongba/pulse"
          image="/assets/pulse.png"
          alt="Pulse"
          tools={['Go', 'Python', 'OpenSearch', 'Docker']}
        />

        <Project
          title="233 Rooms"
          desc="A location-based platform for finding available rooms, apartments and houses for rent or for sale. Users can discover nearby accommodations, view detailed listings, and connect with property owners based on their current location."
          website="https://233rooms.vercel.app/"
          image="/assets/233rooms.jpg"
          alt="233 Rooms"
          tools={['React', 'Remix', 'Redux', 'PostgreSQL']}
        />

        <Project
          title="Places"
          desc="An intuitive expense tracking application that helps users manage and categorize their spending across different locations. Features include expense categorization, location tagging, and spending analytics."
          website="https://placesweb.vercel.app/"
          github="https://github.com/manuelnongba/places"
          image="/assets/places.jpg"
          alt="Places"
          tools={['React', 'Remix', 'PostgreSQL']}
        />

        <Project
          title="Multi Explore"
          desc="A unified search platform that aggregates and displays results from multiple popular search engines simultaneously. Users can efficiently compare results across different platforms in a single interface."
          website="https://multiexplore.netlify.app/"
          github="https://github.com/manuelnongba/multiexplore"
          image="/assets/multi.png"
          alt="Multi Explore"
          tools={['React']}
        />
      </section>
    </>
  );
};

export default Projects;
