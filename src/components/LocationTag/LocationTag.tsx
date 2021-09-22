import React, { VFC } from 'react';
import { useAppSelector } from 'store';
import Text from 'components/UI/Text';
import ReactTooltip from 'react-tooltip';
import styled from 'styled-components';
import Description from 'components/UI/Description';

type Props = {
  locationId: number;
  label?: string;
};

const LocationHoverText = styled.p`
  color: ${(props) => props.theme.colors.secondaryDark};
  margin: 0;
  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;

const LocationTag: VFC<Props> = ({ locationId, label = 'Location' }) => {
  const locations = useAppSelector((state) => state.registry.locations);
  const location = locations[locationId];

  const tooltipId = `${locationId}-location-tooltip`;
  const tooltipContent = [
    location?.name,
    location?.type,
    `${location?.residents.length} residents`,
  ].join('<br />');

  return (
    <Description
      label={label}
      className="LocationTag"
      content={
        <div>
          {location ? (
            <LocationHoverText data-for={tooltipId} data-tip={tooltipContent} data-multiline="true">
              {location.name}
            </LocationHoverText>
          ) : (
            <Text italic>Unknown</Text>
          )}
          <ReactTooltip id={tooltipId} />
        </div>
      }
    />
  );
};

export default LocationTag;
