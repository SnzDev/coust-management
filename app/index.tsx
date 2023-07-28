import { Moon, Sun } from 'lucide-react-native';
import { useColorScheme } from 'nativewind';
import { Text, View } from 'react-native';

import Button from '../components/primitive/Button';

export default function Home() {
  const { colorScheme, toggleColorScheme } = useColorScheme();
  return (
    <View className="flex justify-center items-center bg-white dark:bg-black flex-1 gap-5">
      <Text className="text-violet-500 font-bold text-xl">Mude o horário</Text>

      <Text className="text-gray-500 dark:text-gray-400">
        {colorScheme === 'light' && 'Claro'}
        {colorScheme === 'dark' && 'Escuro'}
      </Text>

      <Button isLoading onPress={toggleColorScheme}>
        {colorScheme === 'light' && <Moon className="text-white" />}
        {colorScheme === 'dark' && <Sun className="text-white" />}
      </Button>
    </View>
  );
}
