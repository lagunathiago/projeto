class Peca {
    constructor(id,nome,referencia){
      this.id = id;
      this.nome = nome;
      this.referencia = referencia;
    }

    static criar(id, nome,referencia ) {
      const pecas = new Peca(id, nome, referencia);
      return pecas;
      }

      static listar(pecas) {
        return pecas;
      }

      static obter(pecas, id) {
        return pecas.find((pecas) => pecas.id === id);
      }

      static atualizar(pecas, id, nome, referencia) {
        const peca = this.obter(pecas, id);
        if (peca) {
          peca.nome = nome;
          peca.referencia = referencia;
          return peca;
        }
        return null;
      }

      static deletar(pecas, id) {
        const index = pecas.findIndex((pecas) => pecas.id === id);
        if (index !== -1) {
          const PecaRemovido = pecas.splice(index, 1)[0];
          return PecaRemovido;
        }
        return null;
      }
    }
    
    module.exports = Peca;

