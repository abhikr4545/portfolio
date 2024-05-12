import { SparklesCore } from "./ui/sparkles";

const SectionHeading = ({ title }: { title: string }) => {
  return (
    <div className="relative">
      <p className="text-2xl">
        {title}
      </p>
      <SparklesCore
        background="transparent"
        minSize={0.4}
        maxSize={1}
        particleDensity={1200}
        className="w-full h-12 absolute -top-2"
        particleColor="#FFFFFF"
      />
    </div>
  );
}

export default SectionHeading;