import React from 'react';

import {Inventory} from '../features/inventory/Inventory';
import { Cart } from '../features/cart/Cart';
import { SearchTerm } from '../features/searchTerm/SearchTerm';
import { CurrencyFilter } from '../features/currencyFilter/CurrencyFilter';

export default function App(props) {
  const { state, dispatch } = props;

  function getFilteredItems(items, searchTerm) {
    return items.filter(item => item.name.toLowerCase().includes(searchTerm.toLowerCase()));
  }

  const visibleInventory = getFilteredItems(state.inventory, state.searchTerm);
 
  return (
    <div>
      <SearchTerm 
        searchTerm={state.searchTerm}
        dispatch={dispatch}
      />
      <CurrencyFilter
        currencyFilter={state.currencyFilter}
        dispatch={dispatch}
      />

      <Inventory
        inventory={visibleInventory}
        currencyFilter={state.currencyFilter}
        dispatch={dispatch}
      />
      <Cart 
        cart={state.cart}
        currencyFilter={state.currencyFilter}
        dispatch={dispatch}
      />
    </div>
  );
};
