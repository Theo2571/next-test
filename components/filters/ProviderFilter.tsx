import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { getProvider } from "@/redux/gamesSlice";
import cl from "./filter.module.css";
export const ProviderFilter = () => {
  const dispatch = useDispatch();
  const selectedProvider = useSelector(
    (state: RootState) => state.games.selectedProvider,
  );
  const handleCurrencyFilterChange = (
    event: React.ChangeEvent<HTMLSelectElement>,
  ) => {
    const selectedProvider = event.target.value;
    dispatch(getProvider(selectedProvider));
  };
  return (
    <select className={cl.filter} onChange={handleCurrencyFilterChange}>
      <option value={""}>Провайдер</option>
      {selectedProvider.map((provider: string) => (
        <option key={provider} value={provider}>
          {provider}
        </option>
      ))}
    </select>
  );
};
