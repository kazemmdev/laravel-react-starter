module.exports = {
    content: [
        "./resources/**/*.blade.php",
        "./resources/**/*.js",
        "./resources/**/*.jsx",
    ],
    theme: {
        extend: {
            transformOrigin: {
                0: "0%",
            },
            zIndex: {
                "-1": "-1",
            },
        },
    },
    variants: {
        extend: {
            borderColor: ["responsive", "hover", "focus", "focus-within"],
        },
    },
    plugins: [],
};
