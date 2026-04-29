import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { renderHook, act } from "@testing-library/react";
import { useTypewriter } from "@/hooks/useTypewriter";

describe("useTypewriter hook", () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it("starts with an empty string", () => {
    const { result } = renderHook(() => useTypewriter(["Hello"]));
    expect(result.current).toBe("");
  });

  it("types one character after the first interval", async () => {
    const { result } = renderHook(() => useTypewriter(["Hello"], 80));
    await act(async () => {
      vi.advanceTimersByTime(80);
    });
    expect(result.current).toBe("H");
  });

  it("types two characters after two intervals", async () => {
    const { result } = renderHook(() => useTypewriter(["Hello"], 80));
    // Each state update re-schedules, advance step by step
    await act(async () => { vi.advanceTimersByTime(80); });
    await act(async () => { vi.advanceTimersByTime(80); });
    expect(result.current).toBe("He");
  });

  it("is not yet deleting while still typing", async () => {
    const word = "Hi";
    const speed = 50;
    const { result } = renderHook(() => useTypewriter([word], speed, 5000));

    // Advance one step — should be "H", still growing
    await act(async () => { vi.advanceTimersByTime(speed); });
    expect(result.current.length).toBe(1);
    expect(result.current).toBe("H");
  });

  it("accepts multiple words without throwing", () => {
    expect(() => renderHook(() => useTypewriter(["Hello", "World"]))).not.toThrow();
  });
});
