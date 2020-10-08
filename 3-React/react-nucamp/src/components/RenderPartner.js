import React from 'react';
import { baseUrl } from '../shared/baseUrl';
import { Media } from 'reactstrap';
import { Stagger } from 'react-animation-components';
const RenderPartner = ({ partner }) => {
  return (
    <>
      <Media
        width="150"
        object="true"
        src={baseUrl + partner.image}
        alt={partner.name}
      />
      <Media body="true" className="ml-5 mb-4">
        <Media heading="true">{partner.name}</Media>
        {partner.description}
      </Media>
    </>
  );
};
export default RenderPartner;
