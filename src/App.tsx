import React, { useEffect } from 'react';

import {useDispatch, useSelector } from 'react-redux';

const App: React.FC = () => {
  const dispatch = useDispatch();
  const data = useSelector((state: { sample: { data: any; }; }) => state.sample.data);
  const loading = useSelector((state: { sample: { loading: any; }; }) => state.sample.loading);
  const error = useSelector((state: { sample: { error: any; }; }) => state.sample.error);

  useEffect(() => {
    dispatch({ type: 'FETCH_DATA_REQUEST' });
  }, [dispatch]);

  return (
      <div className="App">
        <h3>Sample Redux-Saga Application for quick start. Happy coding!!! 😊</h3>
        {loading && <p>Happy coding Loading...</p>}
        {error && <p>Error: {error}</p>}
        <ul>
          {data.map(function (item: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined, index: React.Key | null | undefined) {
            return <li key={index}>{item}</li>;
          })}
        </ul>
      </div>
  );
}

export default App;
