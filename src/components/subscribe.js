import React from 'react';
import { SocialMediaIconsReact } from 'social-media-icons-react';

import './subscribe.css';

const Subscribe = () => {
	return (
		<div className="mainContainer">
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
							<SocialMediaIconsReact icon="twitter" backgroundColor="#000" url="#" />
						</div>
						<div id="icon">
							<SocialMediaIconsReact icon="linkedin" backgroundColor="#000" url="#" />
						</div>
						<div id="icon">
							<SocialMediaIconsReact icon="instagram" backgroundColor="#000" url="#" />
						</div>
					</div>
				
                </div>
			</form>
		</div>
	);
};

export default Subscribe;
