import { useEffect, useState } from 'react';

export const DeviceType = {
  DESKTOP: 'DESKTOP',
  MOBILE: 'MOBILE',
} as const;
export type DeviceType = typeof DeviceType[keyof typeof DeviceType];

type Props = {
  children: ({ deviceType }: { deviceType: DeviceType }) => JSX.Element;
};

export const GetDeviceType = ({ children }: Props) => {
  const getDeviceType = (windowWidth: number): DeviceType => windowWidth >= 1024 ? "DESKTOP" : "MOBILE";
  const [deviceType, _setDeviceType] = useState<DeviceType>(getDeviceType(window.innerWidth));

  useEffect(() => {
    const setDeviceType = () => {
    _setDeviceType(getDeviceType(window.innerWidth));
    };
    setDeviceType();

    window.addEventListener('resize', setDeviceType);

    return () => {
      window.removeEventListener('resize', setDeviceType);
    }
  }, []);

  return children({ deviceType });
}
