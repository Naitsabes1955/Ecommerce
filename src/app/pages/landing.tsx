"use client"

export default function Home(){

    return(
        <>
        <main className=" text-white">
            {/* HEADER */}
            <header className="sticky top-0 z-50 border-b border-amber-600 bg-amber-500/95 backdrop-blur">
                <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
                <h1 className="text-2xl font-bold text-black">
                    My Ecommerce
                </h1>

                <nav className="hidden gap-8 md:flex">
                    <a href="#services" className="hover:text-red-950 font-semibold">
                    Quienes Somos?
                    </a>

                    <a href="#products" className="hover:text-red-950 font-semibold">
                    Nuestros Productos
                    </a>

                    <a href="#process" className="hover:text-red-950 font-semibold">
                    Nuestro Proceso
                    </a>

                    <a href="#contact" className="hover:text-red-950 font-semibold">
                    Contáctanos
                    </a>
                </nav>

                <button className="rounded-xl bg-amber-400/90 font-semibold text-slate-950 px-5 py-2 transition hover:bg-amber-500/90">
                    Accede con nosotros
                </button>
                
                </div>
            </header>

            <section className="relative overflow-hidden bg-vine-800">
                {/* <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-cyan-500/20 blur-3xl"></div>*/}
                <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
                <div className="grid items-center gap-16 lg:grid-cols-2">
                    <div>
                    <h1 className="mt-8 text-5xl font-extrabold leading-tight lg:text-7xl">
                        Convertimos tus ideas en
                        <span className="block text-amber-400">
                        productos únicos
                        </span>
                    </h1>

                    <p className="mt-8 max-w-xl text-lg text-slate-300">
                        Diseñamos y personalizamos productos para
                        emprendedores, personas, negocios y empresas que quieren
                        destacar su marca con calidad profesional.
                    </p>

                    <div className="mt-10 flex flex-wrap gap-4">
                        <button className="rounded-xl bg-amber-400/90 px-8 py-4 font-semibold text-slate-950 hover:bg-amber-400">
                        Ver Catálogo
                        </button>
                    </div>

                    <div className="mt-12 flex gap-10">
                        <div>
                        <h3 className="text-3xl font-bold text-white">
                            +500
                        </h3>
                        <p className="text-slate-400">
                            Pedidos realizados
                        </p>
                        </div>

                        <div>
                        <h3 className="text-3xl font-bold text-white">
                            +100
                        </h3>
                        <p className="text-slate-400">
                            Clientes felices
                        </p>
                        </div>

                        <div>
                        <h3 className="text-3xl font-bold text-white">
                            24h
                        </h3>
                        <p className="text-slate-400">
                            Tiempo de respuesta
                        </p>
                        </div>
                    </div>
                    </div>

                    {/* <div className="grid grid-cols-2 gap-4">
                        <div
                        className="rounded-3xl border border-slate-800 bg-slate-900 p-4"
                        >
                        <img 
                            className="h-48 w-full rounded-2xl object-cover"
                        />

                        <h3 className="mt-4 font-semibold">
                        </h3>
                        </div>
                    
                    </div> */}
                </div>
                </div>
            </section>

            {/* SERVICIOS */}
            <section
                id="services"
                className="mx-auto overflow-hidden px-6 py-24 bg-amber-500/95"/* bg-amber-500/95 */
            >
            <div className="max-w-7xl  lg:px-2">

                <h2 className=" text-4xl font-bold text-vine-800">{/* text-wine-900/99 */}
                ¿Quienes Somos?
                </h2>

                <p className="mt-4 text-gray-200">
                Somos una mini-empresa que ayuda a que tus ideas y productos obtengan esa unicidad que tu brindas
                </p>

                <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    <img src="asd" alt="marv" />
                
                </div>
            </div>
            </section>

            {/* PRODUCTOS */}
            <section
                id="products"
                className="bg-vine-800 py-24"
            >
                <div className="mx-auto max-w-7xl px-6">
                <h2 className="text-center text-4xl font-bold">
                    Nuestros Productos
                </h2>

                <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    
                    <div
                    
                        className="overflow-hidden rounded-3xl border border-primary-300 bg-amber-500/80"
                    >
                        <img
                        className="h-64 w-full object-cover"
                        />

                        <div className="p-6">
                        <h3 className="text-xl font-semibold">
                        </h3>

                        <button className="mt-6 w-full rounded-xl bg-vine-800 py-3 font-semibold text-white hover:bg-vine-900">
                            Ver Detalles
                        </button>
                        </div>
                    </div>
                </div>
                
                </div>
            </section>

            {/* PROCESO */}
            <section
                id="process"
                className="mx-auto max-w-7xl bg-amber-500 px-6 py-24"
            >
                <h2 className="text-center text-4xl font-bold">
                ¿Cómo Trabajamos?
                </h2>

                <div className="mt-16 grid gap-8 md:grid-cols-4">
                {[
                    "Cuéntanos tu idea",
                    "Creamos el diseño",
                    "Apruebas el proyecto",
                    "Producción y entrega",
                ].map((step, index) => (
                    <div
                    key={step}
                    className="rounded-3xl border border-slate-800 bg-slate-900 p-8 text-center"
                    >
                    <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-cyan-500 font-bold text-slate-950">
                        {index + 1}
                    </div>

                    <h3 className="font-semibold">{step}</h3>
                    </div>
                ))}
                </div>
            </section>

            {/* CTA */}
            <section
                id="contact"
                className="bg-cyan-500 py-24 text-center text-slate-950"
            >
                <div className="mx-auto max-w-4xl px-6">
                <h2 className="text-5xl font-extrabold">
                    ¿Listo para destacar tu marca?
                </h2>

                <p className="mt-6 text-lg">
                    Creamos productos personalizados que generan
                    impacto y hacen crecer tu negocio.
                </p>

                <button className="mt-10 rounded-xl bg-slate-950 px-10 py-4 font-semibold text-white">
                    Solicitar Cotización
                </button>
                </div>
            </section>

            {/* FOOTER */}
            <footer className="border-t border-slate-800 py-10">
                <div className="mx-auto max-w-7xl px-6 text-center text-slate-400">
                <h3 className="text-xl font-bold text-cyan-400">
                    CreativePrint
                </h3>

                <p className="mt-4">
                    Diseño gráfico, sublimación y personalización
                    profesional.
                </p>

                <p className="mt-6">
                    © 2026 CreativePrint. Todos los derechos reservados.
                </p>
                </div>
            </footer>
    </main>
        </>
    )
}