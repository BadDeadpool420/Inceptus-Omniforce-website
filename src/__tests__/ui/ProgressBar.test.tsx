import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import ProgressBar from "@/components/ui/ProgressBar";

describe("ProgressBar component", () => {
  it("renders the label", () => {
    render(<ProgressBar label="Core Architecture" value={85} />);
    expect(screen.getByText("Core Architecture")).toBeInTheDocument();
  });

  it("renders the percentage value", () => {
    render(<ProgressBar label="Test" value={72} />);
    expect(screen.getByText("72%")).toBeInTheDocument();
  });

  it("renders with 0%", () => {
    render(<ProgressBar label="Empty" value={0} />);
    expect(screen.getByText("0%")).toBeInTheDocument();
    expect(screen.getByText("Empty")).toBeInTheDocument();
  });

  it("renders with 100%", () => {
    render(<ProgressBar label="Full" value={100} />);
    expect(screen.getByText("100%")).toBeInTheDocument();
  });

  it("renders the progress track element", () => {
    const { container } = render(<ProgressBar label="Track" value={50} />);
    // The outer track div
    const track = container.querySelector(".bg-slate-800");
    expect(track).toBeInTheDocument();
  });
});
