import { ReactElement } from "react";

export default function AsideComponent(): ReactElement{
    return(
        <aside className="bg-green-200 rounded-lg p-2.5">
            <h4 className="text-white bg-green-500 -mx-2.5 -mt-2.5 p-2.5 rounded-tl-lg rounded-tr-lg">Quer aprender mais?</h4>
            <p className="my-3 text-justify indent-5">Outro assunto curioso em relação ao Android é que cada versão sempre foi nomeada em homenagem a um doce, em ordem alfabética a partir da versão 1.5 até a 9.0.</p>
            <ul className="list-inside list-image-check columns-2">
                <li>1.5 - Cupcake</li>
                <li>1.6 - Donut</li>
                <li>3.0 - Eclair</li>
                <li>2.2 - Froyo</li>
                <li>2.3 - Gingerbread</li>
                <li>3.0 - Honeycomb</li>
                <li>4.0 - Ice Cream Sandwich</li>
                <li>4.1 - Jelly Bean</li>
                <li>4.4 - KitKat</li>
                <li>5.0 - Lolipop</li>
                <li>6.0 - Marshmallow</li>
                <li>7.0 - Nougat</li>
                <li>8.0 - Oreo</li>
                <li>9.0 - Pie</li>
            </ul>
            <p className="my-3 text-justify indent-5">Infelizmente, o <strong className="text-green-500">Android Q</strong> não existiu, pois o Google resolveu pôr fim a essa divertida prática e começou a usar numerações, o que deu origem ao Android 10.</p>
            <p className="my-3 text-justify indent-5">Acesse aqui o site <a href="https://developer.android.com/about/versions?hl=pt-br" target="_blank" className="text-green-600 bg-green-200 font-bold py-0.5 px-1">Android History🔗</a> para conhecer a sequência das versões &quot;adocicadas&#34; e o que cada uma trouxe para o sistema Android.</p>
        </aside>
    )
}
