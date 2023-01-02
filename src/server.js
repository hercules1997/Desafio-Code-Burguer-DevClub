

const cors = require('cors')
const { request, response, json } = require('express')
const express = require('express')
const uuid = require('uuid')
const port = "https://burguer-iota.vercel.app/"
const app = express()
app.use(express.json())
app.use(cors())


const requests = []

//*?--- VERIFICAÇÃO PARA ENCONTRAR O PEDIDO PELO ID ---?*//

const verificationRequestId = (request, response, next) => {
    const { id } = request.params

    const index = requests.findIndex(pedido => pedido.id === id)

    if (index < 0) {
        return response.status(404).json({ mensage: "RESQUEST NOT FOUND" })
    }

    request.orderIndex = index
    request.orderId = id
    next()

}

//*?--- VERIFICAÇÃO PARA O RETORNO DA URL E DO TIPO DA ROTA ---?*//

const verificationRouteAndURL = (request, response, next) => {
    console.log(request.method)
    console.log(request.url)
    next()
}


//*?--- ROTA DE FAZER O PEDIDO ---?*//

app.post('/requests', verificationRouteAndURL, (request, response) => {

    const { name, order } = request.body
    const newRequests = { id: uuid.v4(), name, order, status: "SEU PEDIDO ESTÁ SENDO PREPARADO!" }

    if(name && order !== "") {
        requests.push(newRequests)
    }

    return response.status(201).json(newRequests)

})



//*?--- ROTA DE CONSULTA DE TODOS OS PEDIDOS ---?*//

app.get('/requests', verificationRouteAndURL, (request, response) => {
    return response.json(requests)

})



//*?--- ROTA DE ATUALIZAÇÃO DO PEDIDO ---?*//

app.put('/requests/:id', verificationRequestId, verificationRouteAndURL, (request, response) => {

    const index = request.orderIndex
    const id = request.orderId
    const { clientName, order, price, } = request.body
    const updateRequest = { id, clientName, order, price, status: "SEU PEDIDO ESTÁ SENDO PREPARADO!" }

    if (index < 0) {
        return response.status(404).json({ message: "Not found" })
    }


    requests[index] = updateRequest
    return response.json(updateRequest)

})


//*?--- ROTA DE BUSCAR O PEDIDO PELO ID ---?*//

app.get('/requests/:id', verificationRequestId, verificationRouteAndURL, (request, response) => {

    const index = request.orderIndex
    const status = requests[index]

    return response.json(status)

})


//*?--- ROTA DE ATUALIZAÇÃO DO STATUS DO PEDIDO ---?*//

app.patch('/requests/:id', verificationRequestId, verificationRouteAndURL, (request, response) => {

    const index = request.orderIndex
    const upadateStatus = requests[index]

    upadateStatus.status = "SEU PEDIO FOI FINALIZADO!"
    return response.json(upadateStatus)

})

//*?---  ROTA DE EXCLUIR O PEDIDO  ---?*//

app.delete('/requests/:id', verificationRequestId, verificationRouteAndURL, (request, response) => {

    const { id } = request.params
    const index = requests.findIndex(req => req.id === id)

    requests.splice(index, 1)
    return response.status(200), response.send({ message: "REQUEST DELETE!" })

})

app.listen(port, () => {
    console.log(`🍔🍔server 1 starded🍔🍔 ${port}`)
})