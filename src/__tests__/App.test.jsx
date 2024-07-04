import { render, screen, cleanup } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";

import App from "../App";
import Products from "../pages/Products";
import { TestProvider } from "./TestProvider";

describe("App component", () => {
  it("renders correct product link", () => {
    render(
      <TestProvider>
        <App />
      </TestProvider>
    );
    expect(screen.getByRole("link", {name: /Products/i})).toBeInTheDocument();
  });

  it("initially renders the navbar and product page", () => {
    render(
      <TestProvider>
        <App />
      </TestProvider>
    );
    expect(screen.queryByTestId("navbar")).toBeInTheDocument();
    expect(screen.queryByTestId("product-page")).toBeInTheDocument();
  });

  it("renders about page when clicking about link", async () => {
    let user = userEvent.setup();
    render(
      <TestProvider>
        <App />
      </TestProvider>
    );
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
    render(
      <TestProvider>
        <App />
      </TestProvider>
    );
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
        "id": 2,
        "title": "Mens Casual Premium Slim Fit T-Shirts ",
        "price": 22.3,
        "description": "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
        "category": "men's clothing",
        "image": "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
        "rating": {
          "rate": 4.1,
          "count": 259
        }
      },
      {
        "id": 3,
        "title": "Mens Cotton Jacket",
        "price": 55.99,
        "description": "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
        "category": "men's clothing",
        "image": "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
        "rating": {
          "rate": 4.7,
          "count": 500
        }
      }
    ];

    render(
      <TestProvider value={{ products: mockProducts }}>
        <Products />
      </TestProvider>
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
    render(
      <TestProvider>
        <App />
      </TestProvider>
    );
    const productLink = screen.getByRole("link", {name: /Products/i});
    const checkoutLink = screen.getByRole("link", {name: /View Cart/i});

    await user.click(checkoutLink);

    expect(screen.queryByText(/Empty Cart/i)).toBeInTheDocument();

    await user.click(productLink);

    expect(screen.queryByText(/Empty Cart/i)).not.toBeInTheDocument();
  });
});