const efetuarLogin = async (usuario, senha) => {
    let url = "";
    if (Platform.OS == "ios") {
        url = "localhost";
    }
    const cabecalhoHTTP = {
        method: "POST",
        body: JSON.stringify({
            userName: usuario,
            password: senha
        }),
        headers: {
            "Content-type": "application/json"
        }
    }
    const resposta = await fetch(`http://${url}:8080/users/login`, cabecalhoHTTP);

    console.warn(resposta);
}

export default efetuarLogin