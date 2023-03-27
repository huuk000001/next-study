import { gql, useMutation } from "@apollo/client"
import { useState } from "react"

const CREATE_PRODUCT = gql`
    mutation createProduct($seller:String,$createProductInput:CreateProductInput!){
        createProduct(seller:$seller,createProductInput:$createProductInput){
            _id
            number
            message
        }
    }
`

export default function ProductWritePage(){
    const [createProduct] = useMutation(CREATE_PRODUCT)
    const [seller, setSeller] = useState("");
    const [name, setName] = useState("");
    const [detail, setDetail] = useState("");
    const [price, setPrice] = useState();

    const handleClickSync = async()=>{
        const result = await createProduct({
            variables:{
                seller: seller,
                createProductInput: {
                    name:name,
                    detail:detail,
                    price:Number(price),
                },
            }
        })
        alert(result.data.createProduct.message)
    }

    const handleChangeSeller=(e)=>{
        setSeller(e.target.value)
    }
    const handleChangeName=(e)=>{
        setName(e.target.value)
    }
    const handleChangeDetail=(e)=>{
        setDetail(e.target.value)
    }
    const handleChangePrice=(e)=>{
        setPrice(e.target.value)
    }

    return  <>
        <div>
            <input type="text" onChange={handleChangeSeller}/>
        </div>
        <div>
            <input type="text" onChange={handleChangeName}/>
        </div>
        <div>
            <input type="text" onChange={handleChangeDetail}/>
        </div>
        <div>
            <input type="text" onChange={handleChangePrice}/>
        </div>
        
        <button onClick={handleClickSync}>동기</button>
    </>
}