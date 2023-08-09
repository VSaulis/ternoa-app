import { useCallback, useEffect, useState } from 'react';
import ReactNativeBiometrics, { BiometryTypes } from 'react-native-biometrics';

const useIsFaceIdEnabled = () => {
  const [isEnabled, setIsEnabled] = useState<boolean>(false);

  const checkIfFaceIdEnabled = useCallback(async () => {
    const biometrics = new ReactNativeBiometrics({
      allowDeviceCredentials: true,
    });

    const { biometryType } = await biometrics.isSensorAvailable();
    setIsEnabled(biometryType === BiometryTypes.FaceID);
  }, []);

  useEffect(() => {
    checkIfFaceIdEnabled();
  }, [checkIfFaceIdEnabled]);

  return { isEnabled };
};

export default useIsFaceIdEnabled;
