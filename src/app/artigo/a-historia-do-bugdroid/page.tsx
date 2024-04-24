import { anta } from "@/app/utils/font"
import TitleSection from "./components/TitleSection"
import Aside from "./components/AsideComponent"
import Image from "next/image"

export default function Home(){
    return(
        <main className="max-w-lg mx-auto my-0 p-2.5">
            <article>
                <h2 className={`text-2xl text-green-600 font-bold ${anta.className} sm:text-4xl`}>A história do mascote do Android</h2>
                <p className="my-3 text-justify indent-5">Provavelmente você sabe que o sistema operacional <strong className="text-green-500">Android</strong>, mantido pelo <strong className="text-green-500">Google</strong> é um dos mais utilizados para dispositivos móveis em todo o mundo. Mas tavez você não saiba que o seu simpático mascote tem um nome e uma história muito curiosa? Pois acompanhe esse artigo para aprender muita coisa sobre esse robozinho.</p> 
                <section>
                    <TitleSection>A primeira versão</TitleSection>
                    <p className="my-3 text-justify indent-5 leading-7">A primeira tentativa de criar um mascote surgiu em 2007 e veio de um desenvolvedor chamado <a href="https://androidcommunity.com/dan-morrill-shows-us-the-android-mascot-that-almost-was-20130103/" target="_blank" className="text-green-600 bg-green-200 font-bold py-0.5 px-1">Dan Morrill🔗</a>. Ele conta que abriu o <a href="https://inkscape.org/pt-br/" className="text-green-600 bg-green-200 font-bold py-0.5 px-1">Inkscape🔗</a> (software livre para vetorização de imagens) e criou sua própria versão de robô. O objetivo era apenas personificar o sistema apenas para a a sua equipe, não existia nenhuma solicitação da empresa para a criação de um mascote.</p>

                    <Image
                        src="https://res.cloudinary.com/dvegoqfdf/image/upload/v1713569015/bugdroid-media/dan-droids.png"
                        width={500}
                        height={500}
                        alt="Mascote Dandroid"
                        className="my-0 mx-auto"
                    />

                    <p className="my-3 text-justify indent-5">Essa primeira versão bizarra até foi batizada em homenagem ao seu criador: seriam os <strong className="text-green-500">Dandroids</strong>.</p>
                </section>
                <section>
                    <TitleSection>Surge um novo mascote</TitleSection>
                    <p className="my-3 text-justify indent-5">A ideia de ter um mascote foi amadurecendo e a missão foi passada para uma profissional da área. A ilustradora Russa <a href="https://www.irinablok.com/android" target="_blank" className="text-green-600 bg-green-200 font-bold py-0.5 px-1">Irina Blok 🔗</a>, também funcionária do Google, ficou com a missão de representar o pequeno robô de uma maneira mais agradável.</p>

                    <Image
                        src="https://res.cloudinary.com/dvegoqfdf/image/upload/v1713568631/bugdroid-media/irina-blok.jpg"
                        width={500}
                        height={500}
                        alt="Foto Irina Blok"
                        className="my-0 mx-auto"
                    />

                    <p className="my-3 text-justify indent-5">A ideia principal da Irina era representar tudo graficamente com poucos traços e de forma mais chapada. O desenho também deveria gerar identificação rápida com quem o olha. Surgiu então o <strong className="text-green-500">Bugdroid</strong>, o novo mascote do Android.</p>

                    <Image 
                        src="https://res.cloudinary.com/dvegoqfdf/image/upload/v1713569453/bugdroid-media/bugdroid.png" 
                        width={260}
                        height={115}
                        alt="Imagem do Bugdroid"
                        className="my-0 mx-auto"
                    />

                    <p className="my-3 text-justify indent-5">A principal inspiração para os traços do novo <strong className="text-green-500">Bugdroid</strong> veio daqueles bonequinhos que ilustram portas de banheiro para indicar o gênero de cada porta. Conta a lenda que a artista estava criando em sua mesa no escritório do <strong className="text-green-500">Google</strong> e olhou para o lado dos banheiros e a identificação foi imediata: simples, limpo, objetivo.</p>
                </section>

                <section>
                    <div className="relative bg-green-600 pb-pct -ml-2.5 -mr-2.5 mb-3 sm:ml-0 sm:mr-0">
                        <iframe className="absolute left-5-pct top-5-pct w-90-pct h-90-pct" width="560" height="315" src="https://www.youtube.com/embed/l2UDgpLz20M?si=9cw09YbBrTDs-Ug_" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    </div>
                </section>
            </article>
            <Aside/>
            <p className="my-3 text-justify indent-5">Então é isso! Espero que você tenha gostado do nosso artigo com essa curiosidade sobre o sistema Android e seu simpático mascote.</p>
        </main>
    )
}
