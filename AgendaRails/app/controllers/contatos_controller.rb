class ContatosController < ApplicationController

  def index
    @contatos = Contato.all
  end

  def new
    @contato = Contato.new
  end

  def edit
    @contato = Contato.find(params[:id])
  end

  def create
    @contato = Contato.new(contato_params)
    if @contato.save
      redirect_to contatos_path
    else
      render 'new'
    end
  end

  def update
    @contato = Contato.find(params[:id])

    if @contato.update(contato_params)
      redirect_to contatos_path
    else
      render 'edit'
    end
  end

  def destroy
    @contato = Contato.find(params[:id])
    @contato.destroy

    redirect_to contatos_path
  end

  private
    def contato_params
      params.require(:contato).permit(:nome, :telefone, :email, :endereco)
    end
end
