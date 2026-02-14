import React from 'react';
import '../styles/Pages.css';
import '../styles/BlogStyles.css';

const Blogs = () => {
    const blogs = [
        {
            id: 1,
            title: "The Rise of Agentic AI: Beyond Chatbots",
            category: "Artificial Intelligence",
            date: "November 5, 2025",
            image: "linear-gradient(135deg, #1e293b, #334155)",
            summary: "From reactive LLMs to autonomous agents: How the next generation of AI will plan, reason, and execute complex enterprise workflows without human intervention.",
            source: "MIT Technology Review",
            link: "https://www.technologyreview.com/topic/artificial-intelligence"
        },
        {
            id: 2,
            title: "Small Language Models (SLMs): The Future of Edge AI",
            category: "Technology Trends",
            date: "October 28, 2025",
            image: "linear-gradient(135deg, #0f172a, #1e40af)",
            summary: "Why enterprises are shifting towards specialized, efficient, and privacy-focused SLMs running locally on devices, reducing cloud costs and latency.",
            source: "Microsoft Research",
            link: "https://www.microsoft.com/en-us/research/blog/"
        },
        {
            id: 3,
            title: "Quantum Machine Learning: The Next Frontier",
            category: "Research",
            date: "October 12, 2025",
            image: "linear-gradient(135deg, #0e7490, #155e75)",
            summary: "Exploring the convergence of quantum computing and neural networks. Are we ready for the exponential leap in processing power for complex optimization problems?",
            source: "Nature Physics",
            link: "https://www.nature.com/subjects/quantum-information"
        },
        {
            id: 4,
            title: "Sustainable Computing: The Green AI Revolution",
            category: "Sustainability",
            date: "September 30, 2025",
            image: "linear-gradient(135deg, #065f46, #047857)",
            summary: "As AI models grow larger, so does their carbon footprint. We explore new techniques for energy-efficient training and inference to build a sustainable digital future.",
            source: "UN Environment Programme",
            link: "https://www.unep.org/explore-topics/technology"
        },
        {
            id: 5,
            title: "AI Governance & Ethics in 2026",
            category: "Policy",
            date: "September 15, 2025",
            image: "linear-gradient(135deg, #be185d, #9d174d)",
            summary: "Navigating the complex landscape of AI regulations. How to ensure your AI systems are fair, transparent, and compliant with emerging global standards.",
            source: "NIST.gov",
            link: "https://www.nist.gov/artificial-intelligence"
        }
    ];

    return (
        <div className="content-section">
            <h1>Insights & Perspectives</h1>
            <p className="clients-intro">
                Explore our latest thinking on technology, innovation, and the future of business.
                Our experts share deep insights into the trends shaping the digital landscape.
            </p>

            <div className="blog-grid">
                {blogs.map(blog => (
                    <div key={blog.id} className="blog-card" style={{ cursor: 'pointer' }} onClick={() => window.open(blog.link, '_blank')}>
                        <div className="blog-image" style={{ background: blog.image }}>
                            <span className="blog-category-tag">{blog.category}</span>
                            <div style={{ position: 'absolute', bottom: '10px', right: '10px', background: 'rgba(0,0,0,0.7)', color: '#fff', padding: '4px 8px', borderRadius: '4px', fontSize: '0.75rem', fontWeight: 'bold' }}>
                                Source: {blog.source} <i className="fa-solid fa-external-link-alt" style={{ marginLeft: '5px' }}></i>
                            </div>
                        </div>
                        <div className="blog-content">
                            <span className="blog-date">{blog.date}</span>
                            <h2 className="blog-title">{blog.title}</h2>
                            <p className="blog-summary">{blog.summary}</p>
                            <a href={blog.link} target="_blank" rel="noopener noreferrer" className="read-more-btn" onClick={(e) => e.stopPropagation()}>
                                Read on {blog.source} &rarr;
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Blogs;
