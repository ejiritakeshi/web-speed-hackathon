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
  const setDeviceType = () => {
    _setDeviceType(getDeviceType(window.innerWidth));
  }
  useEffect(() => {
    window.onresize = setDeviceType;
    return () => { window.onresize = null }
  })
  return children({ deviceType });
}
