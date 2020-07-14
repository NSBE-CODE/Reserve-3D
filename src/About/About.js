import React, { useState } from 'react';
import cx from "classnames";
import Collapse from "@kunukn/react-collapse";

import './styles/about.css';
import FeatureImage from '../assets/about-feature-image.jpg'

// icons
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


const About = (props) => {
    const [isOpen1, setIsOpen1] = useState(false);
    const [isOpen2, setIsOpen2] = useState(false);
    const [isOpen3, setIsOpen3] = useState(false);
    const [isOpen4, setIsOpen4] = useState(false);

    return (
        <div className="about">
            <div className="about-header" >
                    <div className="about-feature-image-container">
                        &nbsp;
                    </div>
                    <div className="about-description">
                        <h1>About</h1>
                        <div id="p-container">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </div>
                        <button id="button">View Student Projects</button>
                    </div>
            </div>

            <div className="contact-information">
                <div id="title">Contact Information</div>
                <div className="professor-information-container">
                    <div className="professor-information__profile-icon">
                        &nbsp;
                    </div>
                    <div className="information__contact">
                        <h2>Dr. Dickerll</h2>
                        <h3>Professor</h3>
                        <div id="about">Lorem idivsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>
                        <p>(555) 123 4567</p>
                        <p id="email">janedone@example.com</p>
                    </div>
                    <div className="information__office-hours">
                        <div id="title">Office Hourz</div>
                        <p>Monday</p>
                        <p>Tuesday</p>
                    </div>
                </div>

                <div className="section-break">&nbsp;</div>

                <div className="peer-mentor-information-container">
                    <div className="peer-mentor-information__profile-icon">
                        &nbsp;
                    </div>
                    <div className="information__contact">
                        <h2>Jane Doe</h2>
                        <h3>Peer Mentor</h3>
                        <p id="about">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        <p>(555) 123 4567</p>
                        <p>janedone@example.com</p>
                    </div>
                    <div className="information__office-hours">
                        <h2>Office Hours</h2>
                        <p>Monday</p>
                        <p>Tuesday</p>
                    </div>
                </div>

                <div className="peer-mentor-information-container">
                    <div className="peer-mentor-information__profile-icon">
                        &nbsp;
                    </div>
                    <div className="information__contact">
                        <h2>Jane Doe</h2>
                        <h3>Peer Mentor</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        <p>(555) 123 4567</p>
                        <p>janedone@example.com</p>
                    </div>
                    <div className="information__office-hours">
                        <h2>Office Hours</h2>
                        <p>Monday</p>
                        <p>Tuesday</p>
                    </div>
                </div>
            </div>
            
            <div className="faq">
                <div className="faq-header">
                    <div id="title">FAQ</div>
                    <button id="new-button">
                        New
                    </button>
                </div>
                <div className="faq-question-container" onClick={() => setIsOpen1(!isOpen1)}>
                    <div className="rotate90">
                        <svg className={cx("faq-icon", { "faq-icon--expanded": isOpen1 })} viewBox="6 0 12 24">
                            <polygon points="8 0 6 1.8 14.4 12 6 22.2 8 24 18 12" />
                        </svg>
                    </div>
                    <div className="faq-question">How do you use a 3D printer?</div>
                    <button className="faq-edit-button">Edit</button>
                </div>
                <Collapse isOpen={isOpen1} className="collapse">
                    <div className="faq-answer">
                        idk... this is just the reservation website. Google it.
                    </div>
                </Collapse>

                <div className="faq-question-container" onClick={() => setIsOpen2(!isOpen2)}>
                    <div className="rotate90">
                        <svg className={cx("faq-icon", { "faq-icon--expanded": isOpen2 })} viewBox="6 0 12 24">
                            <polygon points="8 0 6 1.8 14.4 12 6 22.2 8 24 18 12" />
                        </svg>
                    </div>
                    <div className="faq-question">What happens if I miss a reservation?</div>
                    <button className="faq-edit-button">Edit</button>
                </div>
                <Collapse isOpen={isOpen2} className="collapse">
                    <div className="faq-answer">
                        Yo ass gets banned. Well, after 3 missed reservations at least. Bans typically last 2 weeks, but may be extended without notice. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

                    </div>
                </Collapse>

                <div className="faq-question-container" onClick={() => setIsOpen3(!isOpen3)}>
                    <div className="rotate90">
                        <svg className={cx("faq-icon", { "faq-icon--expanded": isOpen3 })} viewBox="6 0 12 24">
                            <polygon points="8 0 6 1.8 14.4 12 6 22.2 8 24 18 12" />
                        </svg>
                    </div>
                    <div className="faq-question">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua?</div>
                    <button className="faq-edit-button">Edit</button>
                </div>
                <Collapse isOpen={isOpen3} className="collapse">
                    <div className="faq-answer">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

                    </div>
                </Collapse>

                <div className="faq-question-container" onClick={() => setIsOpen4(!isOpen4)}>
                    <div className="rotate90">
                        <svg className={cx("faq-icon", { "faq-icon--expanded": isOpen4 })} viewBox="6 0 12 24">
                            <polygon points="8 0 6 1.8 14.4 12 6 22.2 8 24 18 12" />
                        </svg>
                    </div>
                    <div className="faq-question">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua?</div>
                    <button className="faq-edit-button">Edit</button>
                </div>
                <Collapse isOpen={isOpen4} className="collapse">
                    <div className="faq-answer">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

                    </div>
                </Collapse>

            </div>

        </div>
    )
};

export default About;