package br.edu.ifms.ws.model;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Lob;
import javax.persistence.NamedQueries;
import javax.persistence.NamedQuery;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

@Entity
@NamedQueries(value = {
		@NamedQuery(name = Foto.RECUPERA_TUDO, query = "select hash from Foto order by dataPostagem desc"),
		@NamedQuery(name = Foto.RECUPERA_FOTO, query = "from Foto where hash = :hash"),
		@NamedQuery(name = Foto.REMOVER_FOTO, query = "delete from Foto where hash = :hash") })
public class Foto {

	public static final String RECUPERA_TUDO = "Foto.recuperaTudo";

	public static final String RECUPERA_FOTO = "Foto.recuperaFoto";

	public static final String REMOVER_FOTO = "Foto.removerFoto";

	@Id
	@GeneratedValue
	private Long id;

	@Column(columnDefinition = "TEXT")
	private String descricao;

	@Column(nullable = false)
	private String extensao;

	@Column(nullable = false, unique = true)
	private String hash;

	@Temporal(TemporalType.TIMESTAMP)
	@Column(nullable = false)
	private Date dataPostagem;

	@Lob
	@Column(nullable = false)
	private byte[] bytesArquivo;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getDescricao() {
		return descricao;
	}

	public void setDescricao(String descricao) {
		this.descricao = descricao;
	}

	public String getExtensao() {
		return extensao;
	}

	public void setExtensao(String extensao) {
		this.extensao = extensao;
	}

	public String getHash() {
		return hash;
	}

	public void setHash(String hash) {
		this.hash = hash;
	}

	public Date getDataPostagem() {
		return dataPostagem;
	}

	public void setDataPostagem(Date dataPostagem) {
		this.dataPostagem = dataPostagem;
	}

	public byte[] getBytesArquivo() {
		return bytesArquivo;
	}

	public void setBytesArquivo(byte[] bytesArquivo) {
		this.bytesArquivo = bytesArquivo;
	}

}
