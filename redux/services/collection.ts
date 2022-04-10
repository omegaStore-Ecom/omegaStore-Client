import { CollectionItem, CollectionResponse } from '../../interfaces';
import { baseQuery } from '../api';
import { createApi } from '@rtk-incubator/rtk-query/react';

export const collectionApi = createApi({
  reducerPath: 'collectionApi',
  baseQuery,

  endpoints: (build) => ({
    getCollection: build.query<CollectionResponse, void>({
      query: () => ({ url: 'collection' }),
    }),

    deleteCollection: build.mutation<CollectionItem, Partial<CollectionItem>>({
      query(id) {
        return {
          url: `collection/${id}`,
          method: 'DELETE',
        };
      },
    }),
  }),
});
export const { useGetCollectionQuery, useDeleteCollectionMutation } =
  collectionApi;
