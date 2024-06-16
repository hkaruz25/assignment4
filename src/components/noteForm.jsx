"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export const NoteForm = () => {
  const router = useRouter();

  const [release_year, setRelease] = useState("");
  const [series, setSeries] = useState("");
  const [gundam_name, setGundam_Name] = useState("");

  async function handleCreateData() {
    await fetch("https://v1.appbackend.io/v1/rows/e9iupnMR3fk2", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify([{ release_year, series, gundam_name }]),
    });

    router.refresh();
    setSeries("");
    setGundam_Name("");
    setPictures("");
  }

  return (
    <div className="space-y-4 mb-8">
      <textarea value={release_year} onChange={(e) => setRelease(e.target.value)} placeholder="Masukkan Tahun Rilis"></textarea>
      <textarea value={series} onChange={(e) => setSeries(e.target.value)} placeholder="Masukkan Asal Series"></textarea>
      <textarea value={gundam_name} onChange={(e) => setGundam_Name(e.target.value)} placeholder="Masukkan Nama Gundam"></textarea>
      <button onClick={handleCreateData}>Create</button>
    </div>
  );
};
