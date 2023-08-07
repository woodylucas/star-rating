import { useCallback, useState } from "react";
import StartRating from "./components/star-rating.component";

const App = () => {
  const [productRating, setProductRating] = useState(0);

  const handleRatingChange = useCallback((rating) => {
    setProductRating(rating);
  }, []);

  return (
    <main>
      Product Rating: {productRating}
      <StartRating maxRating={10} onRatingChange={handleRatingChange} />
    </main>
  );
};

export default App;
