import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";

interface CompanionCardProps {
  name: string;
  id: string;
  topic: string;
  subject: string;
  duration: number;
  color: string;
}
const CompanionCard = ({
  id,
  name,
  topic,
  subject,
  color,
  duration,
}: CompanionCardProps) => {
  return (
    <article
      className="companion-card"
      style={{
        backgroundColor: color,
      }}
    >
      <div className="flex justify-between items-center">
        <div className="subject-badge">{subject}</div>

        <Button
          type="button"
          aria-label="Bookmark companion"
          className="companion-bookmark  p-3"
        >
          <div className="h-[30px] relative w-[26px]">
            <Image
              src="/icons/bookmark.svg"
              alt=""
              fill
              className="object-contain "
            />
          </div>
        </Button>
      </div>
      <h2 className="text-2xl font-bold">{name}</h2>
      <p className="text-sm">{topic}</p>

      <div className="flex items-center gap-2">
        <Image
          src={"/icons/clock.svg"}
          alt="duration"
          width={13.5}
          height={13.5}
        />
        <p className="text-sm">{duration} minutes</p>
      </div>

      <Button asChild className="btn-primary w-full justify-center">
        <Link href={`/companions/${id}`}>Launch lesson</Link>
      </Button>
    </article>
  );
};

export default CompanionCard;
