package br.gov.rj.petropolis.turispetro.resources;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.data.web.SortDefault;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.data.domain.Sort;

import br.gov.rj.petropolis.turispetro.model.Tourist;
import br.gov.rj.petropolis.turispetro.model.dto.TouristDTO;
import br.gov.rj.petropolis.turispetro.repositories.TouristRepository;
import br.gov.rj.petropolis.turispetro.services.TouristService;

@RestController
@RequestMapping("/tourist")
public class TouristResource {

	@Autowired
	private TouristService touristService;
	
	@GetMapping
	public Page<Tourist> getAll(@PageableDefault(size = 5, page = 0) @SortDefault(sort = "id", direction = Sort.Direction.ASC) Pageable pageable){
		
		return touristService.getall(pageable);
		
	}
	
	@GetMapping("/{id}")
	public Tourist getOne(@PathVariable Integer id) {
		return touristService.getOne(id);
		
	}
	
	@PostMapping
	public void createTourist(@RequestBody TouristDTO touristDTO) {
		touristService.createTourist(touristDTO);
		
	}
	
	@DeleteMapping("/{id}")
	public void deleteTourist(@PathVariable Integer id) {
		touristService.deleteTourist(id);
		
	}
	
	@PutMapping("/{id}")
	public void updateTourist(@PathVariable Integer id, @RequestBody TouristDTO touristDTO) {
		touristService.updateTourist(id, touristDTO);
	}
}
