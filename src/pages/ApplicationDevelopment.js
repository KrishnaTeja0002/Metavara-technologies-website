import React from 'react';
import '../styles/Pages.css';

const ApplicationDevelopment = () => {
    return (
        <div className="content-section">
            <h1>Application Development</h1>
            <p>
                At Metavara Technologies, we build robust, scalable, and secure applications tailored to your business needs.
                Our application development services cover the entire lifecycle, from concept to deployment and maintenance.
            </p>

            <h2>Custom Software Solutions</h2>
            <p>
                We specialize in creating bespoke software solutions that drive efficiency and innovation.
                Whether you need a complex enterprise platform or a specialized internal tool, our team delivers
                high-performance code that stands the test of time.
            </p>

            <h2>Modern Tech Stack</h2>
            <p>
                We leverage the latest technologies and frameworks to ensure your applications are future-proof.
                Our expertise spans:
            </p>
            <ul>
                <li><strong>Frontend:</strong> React, Angular, Vue.js, Next.js</li>
                <li><strong>Backend:</strong> Node.js, Python (Django/Flask), Java (Spring Boot), .NET</li>
                <li><strong>Database:</strong> PostgreSQL, MongoDB, MySQL, Redis</li>
                <li><strong>Cloud:</strong> AWS, Azure, Google Cloud Platform</li>
            </ul>

            <h2>API Integration & Microservices</h2>
            <p>
                We architect scalable microservices and seamless API integrations to ensure your systems communicate
                efficiently. Our approach guarantees modularity, making your application easier to maintain and extend.
            </p>
        </div>
    );
};

export default ApplicationDevelopment;
