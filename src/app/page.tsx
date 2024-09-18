import Card from "./components/Card";
import SectionTitle from "./components/SectionTitle";

export default function Home() {
  return (
    <main className="px-2.5 py-2.5 sm:px-16 sm:py-10 flex-1" style={{minHeight: "calc(100vh - 214px)"}}>
      <section>
        <SectionTitle>ARTIGOS</SectionTitle>
        <hr className="border-gray-100" />
        <div className="grid grid-cols-1 gap-2.5 items-center justify-center mt-6 sm:grid-cols-[repeat(auto-fill,256px)] sm:gap-5">
          <Card 
            title="A história do mascote do Android"
            image="https://res.cloudinary.com/dvegoqfdf/image/upload/v1713569635/bugdroid-media/android.jpg" 
            url="/artigo/a-historia-do-bugdroid"
          />
        </div>
      </section>
    </main>
  );
}
