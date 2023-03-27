import { gql, useMutation } from "@apollo/client"
import { useRouter } from "next/router";
import { useState } from "react"

const CREATE_BOARD = gql`
    mutation createBoard($writer:String,$title:String,$contents:String){
        createBoard(writer:$writer,title:$title,contents:$contents){
            _id
            number
            message
        }
    }
`

export default function BoardWritePage(){
    const [createBoard] = useMutation(CREATE_BOARD)
    const [writer, setWriter] = useState("");
    const [title, setTitle] = useState("");
    const [contents, setContents] = useState("");
    const router = useRouter();

    const handleClickSync = async()=>{
        const result = await createBoard({
            variables:{
                writer,
                title,// title: title,
                contents,
            }
        })
        console.log(result.data)
        alert(result.data.createBoard.message)
        router.push("/boards")
    }

    const handleChangeWriter=(e)=>{
        setWriter(e.target.value)
    }
    const handleChangeTitle=(e)=>{
        setTitle(e.target.value)
    }
    const handleChangeContents=(e)=>{
        setContents(e.target.value)
    }

    return  <>
        <div>
            <input type="text" onChange={handleChangeWriter}/>
        </div>
        <div>
            <input type="text" onChange={handleChangeTitle}/>
        </div>
        <div>
            <input type="text" onChange={handleChangeContents}/>
        </div>
        
        <button onClick={handleClickSync}>동기</button>
    </>
}