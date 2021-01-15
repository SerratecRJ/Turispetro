package br.gov.rj.petropolis.turispetro.resources;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import br.gov.rj.petropolis.turispetro.model.BookMarks;
import br.gov.rj.petropolis.turispetro.model.dto.BookMarksDTO;
import br.gov.rj.petropolis.turispetro.services.BookMarksService;

@RestController
public class BookMarkResource {

	@Autowired
	BookMarksService bookMarksService;
	
	@GetMapping("/bookmarks/{touristId}")
	public List<BookMarks> findAllByTouristId(@PathVariable Integer touristId){
		return bookMarksService.findAllByTouristId(touristId);
	}
	
	@GetMapping("/bookmarks/{touristId}/{partnerId}")
	public BookMarks findAllByTouristIdAndPartnerId(@PathVariable Integer touristId, @PathVariable Integer partnerId) {
		return bookMarksService.findAllByTouristIdAndPartnerId(partnerId,touristId);
	}
	
	@PutMapping("/bookmarks/modify")
	public ResponseEntity<String> updateBookMark(@RequestBody BookMarksDTO bookMarksDTO){
		bookMarksService.modifyBookMark(bookMarksDTO);
		return new ResponseEntity<String>("Atualizado com sucesso", HttpStatus.OK);
	}
	
	@PutMapping("/bookmarks/modify/grade")
	public ResponseEntity<String> updateGrade(@RequestBody BookMarksDTO bookMarksDTO){
		bookMarksService.modifyGrade(bookMarksDTO);
		return new ResponseEntity<String>("Atualizado com sucesso", HttpStatus.OK);
	}
}
