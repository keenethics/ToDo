import React from 'react';

import Items from './items';
import Comments from './comments';

const Main = () => <div className="main-container container-fluid">
  <div className="dairy-container col-sm-12 col-12 col-lg-12">
    <p className="dairy-container__dairy-text">dairy app</p>
    <p className="dairy-container__dairy-comment">Comments with no sence</p>
  </div>
  <Items />
  <Comments />
</div>;

export default Main;
