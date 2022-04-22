import { gql,ApolloServer } from "apollo-server";

const facturasCompras=[
    {
        fecha:'30/01/2022',
        comprador:"comprador1",
        documentoIdentidad:"0001",
        id:"0000001"
    },
    {
        fecha:'31/01/2022',
        comprador:"comprador1",
        documentoIdentidad:"0001",
        id:"0000002"
    },
    {
        fecha:'01/02/2022',
        comprador:"comprador1",
        documentoIdentidad:"0001",
        id:"0000003"
    },
]

const typeDefinidos = gql`
    type facturasCompras{
        fecha:String
        comprador:String
        documentoIdentidad:String
        id:String!
    }

    type Query {
        cantidadFacturas:Int!
        todasFacturasCompras:[facturasCompras]!
    }
`

const resolver={
    Query:{
        cantidadFacturas:()=>facturasCompras.length,
        todasFacturasCompras:()=> facturasCompras
    }
}

const server = new ApolloServer({
    typeDefs:typeDefinidos,
    resolver
})

server.listen().then(({url})=>{
    console.log(`server in port ${url}`)
})