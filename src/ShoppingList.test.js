import React from "react";
import { render ,fireEvent} from '@testing-library/react'
import ShoppingList from "./ShoppingList";

 
// SmokeTest 
it("should render on the screen", () => {
    render(<ShoppingList />)
})

// SnapshotTest
it("should match Snapshot", () => {
    const { asFragment } = render(<ShoppingList />)
    expect(asFragment()).toMatchSnapshot()
})

// Add new Item
it('should add new Item', () => {
   const { queryByText, getByLabelText } = render(<ShoppingList />)
   const btn = queryByText('Add Item')
   const input = getByLabelText("Product:")
   expect(queryByText("ProductName:Chocolate Milk")).not.toBeInTheDocument()
   fireEvent.change(input, { target: {value: "Chocolate Milk"} });
   fireEvent.click(btn)
   expect(queryByText("ProductName:Chocolate Milk")).toBeInTheDocument()

}) 