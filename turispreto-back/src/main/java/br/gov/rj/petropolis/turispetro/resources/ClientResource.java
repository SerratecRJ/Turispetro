package br.gov.rj.petropolis.turispetro.resources;

import java.net.URI;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort.Direction;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import br.gov.rj.petropolis.turispetro.model.dto.ClientDTO;
import br.gov.rj.petropolis.turispetro.services.ClientService;

@Controller
@RequestMapping(value = "/users")
public class ClientResource {

	@Autowired
	private ClientService clientService;

	private final BCryptPasswordEncoder bCryptPasswordEncoder;

	public ClientResource(BCryptPasswordEncoder bCryptPasswordEncoder) {
		super();
		this.bCryptPasswordEncoder = bCryptPasswordEncoder;
	}

	@GetMapping
	public ResponseEntity<Page<ClientDTO>> findAll(@RequestParam(value = "page", defaultValue = "0") Integer page,
			@RequestParam(value = "linesPerPage", defaultValue = "12") Integer linesPerPage,
			@RequestParam(value = "direction", defaultValue = "ASC") String direction,
			@RequestParam(value = "orderBy", defaultValue = "login") String orderBy) {

		PageRequest pageRequest = PageRequest.of(page, linesPerPage, Direction.valueOf(direction), orderBy);
		Page<ClientDTO> lista = clientService.findAllPages(pageRequest);

		return ResponseEntity.ok().body(lista);

	}

	@PostMapping
	public ResponseEntity<ClientDTO> insert(@RequestBody ClientDTO client) {
		client.setPassword(bCryptPasswordEncoder.encode(client.getPassword()));
		client = clientService.insert(client);
		URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(client.getId()).toUri();

		return ResponseEntity.created(uri).body(client);
	}

	@PutMapping(value = "/{id}")
	public ResponseEntity<ClientDTO> update(@PathVariable Integer id, @RequestBody ClientDTO client) {
		client.setPassword(bCryptPasswordEncoder.encode(client.getPassword()));
		client = clientService.update(id, client);
		return ResponseEntity.ok().body(client);
	}

	@DeleteMapping(value = "/{id}")
	public ResponseEntity<ClientDTO> delete(@PathVariable Integer id) {
		clientService.delete(id);

		return ResponseEntity.noContent().build();

	}
}
