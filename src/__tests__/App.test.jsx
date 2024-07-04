import { render, screen, cleanup } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";

import App from "../App";
import Products from "../pages/Products";
import { GlobalStateContext } from "../GlobalStateContext";

const mockProducts = [
  {
    "id": 1,
    "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    "price": 109.95,
    "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    "category": "men's clothing",
    "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    "rating": {
      "rate": 3.9,
      "count": 120
    }
  },
  {
    "id": 8,
    "title": "Pierced Owl Rose Gold Plated Stainless Steel Double",
    "price": 10.99,
    "description": "Rose Gold Plated Double Flared Tunnel Plug Earrings. Made of 316L Stainless Steel",
    "category": "jewelery",
    "image": "https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg",
    "rating": {
      "rate": 1.9,
      "count": 100
    }
  },
  {
    "id": 12,
    "title": "WD 4TB Gaming Drive Works with Playstation 4 Portable External Hard Drive",
    "price": 114,
    "description": "Expand your PS4 gaming experience, Play anywhere Fast and easy, setup Sleek design with high capacity, 3-year manufacturer's limited warranty",
    "category": "electronics",
    "image": "https://fakestoreapi.com/img/61mtL65D4cL._AC_SX679_.jpg",
    "rating": {
      "rate": 4.8,
      "count": 400
    }
  },
];

describe("App component", () => {
  it("renders correct product link", () => {
    render(<App />);
    expect(screen.getByRole("link", {name: /Products/i})).toBeInTheDocument();
  });

  it("initially renders the navbar and product page", () => {
    render(<App />);
    expect(screen.queryByTestId("navbar")).toBeInTheDocument();
    expect(screen.queryByTestId("product-page")).toBeInTheDocument();
  });

  it("renders about page when clicking about link", async () => {
    let user = userEvent.setup();
    render(<App />);
    const productLink = screen.getByRole("link", {name: /Products/i});
    const aboutLink = screen.getByRole("link", {name: /About/i});

    expect(screen.queryByTestId("product-page")).toBeInTheDocument();
    expect(screen.queryByTestId("about-page")).not.toBeInTheDocument();

    await user.click(aboutLink);

    expect(screen.queryByTestId("product-page")).not.toBeInTheDocument();
    expect(screen.queryByTestId("about-page")).toBeInTheDocument();

    await user.click(productLink);

    expect(screen.queryByTestId("product-page")).toBeInTheDocument();
    expect(screen.queryByTestId("about-page")).not.toBeInTheDocument();
  });

  it("renders checkout page when clicking checkout link", async () => {
    let user = userEvent.setup();
    render(<App />);
    const productLink = screen.getByRole("link", {name: /Products/i});
    const checkoutLink = screen.getByRole("link", {name: /View Cart/i});

    expect(screen.queryByTestId("product-page")).toBeInTheDocument();
    expect(screen.queryByTestId("checkout-page")).not.toBeInTheDocument();

    await user.click(checkoutLink);

    expect(screen.queryByTestId("product-page")).not.toBeInTheDocument();
    expect(screen.queryByTestId("checkout-page")).toBeInTheDocument();

    await user.click(productLink);

    expect(screen.queryByTestId("product-page")).toBeInTheDocument();
    expect(screen.queryByTestId("checkout-page")).not.toBeInTheDocument();
  });
});

describe("Product page", () => {
  it("loads the products on the page", async () => {
    const mockContextValues = {
      products: mockProducts,
      cart: [],
      categories: [],
      activeCategories: []
    };

    render(
      <GlobalStateContext.Provider value={mockContextValues} >
        <Products />
      </GlobalStateContext.Provider>
    );

    expect(screen.queryByTestId("product-page")).toBeInTheDocument();

    const headings = screen.queryAllByRole("heading");
    for (const product of mockProducts){
      const found = headings.some(heading => heading.textContent.includes(product.title));
      expect(found).toBe(true);
    }
  });
});

describe("Checkout Page", () => {
  it("shows an empty cart message when visiting the checkout page", async () => {
    let user = userEvent.setup();
    render(<App />);
    const productLink = screen.getByRole("link", {name: /Products/i});
    const checkoutLink = screen.getByRole("link", {name: /View Cart/i});

    await user.click(checkoutLink);

    expect(screen.queryByText(/Empty Cart/i)).toBeInTheDocument();

    await user.click(productLink);

    expect(screen.queryByText(/Empty Cart/i)).not.toBeInTheDocument();
  });
});