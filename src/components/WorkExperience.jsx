
const WorkExperience = () => {
    return (
        <div>
            <h1 style={{display: "flex", justifyContent: "center"}}>Work Experience</h1>
            <h3>ChicMic Studios | Backend Developer Intern
                <span style={{ display: "flex", justifyContent: "flex-end" }}>January 2025 - September 2025</span>
            </h3>
            <p>The 8-month internship at ChicMic Studios involved working as a backend developer on high-impact live projects utilizing modern Node.js technologies, where responsibilities spanned across Crypto Exchange and ERP integration, featuring core backend implementations and third-party API handling. This experience showcased advanced backend skills, real-world deployment, and integration with critical systems like Stripe and Upwork, enabling effective crypto trading and process automation.</p>
            <h4>Crypto Exchange Project Summary</h4>
            <p>
                Developed a live trading platform where users and vendors could securely trade Espees (a crypto currency) with each other, and monitored transactions with admin controls.
                <br />
                Implemented 2FA authentication for enhanced user security and used Redis for rate limiting to prevent abuse.
                <br />
                Admin features included transaction monitoring and the ability to add a platform fee, ensuring business transparency and profitability.
                <br />
                Integrated Stripe Payment Gateway using Node.js and Express to facilitate seamless fiat-to-crypto transactions.
                <br />
                Utilized MongoDB for robust real-time data management and Express for RESTful API development.
                <br />
                Adopted best practices in API development, error handling, and secure transaction flows throughout the platform.
            </p>
            <h4>ERP & Upwork Integration Project Summary</h4>
            <p>Integrated the Upwork API to automate tracking of time spent by users on Upwork using cron jobs and Node.js, providing actionable reports for management.
                <br />
                Engineered RESTful endpoints that allow users to view all their active sessions and securely log out from any session, improving both usability and security.
                <br />
                Ensured regular, automated data retrieval for time tracking, enhancing productivity monitoring for remote team members.
                <br />
                Applied Node.js, Express, and MongoDB stack, following modern standards for building scalable enterprise integrations</p>
            <h4>Technologies & Stack</h4>
            <p>Node.js & Express – Used for scalable RESTful API and backend logic development.<br />

                MongoDB – Document-based database for transactions and session tracking.<br />

                Redis – Applied for rate limiting and cache management to protect endpoints.<br />

                2FA Authentication – Strengthened platform security and compliance.<br />

                Stripe Payment Gateway – Enabled secure, real-time fiat payment flows.<br />

                Upwork API & Cron Jobs – Automated talent management and session/activity tracking.</p>
        </div>
    )
}

export default WorkExperience
