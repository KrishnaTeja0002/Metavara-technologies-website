import React from 'react';
import '../styles/HomeContent.css';

const HomeContent = () => {
    return (
        <div className="home-content-wrapper">


            {/* Featured Insights Section */}
            {/* Featured Insights Section */}
            <section className="insights-section">
                <div className="section-header">
                    <h2 className="section-title">Latest Thinking</h2>
                    <a href="/blogs" className="view-all-link">View All Insights &rarr;</a>
                </div>

                <div className="insights-grid">
                    {/* Insight Card 1 */}
                    <div className="insight-card" style={{ cursor: 'pointer' }} onClick={() => window.open('https://www.technologyreview.com/topic/artificial-intelligence', '_blank')}>
                        <div className="insight-image" style={{ background: 'linear-gradient(135deg, #1e293b, #334155)' }}>
                            <span className="insight-type">Article</span>
                        </div>
                        <div className="insight-content">
                            <span className="insight-date">Latest Analysis</span>
                            <h3 className="insight-title">The Rise of Agentic AI: Beyond Chatbots</h3>
                            <p className="insight-snippet">From reactive LLMs to autonomous agents: How the next generation of AI will plan, reason, and execute complex enterprise workflows without human intervention.</p>
                            <span style={{ fontSize: '0.8rem', color: '#0ea5e9', fontWeight: '600', marginTop: 'auto' }}>Read on MIT Tech Review &rarr;</span>
                        </div>
                    </div>

                    {/* Insight Card 2 */}
                    <div className="insight-card" style={{ cursor: 'pointer' }} onClick={() => window.open('https://www.microsoft.com/en-us/research/blog/', '_blank')}>
                        <div className="insight-image" style={{ background: 'linear-gradient(135deg, #0f172a, #1e40af)' }}>
                            <span className="insight-type">Tech Guide</span>
                        </div>
                        <div className="insight-content">
                            <span className="insight-date">Technology Trends</span>
                            <h3 className="insight-title">Small Language Models (SLMs): The Future of Edge AI</h3>
                            <p className="insight-snippet">Why enterprises are shifting towards specialized, efficient, and privacy-focused SLMs running locally on devices, reducing cloud costs and latency.</p>
                            <span style={{ fontSize: '0.8rem', color: '#0ea5e9', fontWeight: '600', marginTop: 'auto' }}>Read on Microsoft Research &rarr;</span>
                        </div>
                    </div>

                    {/* Insight Card 3 */}
                    <div className="insight-card" style={{ cursor: 'pointer' }} onClick={() => window.open('https://www.nature.com/subjects/quantum-information', '_blank')}>
                        <div className="insight-image" style={{ background: 'linear-gradient(135deg, #0e7490, #155e75)' }}>
                            <span className="insight-type">Research</span>
                        </div>
                        <div className="insight-content">
                            <span className="insight-date">Deep Dive</span>
                            <h3 className="insight-title">Quantum Machine Learning: The Next Frontier</h3>
                            <p className="insight-snippet">Exploring the convergence of quantum computing and neural networks. Are we ready for the exponential leap in processing power for complex optimization problems?</p>
                            <span style={{ fontSize: '0.8rem', color: '#0ea5e9', fontWeight: '600', marginTop: 'auto' }}>Read on Nature &rarr;</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Future of AI Banner */}
            <section className="ai-future-banner">
                <div className="ai-content">
                    <span className="ai-tag">Metavara Intelligence</span>
                    <h2 className="ai-title">Shaping the Cognitive Enterprise</h2>
                    <p className="ai-description">
                        We are entering an era where AI doesn't just assist—it reasons, predicts, and acts.
                        Metavara is at the forefront of building autonomous systems that drive decision efficacy.
                    </p>
                    {/* <a href="/ai-ml" className="btn-outline" style={{borderColor: '#38bdf8', color: '#38bdf8'}}>Explore Our AI Solutions</a> */}
                </div>
            </section>

            {/* Upcoming Events Section */}
            <section className="events-section">
                <div className="events-container">
                    <div className="section-header">
                        <h2 className="section-title">Upcoming Events</h2>
                        <span className="view-all-link" style={{ cursor: 'default', color: '#64748b' }}>Stay Tuned</span>
                    </div>

                    <div className="event-row" style={{ borderBottom: 'none' }}>
                        <div className="event-details" style={{ textAlign: 'center', width: '100%' }}>
                            <h3>Events Coming Soon</h3>
                            <p className="event-meta" style={{ justifyContent: 'center', display: 'flex' }}>
                                We are planning exciting webinars and community meetups.
                            </p>
                        </div>
                    </div>

                </div>
            </section>
        </div>
    );
};

export default HomeContent;
