import { NoteForm } from "@/components/noteForm";
import { NoteCard } from "@/components/noteCard";

export default async function Home() {
  const res = await fetch("https://v1.appbackend.io/v1/rows/e9iupnMR3fk2", { cache: "no-store" });
  const { data } = await res.json();
  console.log(data);

  return (
    <main className="m-h-screen bg-gray-950 text-white p-8">
      <h1 className="text-3xl font-bold mb-4">Update Data</h1>
      <form className="space-y-4 mb-4">
        <div>
          <NoteForm />
        </div>
      </form>
      <h1 className="text-3xl font-bold text-white mb-4">Gundam Database</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {data.map((item) => {
          return <NoteCard key={item._id} item={item} />;
        })}
      </div>
      <p class="py-4 text-gray-400">
        gundam database assignment for Devscale | made by <text class="font-bold text-white">@hkaruz25</text>
      </p>
    </main>
  );
}
