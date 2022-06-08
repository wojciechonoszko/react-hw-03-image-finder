import {Audio} from 'react-loader-spinner';
export const MyLoader = () => {
    return (
      <Audio
      height="100"
      width="100"
      color='pink'
      ariaLabel='loading'
      style={{zIndex: '100', position: 'fixed', top: '50%', left: '50%'}}
    />
    );
};