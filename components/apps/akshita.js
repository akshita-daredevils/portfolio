// Repo refreshed on 2025-11-15
import React, { Component } from 'react';
import ReactGA from 'react-ga4';

export class AboutAkshita extends Component {
    constructor() {
        super();
        this.screens = {};
        this.state = {
            screen: () => { },
            active_screen: "about", // by default 'about' screen is active
            navbar: false,
        }
    }

    componentDidMount() {
        this.screens = {
            "about": <About />,
            "education": <Education />,
            "skills": <Skills />,
            "projects": <Projects />,
            "resume": <Resume />,
        }

        let lastVisitedScreen = localStorage.getItem("about-section");
        if (lastVisitedScreen === null || lastVisitedScreen === undefined) {
            lastVisitedScreen = "about";
        }

        // focus last visited screen
        this.changeScreen(document.getElementById(lastVisitedScreen));
    }

    changeScreen = (e) => {
        const screen = e.id || e.target.id;

        // store this state
        localStorage.setItem("about-section", screen);

        // google analytics
        if (process.env.NEXT_PUBLIC_TRACKING_ID) {
            ReactGA.send({ hitType: "pageview", page: `/${screen}`, title: "Custom Title" });
        }

        this.setState({
            screen: this.screens[screen],
            active_screen: screen
        });
    }

    showNavBar = () => {
        this.setState({ navbar: !this.state.navbar });
    }

    renderNavLinks = () => {
        return (
            <>
                <div id="about" tabIndex="0" onFocus={this.changeScreen} className={(this.state.active_screen === "about" ? " bg-ub-orange bg-opacity-100 hover:bg-opacity-95" : " hover:bg-gray-50 hover:bg-opacity-5 ") + " w-28 md:w-full md:rounded-none rounded-sm cursor-default outline-none py-1.5 focus:outline-none duration-100 my-0.5 flex justify-start items-center pl-2 md:pl-2.5"}>
                    <img className=" w-3 md:w-4" alt="about akshita" src="./themes/Yaru/status/about.svg" />
                    <span className=" ml-1 md:ml-2 text-gray-50 ">About Me</span>
                </div>
                <div id="education" tabIndex="0" onFocus={this.changeScreen} className={(this.state.active_screen === "education" ? " bg-ub-orange bg-opacity-100 hover:bg-opacity-95" : " hover:bg-gray-50 hover:bg-opacity-5 ") + " w-28 md:w-full md:rounded-none rounded-sm cursor-default outline-none py-1.5 focus:outline-none duration-100 my-0.5 flex justify-start items-center pl-2 md:pl-2.5"}>
                    <img className=" w-3 md:w-4" alt="akshita's education" src="./themes/Yaru/status/education.svg" />
                    <span className=" ml-1 md:ml-2 text-gray-50 ">Education</span>
                </div>
                <div id="skills" tabIndex="0" onFocus={this.changeScreen} className={(this.state.active_screen === "skills" ? " bg-ub-orange bg-opacity-100 hover:bg-opacity-95" : " hover:bg-gray-50 hover:bg-opacity-5 ") + " w-28 md:w-full md:rounded-none rounded-sm cursor-default outline-none py-1.5 focus:outline-none duration-100 my-0.5 flex justify-start items-center pl-2 md:pl-2.5"}>
                    <img className=" w-3 md:w-4" alt="akshita's skills" src="./themes/Yaru/status/skills.svg" />
                    <span className=" ml-1 md:ml-2 text-gray-50 ">Skills</span>
                </div>
                <div id="projects" tabIndex="0" onFocus={this.changeScreen} className={(this.state.active_screen === "projects" ? " bg-ub-orange bg-opacity-100 hover:bg-opacity-95" : " hover:bg-gray-50 hover:bg-opacity-5 ") + " w-28 md:w-full md:rounded-none rounded-sm cursor-default outline-none py-1.5 focus:outline-none duration-100 my-0.5 flex justify-start items-center pl-2 md:pl-2.5"}>
                    <img className=" w-3 md:w-4" alt="akshita's projects" src="./themes/Yaru/status/projects.svg" />
                    <span className=" ml-1 md:ml-2 text-gray-50 ">Projects</span>
                </div>
                <div id="resume" tabIndex="0" onFocus={this.changeScreen} className={(this.state.active_screen === "resume" ? " bg-ub-orange bg-opacity-100 hover:bg-opacity-95" : " hover:bg-gray-50 hover:bg-opacity-5 ") + " w-28 md:w-full md:rounded-none rounded-sm cursor-default outline-none py-1.5 focus:outline-none duration-100 my-0.5 flex justify-start items-center pl-2 md:pl-2.5"}>
                    <img className=" w-3 md:w-4" alt="akshita's resume" src="./themes/Yaru/status/download.svg" />
                    <span className=" ml-1 md:ml-2 text-gray-50 ">Resume</span>
                </div>
            </>
        );
    }

