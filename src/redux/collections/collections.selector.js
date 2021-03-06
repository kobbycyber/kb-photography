import memoize from "lodash.memoize";
import { createSelector } from "reselect";

const selectShop = (state) => state.collections;

export const selectCollections = createSelector(
  [selectShop],
  (shop) => shop.collections
);

export const selectCollection = memoize((collectionUrlParam) =>
  createSelector(
    [selectCollections],
    (collections) => collections[collectionUrlParam]
  )
);
