import React from "react";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../app/store";
import PokemonList from "./PokemonList";
import { worker } from "../mocks/browser";

const renderComponent = (onSelectPokemon = jest.fn()) =>
  render(
    <Provider store={store}>
      <PokemonList onSelectPokemon={onSelectPokemon} />
    </Provider>
  );

describe("PokemonList", () => {
  it("displays a list of pokemons", async () => {
    renderComponent();
    expect(screen.getByText("Loading...")).toBeInTheDocument();
    const listItem = await screen.findByText("bulbasaur");
    expect(listItem).toBeInTheDocument();
    expect(screen.getByText("ivysaur")).toBeInTheDocument();
  });
});
