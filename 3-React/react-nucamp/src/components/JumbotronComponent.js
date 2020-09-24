import React from 'react';
import { Jumbotron } from 'reactstrap';
export default function JumbotronComponent() {
  return (
    <Jumbotron fluid className="mb-0">
      <div className="container">
        <div className="row">
          <div className="col">
            <h1>NuCamp</h1>
            <h2>a better way to camp</h2>
          </div>
        </div>
      </div>
    </Jumbotron>
  );
}
