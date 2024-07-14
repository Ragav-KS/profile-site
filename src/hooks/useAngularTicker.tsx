import { useState, useEffect } from "react";

export function useAngularTicker() {
  const [angularTicker, setAngularTicker] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setAngularTicker(angularTicker + Math.PI / 180 / 10);

      document.documentElement.style.setProperty(
        "--angularTicker",
        `${angularTicker}rad`,
      );
    }, 10);

    return () => clearInterval(interval);
  }, [angularTicker]);
}
