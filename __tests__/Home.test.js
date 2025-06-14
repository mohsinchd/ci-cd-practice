import React from "react";
import { render, screen } from "@testing-library/react";
import Home from "../app/page";

describe("Home Page", () => {
  it("contains 'Hello world' text", () => {
    render(<Home />);

    const startedText = screen.getByText(/Hello world/i);
    expect(startedText).toBeInTheDocument();
  });
});
