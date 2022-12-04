import { StyleSheet } from "react-native";
import { colors } from "../../constants/theme";

export default StyleSheet.create({
    buttonContainer: {
        width: 45,
        height: 30,
        borderRadius: 40,
        backgroundColor: colors.SECONDARY,
        alignItems: 'center',
    },
    buttonLabel : {
        fontSize: 22, 
        fontWeight: '600',
        color: colors.WHITE
    },
    container : {
        flexDirection: 'row'
    },
    quantityLabel: {
        fontSize: 22, 
        fontWeight: '600',
        color: 'black',
        marginHorizontal: 10
    }
})