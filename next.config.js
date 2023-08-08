/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: (() => {
    let compilerConfig = {
      styledComponents: true
    }

    if (process.env.NODE_ENV === 'production') {
      compilerConfig = {
        ...compilerConfig,
      reactRemoveProperties: { properties: ['^data-testid$']}
      }
    }

    return compilerConfig
  })(),
  async rewrites() {
    return [
      {
      source: `${process.env.NEXT_PUBLIC_API_BASE_PATH}/:match*`,
      destination: `${process.env.API_BASE_URL}/:match*`,
      },
    ]
  },
}

module.exports = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack'],
    })

    return config
  },
}
