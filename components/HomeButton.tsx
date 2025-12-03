
import { StyleSheet, View, Pressable, Text } from 'react-native';
import { useRouter } from 'expo-router'
import Ionicons from '@expo/vector-icons/Ionicons';

type Props = {
    label: string;
    onPress?: () => void;
};


export default function HomeButton({ label, onPress }: Props) {
    const router = useRouter();
    return (
        <View
        style={[ styles.buttonContainer,
            { borderWidth: 4, borderColor: '#ffd33d', borderRadius: 18 },
        ]}>
          <Pressable style={[styles.button, { backgroundColor: '#fff' }]}
                     onPress={() => router.navigate('/LandingPage')}>
              <Ionicons name="home" size={18} color="#25292e" style={styles.buttonIcon} />
              <Text style={[styles.buttonLabel, { color: '#25292e' }]}>{label}</Text>
          </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
  buttonContainer: {
    width: 40,
    height: 40,
    marginHorizontal: 0,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 3,
  },
  button: {
    borderRadius: 10,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  buttonIcon: {
    paddingRight: 0,
  },
  buttonLabel: {
    color: '#fff',
    fontSize: 16,
  },
});
