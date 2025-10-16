import { useRoute } from "@react-navigation/native";
import { Text, View } from "react-native-reanimated/lib/typescript/Animated";

export default function Screen1(){
    const router = useRoute()
    return(<View>
        <Text> hola desde scrren 1</Text>
        <button title ="Ir a pantalla 2" onPress={()=>router.push("/screen2")}>ir a screen 2</button>
    </View>);
}