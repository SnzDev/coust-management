import { TextInput, TextInputProps } from 'react-native';
import { tv, type VariantProps } from 'tailwind-variants';

const input = tv({
  base: 'border border-slate-400 rounded-md shadow-sm w-full min-h-[4rem] px-3 py-2 text-black dark:text-white'
});

type InputProps = TextInputProps & VariantProps<typeof input>;
const Input = ({ className, ...props }: InputProps) => {
  return <TextInput {...props} className={input({ className })} />;
};

export default Input;
