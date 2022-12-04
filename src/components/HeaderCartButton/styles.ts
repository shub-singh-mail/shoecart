import { StyleSheet } from "react-native";

import { colors } from "../../constants/theme";

export default StyleSheet.create({
    quantityContainer: {
        backgroundColor: colors.SECONDARY,
        position: 'absolute',
        top: 0,
        left: 20,
        borderRadius: 25/2,
        height: 25,
        minWidth: 25,
        overflow: 'hidden',
        justifyContent: 'center',
        alignItems: 'center'
    },
    quantity: {
        fontSize: 16
    }
})