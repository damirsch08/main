export default function Page({ params }: { params: { id: string } }) {
  console.log(params.id);
  
  return (
    <h1 className="min-h-screen flex items-center justify-center text-3xl">Здесь находится модель с id: {params.id}</h1>
  )
}