package br.edu.ifms.ws.service;

import java.io.File;
import java.io.IOException;
import java.io.InputStream;
import java.util.Date;

import javax.ws.rs.Consumes;
import javax.ws.rs.DELETE;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import javax.ws.rs.core.Response.ResponseBuilder;

import org.apache.commons.io.FilenameUtils;
import org.apache.commons.io.IOUtils;
import org.glassfish.jersey.media.multipart.FormDataContentDisposition;
import org.glassfish.jersey.media.multipart.FormDataParam;

import br.edu.ifms.ws.dao.FotoDAO;
import br.edu.ifms.ws.model.Foto;
import br.edu.ifms.ws.model.ListaHashsFotos;
import br.edu.ifms.ws.model.Resposta;
import br.edu.ifms.ws.util.ArquivoUtil;
import br.edu.ifms.ws.util.StringUtil;

@Path("foto")
public class FotoService {

	@GET
	@Path("/")
	@Produces({ MediaType.APPLICATION_XML })
	public ListaHashsFotos recuperarHashsFotos() {
		FotoDAO dao = new FotoDAO();
		ListaHashsFotos lista = dao.recuperarTudo();
		return lista != null ? lista : new ListaHashsFotos();
	}

	@GET
	@Path("/{hash}")
	@Produces({ "image/png", "image/jpeg", "image/gif" })
	public Response recuperarFoto(@PathParam("hash") String hash) {
		FotoDAO dao = new FotoDAO();
		Foto foto = dao.recuperarFoto(hash);
		if (foto != null) {
			String nomeArquivo = foto.getHash() + "." + foto.getExtensao();
			File arquivo = ArquivoUtil.deByteArrayParaArquivoTemporario(foto.getBytesArquivo(), nomeArquivo);
			ResponseBuilder resposta = Response.ok((Object) arquivo);
			resposta.header("Content-Disposition", "attachment; filename=" + nomeArquivo);
			return resposta.build();
		}
		return Response.status(500).entity("Erro interno do servidor").build();
	}

	@POST
	@Path("/upload")
	@Consumes(MediaType.MULTIPART_FORM_DATA)
	@Produces({ MediaType.APPLICATION_XML })
	public Resposta fazerUploadDaFoto(@FormDataParam("arquivo") InputStream inputStream,
			@FormDataParam("arquivo") FormDataContentDisposition detalhesArquivo) {
		Resposta resposta = new Resposta();
		try {
			Foto foto = new Foto();
			byte[] bytesFoto = IOUtils.toByteArray(inputStream);
			foto.setBytesArquivo(bytesFoto);
			String hash = StringUtil.gerarHashMD5(bytesFoto);
			foto.setHash(hash);
			String extensaoArquivo = FilenameUtils.getExtension(detalhesArquivo.getFileName());
			foto.setExtensao(extensaoArquivo);
			foto.setDataPostagem(new Date());
			FotoDAO dao = new FotoDAO();
			if (dao.salvar(foto, false)) {
				resposta.setMensagem("Foto salva. Hash: " + hash);
				resposta.setSucesso(true);
			} else {
				resposta.setMensagem("Ocorreu um erro ao tentar salvar a foto");
				resposta.setSucesso(false);
			}
		} catch (IOException e) {
			resposta.setMensagem("Erro interno do servidor");
			resposta.setSucesso(false);
			e.printStackTrace();
		}

		return resposta;

	}

	@POST
	@Path("/update/{hash}/{descricao}")
	@Produces({ MediaType.APPLICATION_XML })
	public Resposta atualizarFoto(@PathParam("hash") String hash, @PathParam("descricao") String descricao) {
		Resposta resposta = new Resposta();
		FotoDAO dao = new FotoDAO();
		if (dao.recuperarFoto(hash) != null) {
			if (dao.remover(hash)) {
				resposta.setMensagem("Foto removida");
				resposta.setSucesso(true);
			} else {
				resposta.setMensagem("Ocorreu um erro ao tentar remover a foto");
				resposta.setSucesso(false);
			}
		} else {
			resposta.setMensagem("Foto não encontrada");
			resposta.setSucesso(false);
		}

		return resposta;
	}

	@DELETE
	@Path("/{hash}")
	@Produces({ MediaType.APPLICATION_XML })
	public Resposta removerFoto(@PathParam("hash") String hash) {
		Resposta resposta = new Resposta();
		FotoDAO dao = new FotoDAO();
		if (dao.remover(hash)) {
			resposta.setMensagem("Foto removida");
			resposta.setSucesso(true);
		} else {
			resposta.setMensagem("Ocorreu um erro ao tentar remover a foto");
			resposta.setSucesso(false);
		}
		return resposta;
	}

}
