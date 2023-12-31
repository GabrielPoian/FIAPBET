"use client"

import Image from "next/image";
import loginImage from "@/images/login1.jpg"
import { useState } from "react";
import { Target } from "lucide";
import {useRouter} from "next/navigation";
import { Toaster } from "react-hot-toast";
import { serverLogin } from "@/actions/user";


export default function Login(){


const[email,setEmail] = useState("")
const[senha,setSenha] = useState("")
const {push} = useRouter()

    function login(e){
    e.preventDefault()
    if (email == "gabrielppoian@gmail.com" && senha=="123"){
        serverLogin()
        push("/")
    }else{
        toast.error("dados invalido")
    }

    console.log(email,senha)
    }

    return(
        <div className="flex">
            <aside className="hidden lg:flex h-screen">
                <Image src={loginImage} className="h-auto w-auto object-cover "/>

            </aside>
            <main className="flex flex-col justify-center items-center p-4 h-screen w-full">
                <h2>Fiap Filmes</h2>
                <form onSubmit={login} className="flex flex-col gap-2">
                    <label htmlFor="email" >E-mail</label>
                    <input 
                    type="email" 
                    id ="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="bg-slate-600 p-1 rounded" 
                    />
                    <label htmlFor="password">Senha</label>
                    <input 
                    type="password" 
                    id ="password"
                    value={senha}
                    onChange={(e) => setSenha(e.target.value)}
                    className="bg-slate-600 p-1 rounded"
                     />
                    <button className="bg-pink-600 p-2 rounded mt-2">entrar</button>
                </form>
            </main>
        </div>
    )
}