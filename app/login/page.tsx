import { LoginForm } from "@/components/ui/login-form";
import { VideoBackground } from "@/components/ui/video-background";

export default function DemoOne() {
  return (
    <main className="relative w-screen h-screen bg-gray-900 overflow-hidden">
      <VideoBackground />
      <div className="relative z-10 flex items-center justify-center w-full h-full p-4">
        <LoginForm />
      </div>
    </main>
  );
}
