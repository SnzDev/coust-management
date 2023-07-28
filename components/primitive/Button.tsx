import { TouchableOpacity, TouchableOpacityProps } from 'react-native';
import { type VariantProps, tv } from 'tailwind-variants';

import SpinLoader from './SpinLoader';

const button = tv({
  base: 'px-3 h-[48px] flex justify-center items-between py-2 rounded-xl',
  variants: {
    variant: {
      contained:
        'bg-violet-500 text-white hover:bg-violet-600 focus:bg-violet-600 focus:ring-violet-500'
    }
  },
  defaultVariants: {
    variant: 'contained'
  }
});

type ButtonProps = TouchableOpacityProps &
  VariantProps<typeof button> & {
    isLoading?: boolean;
    startIcon?: React.ReactNode;
    endIcon?: React.ReactNode;
  };
const Button = ({
  variant,
  className,
  isLoading,
  startIcon,
  endIcon,
  children,
  disabled,
  ...props
}: ButtonProps) => {
  return (
    <TouchableOpacity
      {...props}
      disabled={disabled || isLoading}
      className={button({ variant, className })}
    >
      {startIcon}
      {isLoading && <SpinLoader color="white" />}
      {!isLoading && children}
      {endIcon}
    </TouchableOpacity>
  );
};

export default Button;
