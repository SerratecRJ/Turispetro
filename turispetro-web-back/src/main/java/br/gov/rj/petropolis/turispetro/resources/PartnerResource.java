package br.gov.rj.petropolis.turispetro.resources;

import java.net.URI;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort.Direction;
import org.springframework.http.ResponseEntity;
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

import br.gov.rj.petropolis.turispetro.model.dto.PartnerDTO;
import br.gov.rj.petropolis.turispetro.services.PartnerService;

@Controller
@RequestMapping(value = "/partners")
public class PartnerResource {

	@Autowired
	private PartnerService partnerService;

	@GetMapping
	public ResponseEntity<Page<PartnerDTO>> findAll(@RequestParam(value = "page", defaultValue = "0") Integer page,
			@RequestParam(value = "linesPerPage", defaultValue = "12") Integer linesPerPage,
			@RequestParam(value = "direction", defaultValue = "ASC") String direction,
			@RequestParam(value = "orderBy", defaultValue = "corporateName") String orderBy) {

		PageRequest pageRequest = PageRequest.of(page, linesPerPage, Direction.valueOf(direction), orderBy);
		Page<PartnerDTO> lista = partnerService.findAllPages(pageRequest);

		return ResponseEntity.ok().body(lista);

	}
	
	@GetMapping("/filters/{corporateName}")
	public ResponseEntity<Page<PartnerDTO>> findByName(
			@PathVariable("corporateName") String corporateName,
			@RequestParam(value = "page", defaultValue = "0") Integer page,
			@RequestParam(value = "linesPerPage", defaultValue = "4") Integer linesPerPage,
			@RequestParam(value = "direction", defaultValue = "ASC") String direction,
			@RequestParam(value = "orderBy", defaultValue = "id") String orderBy) {	
		
		PageRequest pageRequest = PageRequest.of(page, linesPerPage, Direction.valueOf(direction), orderBy);
		
		if(corporateName.isEmpty()) {
			corporateName = "";
		}
		
		Page<PartnerDTO> list = partnerService.findByName(corporateName, pageRequest);	
		return ResponseEntity.ok().body(list);
	}
	
	
	

	@PostMapping
	public ResponseEntity<PartnerDTO> insert(@RequestBody PartnerDTO partner) {
		partner = partnerService.insert(partner);
		URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(partner.getId()).toUri();

		return ResponseEntity.created(uri).body(partner);
	}

	@PutMapping(value = "/{id}")
	public ResponseEntity<PartnerDTO> update(@PathVariable Integer id, @RequestBody PartnerDTO partner) {
		partner = partnerService.update(id, partner);
		return ResponseEntity.ok().body(partner);
	}

	@DeleteMapping(value = "/{id}")
	public ResponseEntity<PartnerDTO> delete(@PathVariable Integer id) {
		partnerService.delete(id);

		return ResponseEntity.noContent().build();

	}
}
