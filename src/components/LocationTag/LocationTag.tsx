import React, { VFC } from 'react';
import { useAppSelector } from 'store';
import Text from 'components/UI/Text';

type Props = {
  locationId: number;
  label?: string;
};

const LocationTag: VFC<Props> = ({ locationId, label = 'Location' }) => {
  const locations = useAppSelector((state) => state.registry.locations);
  const location = locations[locationId];

  return (
    <div className="LocationTag">
      <Text bold>{label}:</Text> {location ? location.name : <Text italic>Unknown</Text>}
    </div>
  );
};

export default LocationTag;
