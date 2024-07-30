'use client';

import ClipLoader from 'react-spinners/ClipLoader';

const override = {
  display: 'block',
  margin: '100px auto',
};

const LoadingPage = ({ loading }: any) => {
  return (
    <ClipLoader
      color="#059dc0"
      loading={loading}
      cssOverride={override}
      size={150}
      aria-label="Loading Spinner"
    />
  );
};

export default LoadingPage;
