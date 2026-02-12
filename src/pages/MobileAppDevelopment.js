import React from 'react';
import '../styles/Pages.css';

const MobileAppDevelopment = () => {
    return (
        <div className="content-section">
            <h1>Mobile App Development</h1>
            <p>
                In a mobile-first world, having a powerful and intuitive mobile application is essential.
                Metavara Technologies delivers cutting-edge mobile solutions for iOS and Android platforms.
            </p>

            <h2>Native & Cross-Platform</h2>
            <p>
                We offer the flexibility of native development for maximum performance or cross-platform solutions
                using React Native and Flutter for faster time-to-market.
            </p>
            <ul>
                <li><strong>iOS Development:</strong> Swift, SwiftUI</li>
                <li><strong>Android Development:</strong> Kotlin, Jetpack Compose</li>
                <li><strong>Cross-Platform:</strong> React Native, Flutter</li>
            </ul>

            <h2>User-Centric Design</h2>
            <p>
                Our mobile apps are designed with the user in mind. We prioritize intuitive UI/UX to ensure
                high engagement and retention rates. From sleek consumer apps to complex enterprise mobility solutions,
                we deliver experiences that delight.
            </p>

            <h2>Secure & Scalable</h2>
            <p>
                Security is paramount in mobile applications. We implement robust encryption, secure authentication,
                and industry best practices to protect your user data and ensuring compliance with global standards.
            </p>
        </div>
    );
};

export default MobileAppDevelopment;
