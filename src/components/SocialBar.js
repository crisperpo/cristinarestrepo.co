import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faGithub, faLinkedinIn, faInstagram, faGooglePlus } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

library.add(faGithub, faLinkedinIn, faInstagram, faGooglePlus);

class SocialBar extends React.Component {
    render() {
        return(
            <div className="SocialBar">
                <a href="https://github.com/crispe1586" target="_blank">
                    <FontAwesomeIcon icon={['fab', 'github']} />
                </a>
                <a href="https://www.linkedin.com/in/cristina-restrepo-lopez-03b51220"  target="_blank">
                    <FontAwesomeIcon icon={['fab', 'linkedin-in']} />
                </a>
                <a href="mailto:crispe1586@gmail.com" target="_blank">
                    <FontAwesomeIcon icon={['fab', 'google-plus']} />
                </a>
                <a href="https://www.instagram.com/mcrlsctcvvd"  target="_blank">
                    <FontAwesomeIcon icon={['fab', 'instagram']} />
                </a>
            </div>
        )
    }
}

export default SocialBar;