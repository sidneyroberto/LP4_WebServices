package br.edu.ifms.ws.model;

import java.util.Date;

import javax.xml.bind.annotation.XmlRootElement;

@XmlRootElement
public class Metadados {

	private String descricao;

	private Date dataPostagem;

	public Metadados(Foto foto) {
		this.descricao = foto.getDescricao();
		this.dataPostagem = foto.getDataPostagem();
	}

	public String getDescricao() {
		return descricao;
	}

	public Date getDataPostagem() {
		return dataPostagem;
	}

}
