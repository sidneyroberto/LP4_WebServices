package br.edu.ifms.lp4.agenda.resource;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import br.edu.ifms.lp4.agenda.model.Contato;
import br.edu.ifms.lp4.agenda.repository.ContatoRepository;

@RestController
@CrossOrigin("${origem-permitida}")
public class ContatoResource {

	@Autowired
	private ContatoRepository repositorio;

	@GetMapping("/contatos")
	public List<Contato> listar() {
		return repositorio.findAllByOrderByNomeAsc();
	}

	@PostMapping("/contatos")
	public Contato adicionar(@RequestBody @Valid Contato contato) {
		return repositorio.save(contato);
	}

	@SuppressWarnings({ "rawtypes", "unchecked" })
	@PutMapping("/contatos")
	public ResponseEntity atualizar(@RequestBody @Valid Contato contato) {
		Long id = contato.getId();
		if (id == null) {
			return new ResponseEntity("id nulo", HttpStatus.BAD_REQUEST);
		}
		if (repositorio.findOne(id) == null) {
			return new ResponseEntity("Contato não encontrado", HttpStatus.NOT_FOUND);
		}
		contato = repositorio.save(contato);
		return new ResponseEntity(contato, HttpStatus.OK);
	}

	@GetMapping("/contatos/{id}")
	public Contato recupera(@PathVariable("id") Long id) {
		return repositorio.findOne(id);
	}

	@SuppressWarnings({ "unchecked", "rawtypes" })
	@DeleteMapping("/contatos/{id}")
	public ResponseEntity remove(@PathVariable("id") Long id) {
		Contato contato = repositorio.findOne(id);
		if (contato == null) {
			return new ResponseEntity("Contato não encontrado", HttpStatus.NOT_FOUND);
		}
		repositorio.delete(contato);
		return new ResponseEntity(id, HttpStatus.OK);
	}
}
