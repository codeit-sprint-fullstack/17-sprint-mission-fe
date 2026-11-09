import { existsSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

function readEnvFile(filePath) {
  if (!existsSync(filePath)) return {};

  return Object.fromEntries(
    readFileSync(filePath, "utf8")
      .split(/\r?\n/)
      .map((line) => line.trim())
      .filter((line) => line && !line.startsWith("#"))
      .map((line) => {
        const separator = line.indexOf("=");
        if (separator < 1) return null;

        const key = line.slice(0, separator).trim();
        const value = line
          .slice(separator + 1)
          .trim()
          .replace(/^(["'])(.*)\1$/, "$2");
        return [key, value];
      })
      .filter(Boolean),
  );
}

const projectRoot = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const defaults = readEnvFile(resolve(projectRoot, ".env.example"));
const local = readEnvFile(resolve(projectRoot, ".env"));
const apiBaseUrl = process.env.API_BASE_URL ?? local.API_BASE_URL ?? defaults.API_BASE_URL;

if (!apiBaseUrl || !URL.canParse(apiBaseUrl)) {
  throw new Error("API_BASE_URL이 없거나 올바른 URL 형식이 아닙니다.");
}

const normalizedApiBaseUrl = apiBaseUrl.replace(/\/+$/, "");
const output = `export const API_BASE_URL = ${JSON.stringify(normalizedApiBaseUrl)};\n`;
writeFileSync(resolve(projectRoot, "js/api-config.js"), output, "utf8");
console.log("js/api-config.js를 생성했습니다.");
