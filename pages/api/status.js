function status(request, response){
    response.status(200).json({ chave: "Teste status" });
}

export default status;