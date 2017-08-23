package br.edu.ifms.ws.model;

import java.util.List;

import javax.xml.bind.annotation.XmlRootElement;

@XmlRootElement
public class ListaHashsFotos {

	private List<String> hash;

	private String resposta;

	public ListaHashsFotos() {
	}

	public ListaHashsFotos(List<String> hashs) {
		hash = hashs;
		resposta = hash.isEmpty() ? "Vazio" : hash.size() + " fotos encontradas";
	}

	public List<String> getHash() {
		return hash;
	}

	public String getResposta() {
		return resposta;
	}

	public void setHash(List<String> hash) {
		this.hash = hash;
	}

	public void setResposta(String resposta) {
		this.resposta = resposta;
	}

}
