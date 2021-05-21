{
  "compilerOptions": {
    "module": "commonjs",
    "target": "es6",
    "baseUrl": ".",
    "paths": {
      "~/*": ["./*"],
      "@/*": ["./src/*"],
      "~~/*": ["./*"],
      "@@/*": ["./*"]
    }
  },
  "exclude": ["node_modules", ".cache", "dist"]
}