    render() {
        return (
            <div className="w-full h-full flex bg-ub-cool-grey text-white select-none relative">
                <div className="md:flex hidden flex-col w-1/4 md:w-1/5 text-sm overflow-y-auto windowMainScreen border-r border-black">
                    {this.renderNavLinks()}
                </div>
                <div onClick={this.showNavBar} className="md:hidden flex flex-col items-center justify-center absolute bg-ub-cool-grey rounded w-6 h-6 top-1 left-1">
                    <div className=" w-3.5 border-t border-white"></div>
                    <div className=" w-3.5 border-t border-white" style={{ marginTop: "2pt", marginBottom: "2pt" }}></div>
                    <div className=" w-3.5 border-t border-white"></div>
                    <div className={(this.state.navbar ? " visible animateShow z-30 " : " invisible ") + " md:hidden text-xs absolute bg-ub-cool-grey py-0.5 px-1 rounded-sm top-full mt-1 left-0 shadow border-black border border-opacity-20"}>
                        {this.renderNavLinks()}
                    </div>
                </div>
                <div className="flex flex-col w-3/4 md:w-4/5 justify-start items-center flex-grow bg-ub-grey overflow-y-auto windowMainScreen">
                    {this.state.screen}
                </div>
            </div>
        )
    }
}

export default AboutAkshita;

export function displayAboutAkshita() {
    return <AboutAkshita />;
}

function About() {
    return (
        <>
            <div className="w-20 md:w-28 my-4 bg-white rounded-full overflow-hidden">
                <img 
                    className="w-full h-full object-cover" 
                    src="https://avatars.githubusercontent.com/u/121036421" 
                    alt="Akshita Rawat's Profile" 
                />
            </div>
            <div className="mt-4 md:mt-8 text-lg md:text-2xl text-center px-1">
                <div>Hello, I'm <span className="font-bold">Akshita Rawat</span></div>
                <div className="font-normal">
                    <span className="text-ub-orange font-bold">Full Stack Developer</span> | 
                    <span className="text-blue-400"> Web3 & Cloud</span>
                </div>
                <div className="text-sm text-gray-400 mt-1">Jaipur, Rajasthan, India</div>
            </div>
            <div className="mt-4 relative md:my-8 pt-px bg-white w-32 md:w-48">
                <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 left-0"></div>
                <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 right-0"></div>
            </div>
            <ul className="mt-4 leading-tight tracking-tight text-sm md:text-base w-5/6 md:w-3/4 emoji-list">
                <li className="list-pc">
                    Results-driven <span className="font-medium">Full Stack Developer</span> with production experience across React, Next.js, Node.js, and cloud-native services.
                </li>
                <li className="mt-3 list-building">
                    Strong command of <span className="font-medium">distributed and decentralized systems</span>, delivering performant, scalable architectures.
                </li>
                <li className="mt-3 list-time">
                    Comfortable owning delivery end-to-end: CI/CD, Docker/Kubernetes, AWS, performance tuning, and observability.
                </li>
                <li className="mt-3 list-star">
                    National hackathon winner with a track record of shipping <span className="font-medium">high-impact, production-grade</span> features quickly.
                </li>
            </ul>
        </>
    )
}

