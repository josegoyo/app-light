export const metadata = {
  title: "App Light - About",
  description: "This app is light to test",
};

export default function AboutPage() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <span className="text-5xl">About</span>
    </div>
  );
}
