import Image from "next/image";

interface AvatarProps {
  name: string;
  image?: string;
  size: number;
}

const initials = (name: string) =>
  name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((word) => word[0])
    .join("")
    .toUpperCase();

const Avatar = ({ name, image, size }: AvatarProps) => {
  if (image) {
    return (
      <div
        className="relative flex-none overflow-hidden rounded-full"
        style={{ width: size, height: size }}
      >
        <Image src={image} alt={name} fill className="object-cover" />
      </div>
    );
  }

  return (
    <div
      className="flex flex-none items-center justify-center rounded-full bg-light-lilac font-bold text-violet"
      style={{
        width: size,
        height: size,
        fontSize: Math.max(11, size * 0.34),
      }}
      aria-hidden="true"
    >
      {initials(name)}
    </div>
  );
};

export default Avatar;
