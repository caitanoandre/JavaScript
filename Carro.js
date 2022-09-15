class  Carro {
  constructor() {
    var Marca = "";
    var Modelo = "";
    var Ano = 0;

    this.SetMarca = SetMarca;
    this.SetModelo = SetModelo;
    this.SetAno = SetAno;
    this.ShowMarca = DisplayMarca;
    this.ShowModelo = DisplayModelo;
    this.ShowAno = DisplayAno;

    function DisplayMarca() {
      console.log(Marca);
    }

    function DisplayModelo() {
      console.log(Modelo);
    }

    function DisplayAno() {
      console.log(Ano);
    }


    function SetMarca(marca) {
      Marca = marca;

    }
    function SetModelo(modelo) {
      Modelo = modelo;

    }
    function SetAno(ano) {
      Ano = ano;

    }


  }
}






