function Reservation() {
  return (
    <div>
      <h1 className="text-3xl medium-small-screen:text-6xl   text-center text-black mt-5 font-italiano">
        Por favor confirmar asistencia al siguiente número:
      </h1>

      <a className="text-3xl font-poppins my-5" href="tel:+573103487824">
        3103487824
      </a>
      <p className="text-black text-sm font-poppins my-3">
        Presiona en el número para llamar
      </p>
    </div>
  );
}

export { Reservation };
