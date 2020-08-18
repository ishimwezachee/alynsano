import React from 'react';
import { SocialMediaIconsReact } from 'social-media-icons-react';

import './subscribe.css';

const Subscribe = ({id}) => {
	return (
		<div className="HeadContainer" id={id}>
			<form action="#">
				<div className="formSection">
					<div className="upperInput">
						<p id="subscrbeText">Subscribe Form</p>
						<p id="stayUpdate">Stay up to date</p>
						<input type="text" className="input1" name="Name" placeholder="Email Address" />
						<p className="submitOne">submit</p>
					</div>

					<div className="lowerInnput">
						<p id="form2">Subscribe Form</p>
						<div>
							<input type="text" className="input2" name="email" placeholder="Email Address" />
							<p className="submitTwo">Submit</p>
						</div>
					</div>

					<div className="footer">
						<div id="icon">
							<SocialMediaIconsReact icon="facebook" backgroundColor="#000" url="#" />
						</div>
						<div id="icon">
							<SocialMediaIconsReact icon="youtube-play" backgroundColor="#000" url="#" />
						</div>
						<div id="icon">
							<SocialMediaIconsReact icon="twitter" backgroundColor="#000" url="#" />
						</div>
						<div id="icon">
							<SocialMediaIconsReact icon="instagram" backgroundColor="#000" url="#" />
						</div>
					</div>
				</div>
			</form>
			<div classNme="Lastfooter">
				<p id="footerText">&copy; 2020 Copyright , All rights reserved.</p>
			</div>
		</div>
	);
};

export default Subscribe;
