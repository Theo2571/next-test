import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { getReal } from "@/redux/gamesSlice";
import cl from "./filter.module.css";

export const CurrencyFilter = () => {
  const dispatch = useDispatch();
  const currencyFilter = useSelector(
    (state: RootState) => state.games.selectedCurrency,
  );
  const handleCurrencyFilterChange = (
    event: React.ChangeEvent<HTMLSelectElement>,
  ) => {
    const selectedCurrency = event.target.value;
    dispatch(getReal(selectedCurrency));
  };
  return (
    <select className={cl.filter} onChange={handleCurrencyFilterChange}>
      <option value={""}>Валюта</option>
      {currencyFilter.map((currency: string) => (
        <option key={currency} value={currency}>
          {currency}
        </option>
      ))}
    </select>
  );
};
