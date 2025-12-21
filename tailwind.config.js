/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./app/**/*.{js,jsx,ts,tsx}",
        "./components/**/*.{js,jsx,ts,tsx}",
    ],
    presets: [require("nativewind/preset")],
    theme: {
        extend: {
            fontFamily: {
                BitterRegular: ["Bitter-Regular", "sans-serf"],
                BitterLight: ["Bitter-Light", "sans-serf"],
                BitterMedium: ["Bitter-Medium", "sans-serf"],
                BitterBold: ["Bitter-Bold", "sans-serf"],
                BitterExtraBold: ["Bitter-ExtraBold", "sans-serf"],
            },
            colors: {
                primary: "#800080ff",
                secondary: "#00a3a0ff",
                accent: "#bcbe00ff",
                success: "#00bc00ff",
                danger: "#d40000ff",
                warning: "#e05500ff",
            },
        },
    },
    plugins: [],
};
