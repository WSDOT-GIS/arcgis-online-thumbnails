// @ts-check

/**
 * @type {import("svgo").Config}
 */
export default {
  multipass: true,
  plugins: [
    {
      name: "preset-default",
      params: {
        overrides: {
            inlineStyles: false,
        },
      },
    },
    "removeXlink"
  ],
};
