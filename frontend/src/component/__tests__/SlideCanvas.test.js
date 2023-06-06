import React from "react";
import { cleanup, render, screen } from "@testing-library/react";
import SlideCanvas from "../SlideCanvas";
import { ShoppingCartProvider } from "../../context/shoppingCartContext";

describe("Test slideCanvas component", () => {
  afterEach(() => cleanup());

  test("Should not render slide ", () => {
    render(
      <ShoppingCartProvider>
        <SlideCanvas isOpen={false} />
      </ShoppingCartProvider>
    );

    expect(screen.queryByRole("wrapper")).toBeNull();
  });

  test("Should render slide and see the component inside", async () => {
     render(
      <ShoppingCartProvider>
        <SlideCanvas isOpen={true} />
      </ShoppingCartProvider>
    );

    expect(screen.getByRole("wrapper")).toBeInTheDocument();
    expect(screen.getByText("Check out")).toBeInTheDocument();
    expect(screen.getByText(/Total:/)).toBeInTheDocument();
  });
});