function Education() {
    return (
        <div className="w-full px-1 md:px-4 py-2">
            <div className="text-xl md:text-2xl font-bold">Education</div>

            <div className="mt-6">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
                    <div>
                        <div className="text-lg md:text-xl font-semibold">Banasthali Vidyapith</div>
                        <div className="text-sm md:text-base text-gray-300">B.Tech, Electronics and Communication</div>
                        <div className="text-sm md:text-base text-gray-300">Focus on distributed systems, DSA, and systems design</div>
                    </div>
                    <div className="text-sm md:text-base text-gray-400">July 2023 - May 2027 · Jaipur, India</div>
                </div>
            </div>
        </div>
    )
}

function Skills() {
    return (
        <div className="w-full px-1 md:px-4 py-2">
            <div className="text-xl md:text-2xl font-bold">Technical Skills</div>
            
            <div className="mt-6">
                <div className="text-lg md:text-xl font-semibold mb-3 text-ub-orange">Languages</div>
                <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-ub-orange bg-opacity-20 text-sm rounded-full">JavaScript (ES6+)</span>
                    <span className="px-3 py-1 bg-ub-orange bg-opacity-20 text-sm rounded-full">TypeScript</span>
                    <span className="px-3 py-1 bg-ub-orange bg-opacity-20 text-sm rounded-full">C++</span>
                    <span className="px-3 py-1 bg-ub-orange bg-opacity-20 text-sm rounded-full">Python</span>
                    <span className="px-3 py-1 bg-ub-orange bg-opacity-20 text-sm rounded-full">Go (Golang)</span>
                    <span className="px-3 py-1 bg-ub-orange bg-opacity-20 text-sm rounded-full">Solidity</span>
                    <span className="px-3 py-1 bg-ub-orange bg-opacity-20 text-sm rounded-full">SQL</span>
                </div>
            </div>

            <div className="mt-6">
                <div className="text-lg md:text-xl font-semibold mb-3 text-ub-orange">Frontend</div>
                <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-ub-orange bg-opacity-20 text-sm rounded-full">React.js</span>
                    <span className="px-3 py-1 bg-ub-orange bg-opacity-20 text-sm rounded-full">Next.js (SSR)</span>
                    <span className="px-3 py-1 bg-ub-orange bg-opacity-20 text-sm rounded-full">Redux</span>
                    <span className="px-3 py-1 bg-ub-orange bg-opacity-20 text-sm rounded-full">Tailwind CSS</span>
                    <span className="px-3 py-1 bg-ub-orange bg-opacity-20 text-sm rounded-full">Material UI</span>
                    <span className="px-3 py-1 bg-ub-orange bg-opacity-20 text-sm rounded-full">WebRTC</span>
                </div>
            </div>

            <div className="mt-6">
                <div className="text-lg md:text-xl font-semibold mb-3 text-ub-orange">Backend</div>
                <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-ub-orange bg-opacity-20 text-sm rounded-full">Node.js</span>
                    <span className="px-3 py-1 bg-ub-orange bg-opacity-20 text-sm rounded-full">Express</span>
                    <span className="px-3 py-1 bg-ub-orange bg-opacity-20 text-sm rounded-full">PostgreSQL</span>
                    <span className="px-3 py-1 bg-ub-orange bg-opacity-20 text-sm rounded-full">MongoDB</span>
                    <span className="px-3 py-1 bg-ub-orange bg-opacity-20 text-sm rounded-full">Redis</span>
                    <span className="px-3 py-1 bg-ub-orange bg-opacity-20 text-sm rounded-full">REST APIs</span>
                    <span className="px-3 py-1 bg-ub-orange bg-opacity-20 text-sm rounded-full">WebSockets</span>
                </div>
            </div>

            <div className="mt-6">
                <div className="text-lg md:text-xl font-semibold mb-3 text-ub-orange">DevOps / Cloud</div>
                <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-ub-orange bg-opacity-20 text-sm rounded-full">Docker</span>
                    <span className="px-3 py-1 bg-ub-orange bg-opacity-20 text-sm rounded-full">Kubernetes</span>
                    <span className="px-3 py-1 bg-ub-orange bg-opacity-20 text-sm rounded-full">AWS (EC2, S3)</span>
                    <span className="px-3 py-1 bg-ub-orange bg-opacity-20 text-sm rounded-full">CI/CD</span>
                    <span className="px-3 py-1 bg-ub-orange bg-opacity-20 text-sm rounded-full">Nginx</span>
                    <span className="px-3 py-1 bg-ub-orange bg-opacity-20 text-sm rounded-full">Firebase</span>
                </div>
            </div>

            <div className="mt-6">
                <div className="text-lg md:text-xl font-semibold mb-3 text-ub-orange">Web3</div>
                <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-ub-orange bg-opacity-20 text-sm rounded-full">Ethereum</span>
                    <span className="px-3 py-1 bg-ub-orange bg-opacity-20 text-sm rounded-full">Smart Contracts</span>
                    <span className="px-3 py-1 bg-ub-orange bg-opacity-20 text-sm rounded-full">Hardhat</span>
                    <span className="px-3 py-1 bg-ub-orange bg-opacity-20 text-sm rounded-full">Ethers.js</span>
                    <span className="px-3 py-1 bg-ub-orange bg-opacity-20 text-sm rounded-full">IPFS</span>
                    <span className="px-3 py-1 bg-ub-orange bg-opacity-20 text-sm rounded-full">Decentralized Identity</span>
                </div>
            </div>

            <div className="mt-6">
                <div className="text-lg md:text-xl font-semibold mb-3 text-ub-orange">Tools & Foundations</div>
                <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-ub-orange bg-opacity-20 text-sm rounded-full">Git/GitHub</span>
                    <span className="px-3 py-1 bg-ub-orange bg-opacity-20 text-sm rounded-full">Postman</span>
                    <span className="px-3 py-1 bg-ub-orange bg-opacity-20 text-sm rounded-full">Figma</span>
                    <span className="px-3 py-1 bg-ub-orange bg-opacity-20 text-sm rounded-full">Linux/Bash</span>
                    <span className="px-3 py-1 bg-ub-orange bg-opacity-20 text-sm rounded-full">Data Structures & Algorithms</span>
                </div>
            </div>
        </div>
    )
}

