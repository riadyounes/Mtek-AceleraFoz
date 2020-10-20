const efetuarLogin = async (usuario, senha) => {
    let url = "192.168.0.108";
    if (Platform.OS == "ios") {
        url = "localhost";
    }
    const cabecalhoHTTP = {
        method: "POST",
        body: JSON.stringify({
            username: usuario,
            password: senha
        }),
        headers: {
            "Content-type": "application/json"
        }
    }
    const resposta = await fetch(`http://${url}:8085/login`, cabecalhoHTTP);

    console.warn(resposta);
}

export default efetuarLogin