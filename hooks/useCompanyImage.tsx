import { useEffect, useState } from "react";

const useCompanyImage = (logo: String) => {
  const [image, setImage] = useState<String>("");

  useEffect(() => {
    setImage(logo);
  }, [logo]);

  return logo;
};

export default useCompanyImage;
