import { useState } from "react";


export type BoardsSortOption = "createdAt" | "updatedAt" | "lastOpenedAt" | "name"

export type BoardFilters = {
  search: string;
  sort: BoardsSortOption;
  showFavorites: boolean | null;
};


export function useBoardsFilters() {
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState<BoardsSortOption>("lastOpenedAt");


  return {
    search,
    setSearch,
    sort,
    setSort,

  };
}