import { useContext } from "react";
import { AllProductsContext } from "../context/ProductContext";

function useColorAlgorithmHooks() {
  const { allProducts } = useContext(AllProductsContext);

  const colors = allProducts.map((name, index) => ({
    id: index,
    colorName: name.Color,
    select: false,
  }));
  const othersColor = [
    ...new Set(allProducts.flatMap((name, index) => name.colorsAvailable)),
  ];

  const colorAlgorithm = colors.concat(
    othersColor.map((name, index) => ({
      id: index + colors.length,
      colorName: name,
      select: false,
    }))
  );
  const popularColors = Object.entries(
    colorAlgorithm.reduce((acc, cur) => {
      if (!acc[cur.colorName]) {
        acc[cur.colorName] = 1;
      } else {
        acc[cur.colorName]++;
      }
      return acc;
    }, {})
  )
    .sort((a, b) => b[1] - a[1])
    .slice(0, 6)
    .map(([color], index) => ({
      id: index,
      colorName: color,
      select: false,
    }));

  return popularColors;
}

export default useColorAlgorithmHooks;
