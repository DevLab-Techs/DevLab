import Image from "next/image";

const Loader = () => {
  return (
    <div>
      <Image src="/loader.svg" alt="loader" width={50} height={50} />
    </div>
  );
};

export default Loader;
