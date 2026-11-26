import { describe, it, expect } from "vitest";
import { readFileSync, readdirSync } from "node:fs";
import { join } from "node:path";

const COMPONENTS_DIR = join(process.cwd(), "src", "components");

// Plataformas que o Jacson customiza, mas que NUNCA podem aparecer pelo nome
// no site: devem ser descritas como "plataforma de atendimento omnichannel com
// CRM e IA" e "plataforma IoT", genéricas.
const BANNED_NAMES = ["chatwoot", "thingsboard", "things board", "thingsboards"];

function sourceFiles(dir: string): string[] {
  const out: string[] = [];
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) out.push(...sourceFiles(full));
    else if (/\.(tsx|ts)$/.test(entry.name)) out.push(full);
  }
  return out;
}

const allSources = [
  ...sourceFiles(COMPONENTS_DIR),
  join(process.cwd(), "index.html"),
].map((file) => ({
  file,
  text: readFileSync(file, "utf8").toLowerCase(),
}));

describe("nomes de plataformas parceiras não podem aparecer no site", () => {
  it("nenhum arquivo menciona a plataforma de atendimento pelo nome", () => {
    const offenders = allSources
      .filter((s) => s.text.includes("chatwoot"))
      .map((s) => s.file);
    expect(offenders).toEqual([]);
  });

  it("nenhum arquivo menciona a plataforma de IoT pelo nome", () => {
    const offenders = allSources
      .filter((s) => BANNED_NAMES.some((n) => n !== "chatwoot" && s.text.includes(n)))
      .map((s) => s.file);
    expect(offenders).toEqual([]);
  });

  it("o serviço de IoT existe e é descrito de forma genérica", () => {
    const services = readFileSync(join(COMPONENTS_DIR, "Services.tsx"), "utf8");
    expect(services).toContain("Plataforma IoT Customizada");
    expect(services).toContain("Internet das Coisas");
  });

  it("o atendimento é descrito como plataforma omnichannel com CRM e IA", () => {
    const services = readFileSync(join(COMPONENTS_DIR, "Services.tsx"), "utf8");
    expect(services).toContain("omnichannel");
    expect(services).toContain("CRM");
  });
});
