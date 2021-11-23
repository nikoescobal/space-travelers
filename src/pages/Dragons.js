import { useSelector } from 'react-redux';

const Dragons = () => {
  const dragonStore = useSelector((state) => console.log(state));
  console.log(dragonStore);
  return <div>lol</div>;
  // const dispatch = useDispatch();
};

export default Dragons;
