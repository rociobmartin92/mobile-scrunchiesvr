"use client"

import { Category } from "@/types";
import { useEffect, useState } from "react";
import { apiInstance } from "./api";

function useGetCategories() {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<Category[]>([]);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        setLoading(true);
        const result = await apiInstance.get("/categories?populate=*");
 
        setResult(result.data.data || []);
      } catch (error) {
        console.log("error in fetch categories", error);
        setError("Ocurrió un error al obtener las categorías.")
      }
      finally {
        setLoading(false)
      }
    };

    fetchCategories();
  }, []);

  return {result, error, loading};
}

export default useGetCategories;
