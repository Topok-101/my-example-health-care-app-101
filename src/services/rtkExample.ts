import {api} from 'configs'

import {TestApiResponse} from 'types/services/test-example-type'

const testApi = api.injectEndpoints({
  endpoints: build => ({
    getTestData: build.query<TestApiResponse, {page: number; size?: number}>({
      keepUnusedDataFor: 600,
      query: ({page=1,size=5}) => ({
        url: `api?seed=1&page=${page}&results=${size}`,
        method: 'get'
      })
    })
  })
})

export const {useGetTestDataQuery, useLazyGetTestDataQuery} = testApi
export default testApi