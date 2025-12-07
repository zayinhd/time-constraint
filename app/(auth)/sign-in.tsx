import { useState } from "react";
import { ScrollView, Text, View } from "react-native";

export default function SignIn() {
    const [form, setForm] = useState({
        email: "",
        password: "",
    });

    return (
        <ScrollView>
            <View>
                <Text>Welcome</Text>
            </View>
            <View>
                <Text>Welcome</Text>
            </View>
        </ScrollView>
    );
}
