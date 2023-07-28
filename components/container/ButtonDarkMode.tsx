import AsyncStorage from '@react-native-async-storage/async-storage';
import { Moon, Sun } from 'lucide-react-native';
import { useColorScheme } from 'nativewind';
import { useEffect } from 'react';
import { ColorSchemeName } from 'react-native';

import Button from '../primitive/Button';

const STORAGE_KEY = '@CoustManagment:colorScheme';

const ButtonDarkMode = () => {
  const { colorScheme, toggleColorScheme, setColorScheme } = useColorScheme();

  const saveColorScheme = async (value: string) => {
    try {
      await AsyncStorage.setItem(STORAGE_KEY, value);
    } catch (e) {
      console.error('Failed to save color scheme preference:', e);
    }
  };

  useEffect(() => {
    const loadColorScheme = async () => {
      try {
        const value = (await AsyncStorage.getItem(
          STORAGE_KEY
        )) as ColorSchemeName;
        if (value) setColorScheme(value);
      } catch (e) {
        console.error('Failed to load color scheme preference:', e);
      }
    };
    loadColorScheme();
  }, [setColorScheme]);

  useEffect(() => {
    saveColorScheme(colorScheme);
  }, [colorScheme]);

  return (
    <Button onPress={toggleColorScheme}>
      {colorScheme === 'light' && <Moon className="text-white" />}
      {colorScheme === 'dark' && <Sun className="text-white" />}
    </Button>
  );
};

export default ButtonDarkMode;
