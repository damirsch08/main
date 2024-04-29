'use client'
import { useEffect } from "react";

export default function Page({ params }: { params: { id: string } }) {
	useEffect(() => {
		try{
			fetch('http://localhost:5000/api/DummyBytes').then(() => console.log('ok'))
		}catch(e){
			console.log(e);
		}
	}, []);
	return (
		<h1 className="min-h-screen flex items-center justify-center text-3xl">Здесь находится модель с id: {params.id}</h1>
	)
}