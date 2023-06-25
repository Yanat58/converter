import HomePage from 'pages/HomePage';
import RatesPage from 'pages/RatesPage';
import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './Layout/Layout';
import { useDispatch } from 'react-redux';
import { fetchBaseCurrency } from 'redux/operation';

export const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0,
    };

    function success(pos) {
      const crd = pos.coords;
      dispatch(fetchBaseCurrency(crd));
      // console.log('Your current position is:');
      // console.log(`Latitude : ${crd.latitude}`);
      // console.log(`Longitude: ${crd.longitude}`);
      // console.log(`More or less ${crd.accuracy} meters.`);
    }

    function error(err) {
      console.warn(`ERROR(${err.code}): ${err.message}`);
    }

    navigator.geolocation.getCurrentPosition(success, error, options);
  }, [dispatch]);

  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/rates" element={<RatesPage />} />
        </Route>
      </Routes>
    </div>
  );
};
