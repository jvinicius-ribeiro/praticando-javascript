let usuario = {
    nome: 'Vinicius',
    excluir: function () {
        console.log('O usuário, ' + this.nome + ' foi excluído.');
    },
};

usuario.excluir();