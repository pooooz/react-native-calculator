import {
  findNodeHandle,
  PixelRatio,
  requireNativeComponent,
  UIManager,
} from 'react-native';
import {useEffect, useRef} from 'react';

export const MyViewManager = requireNativeComponent('MyViewManager');

const createFragment = (viewId: number) =>
  UIManager.dispatchViewManagerCommand(
    viewId,
    UIManager.MyViewManager.Commands.create.toString(),
    [viewId],
  );

export const MyView = () => {
  const ref = useRef(null);

  useEffect(() => {
    const viewId = findNodeHandle(ref.current);
    createFragment(viewId as number);
  }, []);

  return (
    <MyViewManager
      style={{
        height: PixelRatio.getPixelSizeForLayoutSize(200),
        width: PixelRatio.getPixelSizeForLayoutSize(200),
      }}
      ref={ref}
    />
  );
};
