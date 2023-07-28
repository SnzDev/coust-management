import AsyncStorage from '@react-native-async-storage/async-storage';

const storages = {
  colorScheme: '@CoustManagment:colorScheme'
};

type KeyTypes = keyof typeof storages;

const setStorage = async (key: KeyTypes, value: string) => {
  try {
    await AsyncStorage.setItem(storages[key], value);
  } catch (e) {
    console.error('Failed to save color scheme preference:', e);
  }
};

const getStorage = async (key: KeyTypes) => {
  try {
    return await AsyncStorage.getItem(key);
  } catch (e) {
    console.error('Failed to get color scheme preference:', e);
  }
};

const removeStorage = async (key: KeyTypes) => {
  try {
    await AsyncStorage.removeItem(key);
  } catch (e) {
    console.error('Failed to remove color scheme preference:', e);
  }
};

export { setStorage, getStorage, removeStorage, storages, type KeyTypes };
