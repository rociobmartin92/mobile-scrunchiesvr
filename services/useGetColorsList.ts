"use client";

import { Color } from "@/types";
import { useEffect, useState } from "react";
import { apiInstance } from "./api";
import { Toast } from "expo-react-native-toastify";
import { DropdownData } from "expo-select-dropdown";

function useGetColorsList() {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<DropdownData<number, string>[]>([]);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    const fetchColors = async () => {
      try {
        setLoading(true);
        const result = await apiInstance.get("/colors");

        setResult(result.data.data || []);
      } catch (error) {
        console.log("Error in fetch colors:", error);
        Toast.error("Ocurrió un error al obtener las colores.");
      } finally {
        setLoading(false);
      }
    };

    fetchColors();
  }, []);

  return { result, error, loading };
}

export default useGetColorsList;
