import {Plane} from 'react-loader-spinner';
export const MyLoader = () => {
    return (
    <Plane
      type="Plane"
      color="#00BFFF"
      height={80}
      width={80}
      timeout={3000}
      style={{zIndex: '100', position: 'fixed', top: '50%', left: '50%'}}
    />
    );
};