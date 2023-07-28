import { ActivityIndicator, ActivityIndicatorProps } from 'react-native';
//create a base spinner

type SpinLoaderProps = ActivityIndicatorProps;
const SpinLoader = ({ ...props }: SpinLoaderProps) => {
  return <ActivityIndicator {...props} />;
};

export default SpinLoader;
