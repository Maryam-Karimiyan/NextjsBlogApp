import Image from "next/image";

const MyImage = ({ src, alt, width, height, layout }) => {
  return (
    <Image
      src={src}
      alt={alt}
      width={width && width}
      height={height && height}
      layout={layout && layout}
    />
  );
};
export default MyImage;
