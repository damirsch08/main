'use client'
import { useEffect } from "react";

export default function Page({ params }: { params: { id: string } }) {
  useEffect(() => {
    fetch('https://redirecting-g9tm.onrender.com/api/DummyBytes').then(() => console.log('ok'))
  }, []);
  return (
    <h1 className="min-h-screen flex items-center justify-center text-3xl">Здесь находится модель с id: {params.id}</h1>
  )
}