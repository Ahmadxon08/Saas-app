import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";

const CTA = () => {
  return (
    <section className="cta-section">
      <div className="cta-badge">Start learning your way.</div>
      <h2 className="text-2xl font-bold">
        Build a Personalize Learning Companion
      </h2>
      <p className="">
        Pick a name, subject, voice, & personality — and start learning through
        voice conversations that feel natural and fun.
      </p>
      <Image src={"/images/cta.svg"} alt="cta" width={367} height={232} />
      <Button className="primary-button">
        <Image src={"/icons/plus.svg"} alt="plus" width={12} height={12} />

        <Link href={"/companions/new"}>
          <p>Build a new Companion</p>
        </Link>
      </Button>
    </section>
  );
};

export default CTA;
