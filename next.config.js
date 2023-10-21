const withImages = require("next-images");
const withMDX = require('@next/mdx')();

/** @type {import('next').NextConfig} */
const nextConfig = {
    pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
}

module.exports = withImages();
module.exports = withMDX(nextConfig)
