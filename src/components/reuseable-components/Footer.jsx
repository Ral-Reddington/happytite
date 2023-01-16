import React from 'react';

const Footer = () => {
	return (
		<>
			<div className='footer-class text-center'>
				<span>Copyright &copy; </span>
        <span> {new Date().getFullYear()} </span>
        <span> published by Akabike Ebubechukwu Raluchukwu</span>
			</div>
		</>
	);
};

export default Footer;
