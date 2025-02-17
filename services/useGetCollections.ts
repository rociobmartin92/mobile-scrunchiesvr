"use client"


import { useEffect, useState } from "react";
import { apiInstance } from "./api";
import { Collection } from "@/types";

function useGetCollections() {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<Collection[]>([]);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    const fetchCollections = async () => {
      try {
        setLoading(true);
        const result = await apiInstance.get("/collections?populate=*");

        setResult(result.data.data || []);
      } catch (error) {
        console.log("error in fetch colecciones", error);
        setError("Ocurrió un error al obtener las colecciones.")
      }
      finally {
        setLoading(false)
      }
    };

    fetchCollections();
  }, []);

  return {result, error, loading};
}

export default useGetCollections;
