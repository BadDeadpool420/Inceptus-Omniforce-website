import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Badge from "@/components/ui/Badge";
import { STATUS_CONFIG } from "@/lib/data/projects";

describe("Badge component", () => {
  it("renders the correct label for 'live' status", () => {
    render(<Badge status="live" />);
    expect(screen.getByText(STATUS_CONFIG.live.label)).toBeInTheDocument();
  });

  it("renders the correct label for 'beta' status", () => {
    render(<Badge status="beta" />);
    expect(screen.getByText(STATUS_CONFIG.beta.label)).toBeInTheDocument();
  });

  it("renders the correct label for 'wip' status", () => {
    render(<Badge status="wip" />);
    expect(screen.getByText(STATUS_CONFIG.wip.label)).toBeInTheDocument();
  });

  it("applies the correct colour class for each status", () => {
    const { container } = render(<Badge status="live" />);
    const span = container.querySelector("span");
    expect(span?.className).toContain("emerald");
  });

  it("accepts an extra className", () => {
    const { container } = render(<Badge status="beta" className="test-class" />);
    expect(container.querySelector("span")?.className).toContain("test-class");
  });
});
