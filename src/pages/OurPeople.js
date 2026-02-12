import React from 'react';
import '../styles/Pages.css';

const OurPeople = () => {
  const leadership = [
    {
      id: 1,
      name: 'Radhika Reddy',
      role: 'Director',
      image: '/images/team/radhika-reddy.png',
    },
  ];

  const coreTeam = [
    // Python Developers
    {
      id: 101,
      name: 'Sai Mohan Gorrela',
      role: 'Python Developer',
      image: '/images/team/sai-mohan-gorrela.png',
    },
    {
      id: 102,
      name: 'Varalakshmi Singiri',
      role: 'Python Developer',
      image: '/images/team/varalakshmi-singiri.png',
    },
    {
      id: 104,
      name: 'MOHAMMAD IMTHIYAZ',
      role: 'Python Developer',
      image: '/images/team/mohammad-imthiyaz.png',
    },
    {
      id: 103,
      name: 'Krishna Teja Vemulapalli',
      role: 'Python Developer',
      image: '/images/team/Krishna-Teja-Vemulapalli.jpeg',
    },
    {
      id: 105,
      name: 'Prajwal M',
      role: 'Python Developer',
      image: '/images/team/prajwal-m.png',
    },

    // React JS Developers
    {
      id: 201,
      name: 'Anil Kumar Reddy N',
      role: 'ReactJs Developer',
      image: '/images/team/anil-kumar-reddy.jpeg',
    },
    {
      id: 202,
      name: 'Neerajakshulu Ambati',
      role: 'ReactJs Developer',
      image: '/images/team/neerajakshulu-ambati.jpeg',
    },
    {
      id: 203,
      name: 'Shradha Mathpati',
      role: 'ReactJs Developer',
      image: '/images/team/shradha-mathpati.jpeg',
    },
    {
      id: 204,
      name: 'Pallavi Biradar',
      role: 'ReactJs Developer',
      image: '/images/team/pallavi-biradar.png',
    },
    {
      id: 205,
      name: 'Sreevidya Karnam',
      role: 'ReactJs Developer',
      image: '/images/team/sreevidya-karnam.png',
    },
    {
      id: 206,
      name: 'Guruswamy',
      role: 'ReactJs Developer',
      image: '/images/team/guruswamy.png',
    },
    {
      id: 207,
      name: 'Ramya Reddy K',
      role: 'ReactJs Developer',
      image: '/images/team/ramya-reddy-k.png',
    },
    {
      id: 208,
      name: 'Dilshad Tadipatri',
      role: 'ReactJs Developer',
      image: '/images/team/dilshad-tadipatri.png',
    },

    // Others (Fullstack, DevOps, QA, HR)
    {
      id: 301,
      name: 'Praneetha Garladinne',
      role: 'Fullstack Developer',
      image: '/images/team/praneetha-garladinne.jpeg',
    },
    {
      id: 302,
      name: 'Shaik Mahammad Shareef',
      role: 'Fullstack Developer',
      image: '/images/team/shaik-mahammad-shareef.png',
    },
    {
      id: 303,
      name: 'Hemanth K',
      role: 'DevOps Engineer',
      image: '/images/team/hemanth-k.png',
    },
    {
      id: 304,
      name: 'Akshatha G K',
      role: 'DevOps Engineer',
      image: '/images/team/akshatha-g-k.png',
    },
    {
      id: 305,
      name: 'Krishnaveni Linga',
      role: 'DevOps Engineer',
      image: '/images/team/krishnaveni-linga.png',
    },
    {
      id: 306,
      name: 'Anjaneyulu U',
      role: 'DevOps Engineer',
      image: '/images/team/anjaneyulu-u.png',
    },
    {
      id: 307,
      name: 'Manoj Bacha',
      role: 'DevOps Engineer',
      image: '/images/team/manoj-bacha.png',
    },
    {
      id: 308,
      name: 'Sowmya Reddy',
      role: 'Scrum Master',
      image: '/images/team/sowmya-reddy.png',
    },
    {
      id: 309,
      name: 'Savitha N',
      role: 'Quality Analyst',
      image: '/images/team/savitha-n.png',
    },
    {
      id: 310,
      name: 'HemaSree Kodaganti',
      role: 'HR',
      image: '/images/team/hemasree-kodaganti.png',
    },
    {
      id: 311,
      name: 'Rajani G',
      role: 'Quality Analyst',
      image: '/images/team/rajani-g.png',
    },
  ];

  const renderTeamGrid = (members) => (
    <div className="leadership-grid">
      {members.map((person) => (
        <div key={person.id} className="leader-card">
          <div className="leader-image-container">
            <img
              src={person.image || `https://ui-avatars.com/api/?name=${encodeURIComponent(person.name)}&background=random&color=fff&size=200`}
              alt={person.name}
              className="leader-image"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(person.name)}&background=random&color=fff&size=200`;
              }}
            />
            <div className="leader-overlay">
              <h3>{person.name}</h3>
              <p>{person.role}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <div className="content-section">
      <h1>Our People</h1>
      <p>
        At Metavara Technologies, our strength lies in our people. We are a diverse team of
        innovators, engineers, and strategists united by a passion for technology and a commitment
        to excellence.
      </p>

      <h2>Leadership Team</h2>
      {renderTeamGrid(leadership)}

      <h2 style={{ marginTop: '3rem' }}>Core Team</h2>
      {renderTeamGrid(coreTeam)}

      <div style={{ marginTop: '4rem' }}>
        <h2>Why Metavara?</h2>
        <p>
          We foster a culture of continuous learning and collaboration. Our team is empowered to
          challenge the status quo and push the boundaries of what's possible with technology.
        </p>
      </div>
    </div>
  );
};

export default OurPeople;
