import { useState, useEffect } from "react";

const useMediaQuery = (query) => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);

    if (media.matches !== matches) {
      setMatches(media.matches);
    }

    const handler = () => {
      setMatches(media.matches);
    };

    media.addListener(handler);

    return () => media.removeListener(handler);
  }, [matches, query]);

  return matches;
};

export default useMediaQuery;
