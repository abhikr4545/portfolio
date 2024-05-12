import HeroSection from "@/components/hero-section";
import PostsSection from "@/components/posts-section";
import ProjectsSection from "@/components/projects-section";
import Skills from "@/components/skills";

export default function Home() {
  return (
    <main className="w-full sm:max-w-6xl mx-auto">
      <HeroSection />
      <PostsSection />
      <Skills />
      <ProjectsSection />
    </main>
  );
}
