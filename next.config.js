/** @type {import('next').NextConfig} */
module.exports = {
    images: {
      dangerouslyAllowSVG: true,
      remotePatterns: [
        {
          protocol: "https",
          hostname: "ia802502.us.archive.org",
          port: "",
          pathname: "/11/items/mbid-81a87ad6-10b8-4fe5-85b2-d65e3864a5b0/mbid-81a87ad6-10b8-4fe5-85b2-d65e3864a5b0-32715657072_thumb250.jpg",
        },
        {
          protocol: "https",
          hostname: "i1.sndcdn.com",
          port: "",
          pathname: "/artworks-000235005055-mww7ms-t500x500.jpg",
        },
        {
          protocol: "https",
          hostname: "placewaifu.com",
          port: "",
          pathname: "/image/**",
        },
      ],
    },
  };
