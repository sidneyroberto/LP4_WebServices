package br.edu.ifms.lp4.agenda.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import br.edu.ifms.lp4.agenda.model.Contato;

public interface ContatoRepository extends JpaRepository<Contato, Long> {

	List<Contato> findAllByOrderByNomeAsc();
}
