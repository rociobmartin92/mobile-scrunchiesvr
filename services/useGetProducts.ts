import { useState, useEffect } from "react";
import { Product } from "@/types";
import { apiInstance } from "./api";

const useGetProducts = (filters?: any) => {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<Product[]>([]);
  const [error, setError] = useState<string>("");

  const fetchProducts = async () => {
    try {
      setLoading(true);

      let url = "/producs";

      if (filters && Object.keys(filters).length > 0) {
        const queryParams = Object.keys(filters)
          .map((key) => {
            // Para cada filtro, aplicamos la estructura `filters[key][subkey][$eq]=value`
            if (typeof filters[key] === "object") {
              return Object.keys(filters[key]).map((subKey) => {
                return `filters[${key}][${subKey}][$eq]=${filters[key][subKey]}`;
              });
            }
            return `filters[${key}][$eq]=${filters[key]}`;
          })
          .flat()
          .join("&"); // Unimos todos los filtros con '&'

        url += `?${queryParams}`; // Añadimos los filtros a la URL
      }

      const response = await apiInstance.get(url + "&populate=*");

      setResult(response.data.data || []);
    } catch (error) {
      console.error("Error al obtener los productos:", error);
      setError("Ocurrió un error al obtener los productos.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, [filters]);

  return { loading, result, error };
};

export default useGetProducts;
