import React from 'react';
import ContentLoader from 'react-content-loader';

const Skeleton = () => (
  <div className="col-md-4 col-sm-6">
    <ContentLoader
      speed={2}
      width={361}
      height={600}
      viewBox="0 0 361 600"
      backgroundColor="#151515"
      foregroundColor="#181818"
    >
      <rect x="23" y="2" rx="8" ry="8" width="329" height="569" />
    </ContentLoader>
  </div>
);

export default Skeleton;
