import { useRouter } from "expo-router";
import { View, Text, Button } from "react-native";

export default function Screen1(){
    const router = useRouter()

    return (<View>
      <Text>hola desde screen 1 </Text>
      <Button title= "Ir a pantalla 2 " onPress={()=> router.push("/screen2")}> </Button>
    </View>) 
}