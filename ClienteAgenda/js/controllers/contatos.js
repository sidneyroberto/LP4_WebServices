var app = angular.module('myApp', []);
app.controller('contatosCtrl', function ($scope, $http) {

    var carregaContatos = function () {
        $http.get("http://localhost:3000/contatos")
            .then(function (response) {
                $scope.contatos = response.data;
            });
    };

    carregaContatos();

    $scope.nome = null;
    $scope.telefone = null;
    $scope.endereco = null;
    $scope.email = null;

    $scope.salvaContato = function () {
        var dados = {
            nome: $scope.nome,
            telefone: $scope.telefone,
            endereco: $scope.endereco,
            email: $scope.email
        };
        $http.post("http://localhost:3000/contatos", JSON.stringify(dados))
            .then(
            function (sucesso) {
                $scope.sucesso = 'Contato salvo!';
                carregaContatos();
            },
            function (erro) {
                $scope.erro = 'Ocorreu um erro ao tentar salvar o contato';
            }
            );

    };

    $scope.removeContato = function (idContato) {
        $http.delete("http://localhost:3000/contatos/" + idContato)
            .then(
            function (sucesso) {
                $scope.sucesso = 'Contato removido';
                carregaContatos();
            },
            function (erro) {
                $scope.erro = 'Ocorreu um erro ao tentar remover o contato';
            }
            );
    };
});
