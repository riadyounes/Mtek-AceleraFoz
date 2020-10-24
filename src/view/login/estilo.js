import { StyleSheet, Dimensions } from "react-native"

const largura = Dimensions.get("screen").width;
const estilo = StyleSheet.create({
    version:{
        
    },
    versionContent:{
        display: "flex",
        alignItems: "flex-end"
        
    },
    conteiner: {
        flexGrow: 2,
        justifyContent: "center",
        alignItems: "center"
    },
    inputs: {
        width: largura * 0.6,
        alignSelf: "flex-start"
    },
    botaoView: {
        alignItems: "center",
        marginBottom: 50,
    },
    logo: {
        marginBottom: 100,
        width: 165,
        height: 150
    },
    icon: {
        padding: 10,
        margin: 5,
        height: 25,
        width: 25,
        resizeMode: 'stretch',
        alignItems: 'center',
    },
    loginInputStyle: {
        display: "flex",
        marginTop:25,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderWidth: 0.5,
        borderColor: '#000',
        height: 40,
        borderRadius: 5,
    }
})

export default estilo;