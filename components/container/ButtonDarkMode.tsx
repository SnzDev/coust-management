import { Moon, Sun } from 'lucide-react-native';
import { useColorScheme } from 'nativewind';
import { ColorSchemeSystem } from 'nativewind/dist/style-sheet/color-scheme';
import { useEffect } from 'react';

import { getStorage, setStorage } from '../../utils/storage';
import Button from '../primitive/Button';

const ButtonDarkMode = () => {
  const { colorScheme, toggleColorScheme, setColorScheme } = useColorScheme();

  useEffect(() => {
    getStorage('colorScheme').then((value) => {
      if (value) {
        const colorScheme = value as ColorSchemeSystem;
        setColorScheme(colorScheme);
      }
    });
  }, [setColorScheme]);

  useEffect(() => {
    setStorage('colorScheme', colorScheme);
  }, [colorScheme]);

  return (
    <Button onPress={toggleColorScheme}>
      {colorScheme === 'light' && <Moon className="text-white" />}
      {colorScheme === 'dark' && <Sun className="text-white" />}
    </Button>
  );
};

export default ButtonDarkMode;
