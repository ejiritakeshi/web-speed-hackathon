import { useState } from 'react';

import type { LimitedTimeOfferFragmentResponse, ProductFragmentResponse } from '../graphql/fragments';
import { getActiveOffer } from '../utils/get_active_offer';

export function useActiveOffer(product: ProductFragmentResponse | undefined) {
  const [activeOffer, setActiveOffer] = useState<LimitedTimeOfferFragmentResponse | undefined>(undefined);

  if (!product) {
    if (activeOffer !== undefined) {
      setActiveOffer(undefined);
    }
  } else {
    const offer = getActiveOffer(product.offers)
    if (offer?.id !== activeOffer?.id) {
      setActiveOffer(offer);
    }
  }

  return { activeOffer };
}
