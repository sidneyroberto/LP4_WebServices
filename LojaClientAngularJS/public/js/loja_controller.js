angular.module('LojaClient', []).controller('LojaController', function ($scope, $http) {

    var carregaProdutos = function () {
        $http
            .get('http://localhost:3000/produtos')
            .then(function (resposta) {
                $scope.produtos = resposta.data;
            });
    };

    carregaProdutos();

    $scope.descricao = null;
    $scope.quantidadeEmEstoque = null;
    $scope.precoUnitario = null;
    $scope.dataUltimaRemessa = null;

    $scope.salvaProduto = function () {
        var dados = {
            descricao: $scope.descricao,
            quantidadeEmEstoque: $scope.quantidadeEmEstoque,
            precoUnitario: $scope.precoUnitario,
            dataUltimaRemessa: $scope.dataUltimaRemessa
        };
        $http.post("http://localhost:3000/produtos", JSON.stringify(dados))
            .then(
                function (sucesso) {
                    $scope.sucesso = 'Produto salvo!';
                    carregaProdutos();
                },
                function (erro) {
                    $scope.erro = 'Ocorreu um erro ao tentar salvar o produto';
                }
            );

    };

    $scope.removeProduto = function (id) {
        $http.delete("http://localhost:3000/produtos/" + id)
            .then(
                function (sucesso) {
                    $scope.sucesso = 'Produto removido';
                    carregaProdutos();
                },
                function (erro) {
                    $scope.erro = 'Ocorreu um erro ao tentar remover o produto';
                }
            );
    };

});