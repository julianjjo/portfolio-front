/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
        return [
            {
                source: "/api/:path*",
                destination: "https://api.julian-dev.dev/:path*",
            },
        ];
    },
};

export default nextConfig;
