/** @type {import('next').NextConfig} */
const nextConfig = {
	output: "export",
	    images: {
			remotePatterns: [
				{
				  protocol: "https",
				  hostname: "openweathermap.org",
				}
			  ]    },
};

export default nextConfig;
