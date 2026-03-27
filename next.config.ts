import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Imagens externas permitidas (Spotify CDN para capas de álbum)
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.scdn.co",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "mosaic.scdn.co",
        pathname: "/**",
      },
    ],
  },

  // Headers de segurança para produção
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Frame-Options", value: "DENY" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
        ],
      },
    ];
  },

  // Variáveis de ambiente que podem ser expostas ao cliente
  // (as que começam com NEXT_PUBLIC_ são automáticas)
  serverRuntimeConfig: {
    // Somente disponível no servidor
  },
  publicRuntimeConfig: {
    // Disponível no cliente — manter mínimo
  },
};

export default nextConfig;
