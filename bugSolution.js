This solution demonstrates a more robust approach to handling deep links in Expo, addressing the inconsistencies encountered on Android.

```javascript
import * as Linking from 'expo-linking';
import { useEffect, useState } from 'react';

export default function App() {
  const [initialUrl, setInitialUrl] = useState(null);

  useEffect(() => {
    const handleDeepLink = async (url) => {
      console.log('Deep link received:', url);
      // Handle the deep link here
    };

    Linking.addEventListener('url', handleDeepLink);

    (async () => {
      const url = await Linking.getInitialURLAsync();
      if (url) {
        setInitialUrl(url);
        handleDeepLink(url); // Handle initial URL if available
      }
    })();

    return () => {
      Linking.removeEventListener('url', handleDeepLink);
    };
  }, []);

  return (
    <View>
      {initialUrl && <Text>Initial URL: {initialUrl}</Text>}
    </View>
  );
}
```