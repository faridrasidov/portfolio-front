/** @type {import('tailwindcss').Config} */

export default {
    content: ["./index.html", "./src/**/*.{js,vue}"],
    theme: {
        extend: {
            colors: {
                purple1: "#1b1429",
                purple2: "#140F23",
                footer: "#0a0416",
                navbar: "#1b1a2ea9",
            },
            fontFamily: {
                sans: ["Raleway", "arial"],
            },
            spacing: {
                37.5: "37.5rem",
            },
            boxShadow: {
                spec: "0px 0px 5px 5px rgba(0 0 0 / 0.05)",
                navbar: "0px 10px 10px 0px rgba(9, 5, 29, 0.171)",
                skills: "0px 0px 18px 7px rgba(9, 5, 29, 0.171)",
                project: "0px 0px 15px 2px rgba(9, 5, 29, 0.171)",
                projectHover: "0px 0px 18px 5px rgba(9, 5, 29, 0.171)",
                social: "inset 0 0px 8px 2px rgb(0 0 0 / 0.55), 0px 0px 10px 4px rgba(0, 0, 0, 0.171)",
            },
            transformOrigin: {
                custom: "70% 70%",
            },
            animation: {
                wave: "wave 2.1s infinite ",
            },
            keyframes: {
                wave: {
                    "0%": {transform: "rotate(0deg)"},
                    "10%": {transform: "rotate(14deg)"},
                    "20%": {transform: "rotate(-8deg)"},
                    "30%": {transform: "rotate(14deg)"},
                    "40%": {transform: "rotate(-4deg)"},
                    "50%": {transform: "rotate(10deg)"},
                    "60%": {transform: "rotate(0deg)"},
                    "100%": {transform: "rotate(0deg)"},
                },
            },
            gridTemplateColumns: {
                5: "1fr 1fr 1fr 1fr 1fr",
                xs: "repeat(auto-fit,minmax(150px,1fr))",
            },
        },
    },
    plugins: [],
};
