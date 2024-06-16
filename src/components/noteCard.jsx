"use client";
import { useRouter } from "next/navigation";

export const NoteCard = ({ item }) => {
  const router = useRouter();

  async function handleDeleteData() {
    await fetch("https://v1.appbackend.io/v1/rows/e9iupnMR3fk2", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify([item._id]),
    });
    router.refresh();
  }
  return (
    <div key={item.id} className="p-4 bg-gray-800 border border-gray-700 rounded">
      <p className="text-xl font-bold text-white">{item.release_year}</p>
      <h3 className="text-lg text-slate-100">Series From: {item.series}</h3>
      <p className="text-2xl font-bold mt-2 text-white mb-4">{item.gundam_name}</p>
      <button onClick={handleDeleteData}>Delete</button>
    </div>
  );
};
