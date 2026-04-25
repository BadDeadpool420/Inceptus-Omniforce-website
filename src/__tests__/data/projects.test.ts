import { describe, it, expect } from "vitest";
import { PROJECTS, STATUS_CONFIG } from "@/lib/data/projects";

describe("PROJECTS data", () => {
  it("has at least one project", () => {
    expect(PROJECTS.length).toBeGreaterThan(0);
  });

  it("every project has required string fields", () => {
    for (const p of PROJECTS) {
      expect(typeof p.id).toBe("number");
      expect(typeof p.title).toBe("string");
      expect(p.title.length).toBeGreaterThan(0);
      expect(typeof p.description).toBe("string");
      expect(p.description.length).toBeGreaterThan(0);
      expect(typeof p.icon).toBe("string");
      expect(typeof p.accentColor).toBe("string");
    }
  });

  it("every project has a valid status", () => {
    const validStatuses = ["live", "beta", "wip"] as const;
    for (const p of PROJECTS) {
      expect(validStatuses).toContain(p.status);
    }
  });

  it("every project has at least one tag", () => {
    for (const p of PROJECTS) {
      expect(Array.isArray(p.tags)).toBe(true);
      expect(p.tags.length).toBeGreaterThan(0);
    }
  });

  it("project ids are unique", () => {
    const ids = PROJECTS.map((p) => p.id);
    expect(new Set(ids).size).toBe(ids.length);
  });

  it("STATUS_CONFIG has entries for all statuses", () => {
    const statuses = ["live", "beta", "wip"] as const;
    for (const s of statuses) {
      expect(STATUS_CONFIG[s]).toBeDefined();
      expect(typeof STATUS_CONFIG[s].label).toBe("string");
      expect(typeof STATUS_CONFIG[s].color).toBe("string");
    }
  });
});
