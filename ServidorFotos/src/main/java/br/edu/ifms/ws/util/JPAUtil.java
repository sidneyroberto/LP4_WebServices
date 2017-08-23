package br.edu.ifms.ws.util;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;

public class JPAUtil {

	private static final String UNIDADE_PERSISTENCIA = "dev";

	private JPAUtil() {
	}

	public static EntityManager criaEntityManager() {
		EntityManagerFactory emf = Persistence.createEntityManagerFactory(UNIDADE_PERSISTENCIA);
		return emf.createEntityManager();
	}
}
