import {UseQuery} from '@reduxjs/toolkit/dist/query/react/buildHooks'
import React from 'react'

// import {IListQueryResponse} from 'types/hooks'
import {TestApiResponse} from 'types/services/test-example-type'

// const calculateMaxPages = (total: number, size: number) => {
//   return Math.ceil(total / size)
// }

export const isValidNotEmptyArray = (array: any[]): boolean => {
  return !!(array && array?.length && array?.length > 0)
}

const useInfiniteScroll = (
  useGetDataListQuery: UseQuery<any>,
  {size = 5, ...queryParameters}
) => {
  const [localPage, setLocalPage] = React.useState<number>(1)
  const [combinedData, setCombinedData] = React.useState<any[]>([])
  const queryResponse = useGetDataListQuery({
    page: localPage,
    size,
    ...queryParameters
  })
  const {info, results: fetchData = []} =
    (queryResponse?.data as TestApiResponse) || {}

  React.useEffect(() => {
    if (isValidNotEmptyArray(fetchData)) {
      if (localPage === 1) setCombinedData(fetchData)
      else if (localPage === info?.page) {
        setCombinedData(previousData => [...previousData, ...fetchData])
      }
    }
  }, [fetchData])

  const maxPages = React.useMemo<number>(() => {
    return info?.results //calculateMaxPages(remoteTotal, info.results);
  }, [
    info?.results
    // remoteTotal,
    // remoteSize
  ])

  const refresh = React.useCallback(() => {
    setLocalPage(1)
  }, [])

  const readMore = () => {
    if (localPage < maxPages && localPage === info?.page) {
      setLocalPage(page => page + 1)
    }
  }

  return {
    combinedData,
    localPage,
    readMore,
    refresh,
    isLoading: queryResponse?.isLoading,
    isFetching: queryResponse?.isFetching
  }
}

export default useInfiniteScroll
