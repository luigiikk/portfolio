

export const Contatos = () => {
    return (
      <div className="mt-12 md:mt-24 space-y-8 md:space-y-16 px-6 md:px-32">
          <h1 className="text-5xl md:text-7xl font-bold text-center">Contatos</h1>
          <ul className="table mx-auto space-y-6 md:space-y-8">
            <li className="md:text-xl">
              <span className="font-bold">E-mail</span>
              <div className="flex gap-1 md:gap-3 items-center">
                <a href="mailto:luigimee15@gmail.com" className="text-sm md:text-lg text-slate-300 underline truncate">luigimee15@gmail.com</a>
              </div>
            </li>
            <li className="md:text-xl">
              <span className="font-bold">LinkedIn</span>
              <div className="flex gap-1 md:gap-3 items-center">
                <a href="https://www.linkedin.com/in/luigi-mateus-72388925a/?originalSubdomain=br" className="text-sm md:text-lg text-slate-300 underline truncate">https://www.linkedin.com/in/luigi-mateus-72388925a/</a>
              </div>
            </li>
            <li className="md:text-xl">
              <span className="font-bold">GitHub</span>
              <div className="flex gap-1 md:gap-3 items-center">
                <a href="https://github.com/luigiikk" className="text-sm md:text-lg text-slate-300 underline truncate">https://github.com/luigiikk</a>
              </div>
            </li>
          </ul>
      </div>
    );
  }
  