package br.edu.ifms.ws.dao;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.EntityTransaction;
import javax.persistence.Query;

import br.edu.ifms.ws.model.Foto;
import br.edu.ifms.ws.model.ListaHashsFotos;
import br.edu.ifms.ws.model.Metadados;
import br.edu.ifms.ws.util.JPAUtil;

public class FotoDAO {

	public boolean salvar(Foto foto, boolean deveAtualizar) {
		try {
			EntityManager em = JPAUtil.criaEntityManager();
			EntityTransaction transacao = em.getTransaction();
			transacao.begin();
			if (deveAtualizar) {
				em.merge(foto);
			} else {
				em.persist(foto);
			}
			transacao.commit();
			em.close();
			return true;
		} catch (Exception e) {
			e.printStackTrace();
		}
		return false;
	}

	public boolean remover(String hash) {
		try {
			EntityManager em = JPAUtil.criaEntityManager();
			EntityTransaction transacao = em.getTransaction();
			transacao.begin();
			Query consulta = em.createNamedQuery(Foto.REMOVER_FOTO);
			consulta.setParameter("hash", hash);
			consulta.executeUpdate();
			transacao.commit();
			em.close();
			return true;
		} catch (Exception e) {
			e.printStackTrace();
		}
		return false;
	}

	@SuppressWarnings("unchecked")
	public ListaHashsFotos recuperarTudo() {
		List<String> hashs = new ArrayList<>();
		try {
			EntityManager em = JPAUtil.criaEntityManager();
			Query consulta = em.createNamedQuery(Foto.RECUPERA_TUDO);
			hashs = consulta.getResultList();
			em.close();
			return new ListaHashsFotos(hashs);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return null;
	}

	public Foto recuperarFoto(String hash) {
		try {
			EntityManager em = JPAUtil.criaEntityManager();
			Query consulta = em.createNamedQuery(Foto.RECUPERA_FOTO);
			consulta.setParameter("hash", hash);
			Foto foto = (Foto) consulta.getSingleResult();
			em.close();
			return foto;
		} catch (Exception e) {
			e.printStackTrace();
		}
		return null;
	}

	public Metadados recuperarMetadadosFoto(String hash) {
		try {
			return new Metadados(recuperarFoto(hash));
		} catch (Exception e) {
			e.printStackTrace();
		}
		return null;
	}

}
