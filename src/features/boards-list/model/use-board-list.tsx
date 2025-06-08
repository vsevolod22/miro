import { rqClient } from "@/shared/api/instance";
import { keepPreviousData } from "@tanstack/react-query";
import { RefCallback, useCallback, useEffect } from "react";



type useBoardsListPatams = {
    limit?: number;
    isFavorite?: boolean;
    search?: string;
    sort?: "createdAt" | "updatedAt" | "lastOpenedAt" | "name";
};

export function useBoardsList({
    limit= 20,
    isFavorite,
    search,
    sort,
} : useBoardsListPatams) {
    const {fetchNextPage, data, isFetchingNextPage, isPending, hasNextPage} = rqClient.useInfiniteQuery("get", "/boards", {
        params: {
            query: {
                page: 1,
                limit,
                isFavorite,
                search,
                sort,
            }
        }
    }, {
        initialPageParam: 1,
        pageParamName: "page",
        placeholderData: keepPreviousData,
        getNextPageParam: (lastPage, _, lastPageParams) => Number(lastPageParams) <  lastPage.totalPages ? Number(lastPageParams) + 1 : null,
    })
    
    const cursorRef: RefCallback<HTMLDivElement> = useCallback((el) => {
       
      
          const observer = new IntersectionObserver(
            (entries) => {
              if (entries[0].isIntersecting) {
                fetchNextPage();
              }
            },
            { threshold: 0.5 },
          );
      
          
         if(el) {
            observer.observe(el);
            return () => {
                observer.disconnect()
            }
         }
    }, [fetchNextPage])
    const boards = data?.pages.flatMap((page) => page.list) ?? [];

    return {
        boards,
        cursorRef,
        isPending,
        isFetchingNextPage,
        hasNextPage,
    }
}