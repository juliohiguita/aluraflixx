import { Badge } from "../components/Badge";
import { Video } from "../components/Video";

export function Hero() {
	return (
		<div className="py-4 grid grid-cols-1 gap-4 md:py-6 lg:grid-cols-2 lg:h-[22rem] xl:h-[25rem]">
			<div className="flex flex-col gap-4 lg:justify-center">
				<Badge className="bg-sky-500">Alura</Badge>
				<h2 className="text-3xl lg:text-4xl">Aluraflix Challenge</h2>
				<p>
				
¡Bienvenido a Aluraflix!

Disfruta de una experiencia cinematográfica única desde la comodidad de tu hogar.
En nuestro sitio, encontrarás una amplia selección de películas de todos los géneros: desde clásicos atemporales hasta los últimos estrenos.
¡Prepárate para sumergirte en historias emocionantes y momentos inolvidables!

¿Listo para empezar? Explora nuestro catálogo y elige tu próxima película para una noche perfecta de cine en casa. ¡Que empiece la función!


				</p>
			</div>
			<div className="self-center">
				<Video className="max-w-md" link="https://www.youtube.com/watch?v=C_wBJGhauMY"/>
			</div>
		</div>
	);
}
