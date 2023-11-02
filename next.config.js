/** @type {import('next').NextConfig} */

const { PHASE_DEVELOPMENT_SERVER } = require('next/constants');

const nextConfig = (phase) => {

  if(phase === PHASE_DEVELOPMENT_SERVER){
    return {
      env: {
        mongodb_username: 'nextdathil',
        mongodb_password: '5hGPUwnGCqIpHUgz',
        mongodb_clustername: 'cluster0',
        mongodb_database: 'nextdevnetsdev',
      },
      reactStrictMode: true,
    };
  }

  return {
    env: {
      mongodb_username: 'nextdathil',
      mongodb_password: '5hGPUwnGCqIpHUgz',
      mongodb_clustername: 'cluster0',
      mongodb_database: 'nextdevnets',
    },
    reactStrictMode: true,
  }
  
}

module.exports = nextConfig
