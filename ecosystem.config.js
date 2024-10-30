module.exports = {
    apps: [{
        name: "Support Sphere", // Replace with your desired app name
        script: "npm", // Script to run your Next.js app
        args: "start", // Arguments to pass to the script
        cwd: ".",
        watch: true,
        env: {
            NODE_ENV: "production",
        }
    }]
};