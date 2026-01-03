import CompanionForm from "@/components/CompanionForm";

const New = () => {
  return (
    <main className="min-lg:w-1/3 min-md:w-2/3 items-center pb-4 justify-center">
      <article className="w-full gap-4 flex flex-col">
        <h1>Companion Builder</h1>
        <CompanionForm />
      </article>
    </main>
  );
};

export default New;
