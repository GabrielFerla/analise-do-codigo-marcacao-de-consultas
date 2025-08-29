import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../types/navigation";
export const useProfileNavigation = () =>
  useNavigation<NativeStackNavigationProp<RootStackParamList, "Profile">>();