function Projects() {
    return (
        <div className="w-full px-1 md:px-4 py-2">
            <div className="text-xl md:text-2xl font-bold">Key Projects</div>
            <p className="text-gray-400 text-sm mt-1 mb-4">Selected builds that highlight distributed systems, AI, and Web3.</p>

            <div className="mt-4 space-y-6">
                <div className="border border-gray-700 rounded-lg p-4 hover:border-ub-orange transition-colors duration-300">
                    <div className="flex justify-between items-start">
                        <div>
                            <div className="text-lg md:text-xl font-semibold">NexusStream — Distributed Live Video Engine</div>
                            <div className="text-sm text-gray-400">Go • WebRTC • Docker • Redis</div>
                        </div>
                    </div>
                    <p className="mt-2 text-sm md:text-base">
                        Architected a scalable live streaming backend supporting 10k+ concurrent connections with sub-second latency using custom signaling and adaptive bitrate streaming. Deployed microservices on AWS EC2 with Dockerized auto-scaling.
                    </p>
                    <div className="mt-3 flex flex-wrap gap-2">
                        <span className="px-2 py-0.5 bg-gray-800 rounded-full text-xs text-gray-300">Low Latency</span>
                        <span className="px-2 py-0.5 bg-gray-800 rounded-full text-xs text-gray-300">Distributed Systems</span>
                        <span className="px-2 py-0.5 bg-gray-800 rounded-full text-xs text-gray-300">Streaming</span>
                    </div>
                </div>

                <div className="border border-gray-700 rounded-lg p-4 hover:border-ub-orange transition-colors duration-300">
                    <div className="flex justify-between items-start">
                        <div>
                            <div className="text-lg md:text-xl font-semibold">CodeSynthetix — AI-Powered Code Auditor</div>
                            <div className="text-sm text-gray-400">Python • TensorFlow • Next.js</div>
                        </div>
                    </div>
                    <p className="mt-2 text-sm md:text-base">
                        Built a SaaS platform leveraging LLMs to automate security vulnerability detection in pull requests, reducing manual code review time by 60% while detecting exploits with 94% accuracy.
                    </p>
                    <div className="mt-3 flex flex-wrap gap-2">
                        <span className="px-2 py-0.5 bg-gray-800 rounded-full text-xs text-gray-300">LLM</span>
                        <span className="px-2 py-0.5 bg-gray-800 rounded-full text-xs text-gray-300">Security</span>
                        <span className="px-2 py-0.5 bg-gray-800 rounded-full text-xs text-gray-300">SaaS</span>
                    </div>
                </div>

                <div className="border border-gray-700 rounded-lg p-4 hover:border-ub-orange transition-colors duration-300">
                    <div className="flex justify-between items-start">
                        <div>
                            <div className="text-lg md:text-xl font-semibold">VaultChain — Decentralized Identity System</div>
                            <div className="text-sm text-gray-400">Solidity • Ethereum • Web3.js</div>
                        </div>
                    </div>
                    <p className="mt-2 text-sm md:text-base">
                        Developed a self-sovereign identity protocol enabling credential management without centralized authorities. Wrote gas-optimized smart contracts with comprehensive tests in Hardhat.
                    </p>
                    <div className="mt-3 flex flex-wrap gap-2">
                        <span className="px-2 py-0.5 bg-gray-800 rounded-full text-xs text-gray-300">Web3</span>
                        <span className="px-2 py-0.5 bg-gray-800 rounded-full text-xs text-gray-300">Security</span>
                        <span className="px-2 py-0.5 bg-gray-800 rounded-full text-xs text-gray-300">Identity</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

function Resume() {
    return (
        <div className="w-full px-1 md:px-4 py-2">
            <div className="text-xl md:text-2xl font-bold mb-4">My Resume</div>
            
            <div className="space-y-6">
                <div className="bg-gray-800 rounded-lg p-6 shadow-lg">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
                        <div>
                            <h2 className="text-2xl font-bold text-white">Akshita Rawat</h2>
                            <p className="text-gray-300">Full Stack Developer | Web3 & Cloud</p>
                            <p className="text-sm text-gray-400">Jaipur, Rajasthan, India</p>
                            <p className="text-sm text-gray-400 space-x-2 mt-1">
                                <span><a className="hover:text-ub-orange" href="mailto:rawatakshita0987@gmail.com">rawatakshita0987@gmail.com</a></span>
                                <span>|</span>
                                <span><a className="hover:text-ub-orange" href="https://github.com/LittleCodr" target="_blank" rel="noreferrer">github.com/LittleCodr</a></span>
                                <span>|</span>
                                <span><a className="hover:text-ub-orange" href="https://linkedin.com/in/akshita-rawat-b64359284" target="_blank" rel="noreferrer">LinkedIn</a></span>
                            </p>
                        </div>
                        <a 
                            href="/files/resume.pdf" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="mt-4 md:mt-0 inline-flex items-center px-6 py-3 bg-ub-orange text-white rounded-lg hover:bg-opacity-90 transition-colors"
                        >
                            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                            </svg>
                            Download Full Resume (PDF)
                        </a>
                    </div>

                    <div className="border-t border-gray-700 pt-6 mt-6">
                        <h3 className="text-xl font-semibold mb-4 text-ub-orange">Professional Summary</h3>
                        <p className="text-gray-300 text-sm md:text-base">
                            Results-driven Full Stack Developer with a strong command of modern web technologies and decentralized systems. Proven ability to build production-grade applications using React, Node.js, and cloud infrastructure. Winner of national hackathons focused on high-performance architecture. Seeking an internship to leverage deep technical skills and deliver immediate value to engineering teams.
                        </p>
                    </div>

                    <div className="border-t border-gray-700 pt-6 mt-6">
                        <h3 className="text-xl font-semibold mb-4 text-ub-orange">Professional Experience</h3>

                        <div className="mb-6">
                            <div className="flex justify-between items-start">
                                <div>
                                    <h4 className="text-lg font-semibold">Web Development Intern</h4>
                                    <p className="text-gray-300">International Hacker Zone • Remote</p>
                                </div>
                                <span className="text-gray-400 text-sm">Aug 2025 - Sep 2025</span>
                            </div>
                            <ul className="mt-2 text-gray-300 list-disc list-inside space-y-1">
                                <li>Built high-fidelity, responsive UI components in React.js, improving UI speed by 30%.</li>
                                <li>Integrated complex REST APIs for real-time data and implemented Redux state management.</li>
                                <li>Collaborated remotely to deliver production-quality features on tight timelines.</li>
                            </ul>
                        </div>

                        <div className="mb-6">
                            <div className="flex justify-between items-start">
                                <div>
                                    <h4 className="text-lg font-semibold">SDE Intern</h4>
                                    <p className="text-gray-300">Rentits • Bangalore (Hybrid)</p>
                                </div>
                                <span className="text-gray-400 text-sm">May 2025 - Jul 2025</span>
                            </div>
                            <ul className="mt-2 text-gray-300 list-disc list-inside space-y-1">
                                <li>Engineered the core inventory management microservice in Node.js and Docker handling 500+ daily transactions.</li>
                                <li>Optimized PostgreSQL queries, cutting data retrieval latency by 40% on high-traffic endpoints.</li>
                                <li>Implemented a real-time chat feature with Socket.io and Redis alongside product stakeholders.</li>
                            </ul>
                        </div>

                        <div className="mb-2">
                            <div className="flex justify-between items-start">
                                <div>
                                    <h4 className="text-lg font-semibold">Campus Ambassador</h4>
                                    <p className="text-gray-300">IIT Guwahati</p>
                                </div>
                                <span className="text-gray-400 text-sm">Mar 2025 - Sep 2025</span>
                            </div>
                            <ul className="mt-2 text-gray-300 list-disc list-inside space-y-1">
                                <li>Orchestrated promotional campaigns for technical summits, increasing participation by 40%.</li>
                                <li>Coordinated outreach to student communities and streamlined event communication.</li>
                            </ul>
                        </div>
                    </div>

                    <div className="border-t border-gray-700 pt-6 mt-6">
                        <h3 className="text-xl font-semibold mb-4 text-ub-orange">Education</h3>
                        <div className="mb-2">
                            <div className="flex justify-between items-start">
                                <div>
                                    <h4 className="text-lg font-semibold">Banasthali Vidyapith</h4>
                                    <p className="text-gray-300">B.Tech, Electronics and Communication</p>
                                </div>
                                <span className="text-gray-400 text-sm">Jul 2023 - May 2027</span>
                            </div>
                            <p className="mt-1 text-gray-300 text-sm">Jaipur, India</p>
                        </div>
                    </div>

                    <div className="border-t border-gray-700 pt-6 mt-6">
                        <h3 className="text-xl font-semibold mb-4 text-ub-orange">Skills</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <h4 className="font-medium text-gray-200 mb-2">Languages & Backend</h4>
                                <div className="flex flex-wrap gap-2">
                                    <span className="px-3 py-1 bg-gray-700 rounded-full text-sm">JavaScript/TypeScript</span>
                                    <span className="px-3 py-1 bg-gray-700 rounded-full text-sm">Node.js</span>
                                    <span className="px-3 py-1 bg-gray-700 rounded-full text-sm">Express</span>
                                    <span className="px-3 py-1 bg-gray-700 rounded-full text-sm">PostgreSQL</span>
                                    <span className="px-3 py-1 bg-gray-700 rounded-full text-sm">MongoDB</span>
                                    <span className="px-3 py-1 bg-gray-700 rounded-full text-sm">Redis</span>
                                </div>
                            </div>
                            <div>
                                <h4 className="font-medium text-gray-200 mb-2">Frontend</h4>
                                <div className="flex flex-wrap gap-2">
                                    <span className="px-3 py-1 bg-gray-700 rounded-full text-sm">React.js</span>
                                    <span className="px-3 py-1 bg-gray-700 rounded-full text-sm">Next.js (SSR)</span>
                                    <span className="px-3 py-1 bg-gray-700 rounded-full text-sm">Redux</span>
                                    <span className="px-3 py-1 bg-gray-700 rounded-full text-sm">Tailwind CSS</span>
                                    <span className="px-3 py-1 bg-gray-700 rounded-full text-sm">Material UI</span>
                                    <span className="px-3 py-1 bg-gray-700 rounded-full text-sm">WebRTC</span>
                                </div>
                            </div>
                            <div>
                                <h4 className="font-medium text-gray-200 mb-2">DevOps / Cloud</h4>
                                <div className="flex flex-wrap gap-2">
                                    <span className="px-3 py-1 bg-gray-700 rounded-full text-sm">Docker</span>
                                    <span className="px-3 py-1 bg-gray-700 rounded-full text-sm">Kubernetes</span>
                                    <span className="px-3 py-1 bg-gray-700 rounded-full text-sm">AWS (EC2, S3)</span>
                                    <span className="px-3 py-1 bg-gray-700 rounded-full text-sm">CI/CD</span>
                                    <span className="px-3 py-1 bg-gray-700 rounded-full text-sm">Nginx</span>
                                    <span className="px-3 py-1 bg-gray-700 rounded-full text-sm">Firebase</span>
                                </div>
                            </div>
                            <div>
                                <h4 className="font-medium text-gray-200 mb-2">Web3 & Tools</h4>
                                <div className="flex flex-wrap gap-2">
                                    <span className="px-3 py-1 bg-gray-700 rounded-full text-sm">Solidity</span>
                                    <span className="px-3 py-1 bg-gray-700 rounded-full text-sm">Hardhat</span>
                                    <span className="px-3 py-1 bg-gray-700 rounded-full text-sm">Ethers.js</span>
                                    <span className="px-3 py-1 bg-gray-700 rounded-full text-sm">IPFS</span>
                                    <span className="px-3 py-1 bg-gray-700 rounded-full text-sm">Git/GitHub</span>
                                    <span className="px-3 py-1 bg-gray-700 rounded-full text-sm">Postman</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="border-t border-gray-700 pt-6 mt-6">
                        <h3 className="text-xl font-semibold mb-4 text-ub-orange">Achievements & Certifications</h3>
                        <ul className="list-disc list-inside space-y-2 text-gray-300">
                            <li>Winner, TriWizardathon-1.0 (National Hackathon) — Best Distributed Systems implementation.</li>
                            <li>Top 15 Finalist, Hackindia 25 — Selected from top 1% of 1000+ teams.</li>
                            <li>Scholar, Shefi'14 — Blockchain & Web3 cohort scholarship.</li>
                            <li>Core Member, GeeksForGeeks (GFG) Student Chapter.</li>
                        </ul>
                    </div>
