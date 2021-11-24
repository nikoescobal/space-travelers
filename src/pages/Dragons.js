import { useSelector, useDispatch } from 'react-redux';
import React, { useEffect } from 'react';
import {} from '../store/reducers/dragonReducer';

import { fetchData } from '../store/reducers/actions/dragonActions';

const Dragons = () => {
  const dragonStore = useSelector((state) => state.dragons.dragons);
  console.log(dragonStore);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!dragonStore.length) {
      dispatch(fetchData());
    }
  }, []);

  return (
    <div className="dragons-container">
      {dragonStore.map((dragon) => {
        const {
          id, name, type, images,
        } = dragon;
        return (
          <div key={id}>
            <div>
              <img src={images[0]} alt={name} />
            </div>
            <h2>{name}</h2>
            <p>{type}</p>
          </div>
        );
      })}
    </div>
  );
};
// const dispatch = useDispatch();
export default Dragons;
