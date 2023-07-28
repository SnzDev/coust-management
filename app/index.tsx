import { useColorScheme } from 'nativewind';
import { Text, View } from 'react-native';

import ButtonDarkMode from '../components/container/ButtonDarkMode';
import Input from '../components/primitive/Input';

export default function Home() {
  const { colorScheme } = useColorScheme();
  return (
    <View className="flex justify-center items-center bg-white dark:bg-black flex-1 gap-5">
      <Text className="text-violet-500 font-bold text-xl">Mude o horário</Text>

      <Text className="text-gray-500 dark:text-gray-400">
        {colorScheme === 'light' && 'Claro'}
        {colorScheme === 'dark' && 'Escuro'}
      </Text>

      <ButtonDarkMode />

      <Input />
    </View>
  );
}
