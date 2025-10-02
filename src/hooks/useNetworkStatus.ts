import { useEffect, useState } from 'react';
import NetInfo from '@react-native-community/netinfo';


export default function useNetworkStatus(): boolean {
const [isOnline, setIsOnline] = useState<boolean>(true);


useEffect(() => {
const unsubscribe = NetInfo.addEventListener((state) => {
setIsOnline(state.isConnected ?? false);
});


NetInfo.fetch().then((s) => setIsOnline(s.isConnected ?? false));


return () => unsubscribe();
}, []);


return isOnline;
}