import { useEffect, useRef } from 'react';

const useEffectAfterMount = (callback, dependencies) => {
  const didMountRef = useRef(false);

  useEffect(() => {
    if (didMountRef.current) {
      callback();
    }
    didMountRef.current = true;
  }, dependencies);
};

export default useEffectAfterMount;
