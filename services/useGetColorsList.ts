"use client"

import { Color } from "@/types";
import { useEffect, useState } from "react";
import { apiInstance } from "./api";

function useGetColorsList() {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<Color[]>([]);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    const fetchColors = async () => {
      try {
        setLoading(true);
        const result = await apiInstance.get("/colors");
 
        setResult(result.data.data || []);
      } catch (error) {
        console.log("error in fetch colores", error);
        setError("Ocurrió un error al obtener las colores.")
      }
      finally {
        setLoading(false)
      }
    };

    fetchColors();
  }, []);

  return {result, error, loading};
}

export default useGetColorsList;
