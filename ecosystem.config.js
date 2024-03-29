module.exports = {
  apps: [
    {
      name: "ec-server",
      script: "src/index.ts",
      instances: 0,
      interpreter: "ts-node",
      exec_mode: "cluster",
      env_production: {
        NODE_ENV: "production",
      },
      env_development: {
        NODE_ENV: "development",
      },
    },
  ],
};
